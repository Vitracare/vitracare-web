// Petit wrapper pour envoyer des événements GA4 sans planter si gtag n'est
// pas chargé (bloqueur de pub, mode privé, etc.) et sans utiliser `any`.
type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  try {
    window.gtag?.('event', eventName, params);
  } catch {
    // silencieux : le tracking ne doit jamais casser le parcours utilisateur
  }
}
