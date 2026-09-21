// Petit wrapper pour envoyer des événements GA4 sans planter si gtag n'est
// pas chargé (bloqueur de pub, consentement refusé, etc.) et sans utiliser `any`.
type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

const GA_MEASUREMENT_ID = 'G-Y5NX2SQWZX';
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

// Best-effort : supprime les cookies GA existants quand quelqu'un retire son
// consentement après l'avoir donné. Pas garanti à 100% (un rechargement de
// page reste la façon la plus fiable de repartir sur une base propre), mais
// évite de laisser traîner des cookies déjà posés sans raison.
function deleteGaCookies() {
  try {
    const cookies = document.cookie.split(';').map((c) => c.trim().split('=')[0]);
    const gaCookies = cookies.filter((name) => name === '_ga' || name.startsWith('_ga_'));
    const domain = window.location.hostname.replace(/^www\./, '');
    for (const name of gaCookies) {
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
  loadGaScript();
}

export function denyConsent() {
  try {
    localStorage.setItem(CONSENT_KEY, 'denied');
  } catch {
    // silencieux
  }
  deleteGaCookies();
}

// À appeler une fois au montage de l'app : recharge GA si la personne avait
// déjà accepté lors d'une visite précédente (le script ne persiste pas d'une
// page à l'autre, contrairement au choix stocké en localStorage).
export function initAnalyticsIfConsented() {
  if (getConsentStatus() === 'granted') loadGaScript();
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  try {
    window.gtag?.('event', eventName, params);
  } catch {
    // silencieux : le tracking ne doit jamais casser le parcours utilisateur
  }
}
