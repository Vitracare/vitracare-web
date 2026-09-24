// Petit wrapper pour envoyer des événements GA4 sans planter si gtag n'est
// pas chargé (bloqueur de pub, consentement refusé, etc.) et sans utiliser `any`.
type GtagFn = (...args: unknown[]) => void;
type ClarityFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
    clarity?: ClarityFn;
  }
}

const GA_MEASUREMENT_ID = 'G-Y5NX2SQWZX';
const CLARITY_PROJECT_ID = 'ynbho80wac';
const CONSENT_KEY = 'vitracare_cookie_consent';

export type ConsentStatus = 'granted' | 'denied' | null;

export function getConsentStatus(): ConsentStatus {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

// Charge le tag Google Analytics dynamiquement — jamais présent dans index.html,
// pour qu'aucun cookie de mesure d'audience ne soit déposé avant consentement.
function loadGaScript() {
  if (document.getElementById('ga-script')) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

// Même principe pour Microsoft Clarity (heatmaps/enregistrements de session) :
// jamais chargé sans consentement, il dépose lui aussi des cookies de mesure.
function loadClarityScript() {
  if (document.getElementById('clarity-script')) return;

  window.clarity = window.clarity || function (...args: unknown[]) {
    const c = window.clarity as ClarityFn & { q?: unknown[] };
    (c.q = c.q || []).push(args);
  };

  const script = document.createElement('script');
  script.id = 'clarity-script';
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  document.head.appendChild(script);
}

function loadAnalyticsScripts() {
  loadGaScript();
  loadClarityScript();
}

// Best-effort : supprime les cookies GA/Clarity existants quand quelqu'un retire
// son consentement après l'avoir donné. Pas garanti à 100% (un rechargement de
// page reste la façon la plus fiable de repartir sur une base propre), mais
// évite de laisser traîner des cookies déjà posés sans raison.
function deleteAnalyticsCookies() {
  try {
    const cookies = document.cookie.split(';').map((c) => c.trim().split('=')[0]);
    const trackingCookies = cookies.filter(
      (name) => name === '_ga' || name.startsWith('_ga_') || name === '_clck' || name === '_clsk'
    );
    const domain = window.location.hostname.replace(/^www\./, '');
    for (const name of trackingCookies) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${domain}`;
    }
  } catch {
    // silencieux
  }
}

export function grantConsent() {
  try {
    localStorage.setItem(CONSENT_KEY, 'granted');
  } catch {
    // silencieux
  }
  loadAnalyticsScripts();
}

export function denyConsent() {
  try {
    localStorage.setItem(CONSENT_KEY, 'denied');
  } catch {
    // silencieux
  }
  deleteAnalyticsCookies();
}

// À appeler une fois au montage de l'app : recharge GA/Clarity si la personne
// avait déjà accepté lors d'une visite précédente (les scripts ne persistent
// pas d'une page à l'autre, contrairement au choix stocké en localStorage).
export function initAnalyticsIfConsented() {
  if (getConsentStatus() === 'granted') loadAnalyticsScripts();
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  try {
    window.gtag?.('event', eventName, params);
  } catch {
    // silencieux : le tracking ne doit jamais casser le parcours utilisateur
  }
}
