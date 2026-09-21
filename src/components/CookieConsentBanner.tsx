import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { translations, Lang } from '../i18n';
import { langPrefixes } from '../App';
import { withLangPrefix } from './LocalizedLink';
import { getConsentStatus, grantConsent, denyConsent } from '../lib/analytics';

const brandColor = '#BA9765';
export const OPEN_COOKIE_PREFS_EVENT = 'vitracare:open-cookie-prefs';

function langFromPath(pathname: string): Lang {
  if (pathname === '/nl' || pathname.startsWith('/nl/')) return 'NL';
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'EN';
  return 'FR';
}

export const CookieConsentBanner = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const lang = langFromPath(location.pathname);
  const prefix = langPrefixes[lang];
  const t = translations[lang];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (getConsentStatus() === null) setVisible(true);

    // Lets the "Gérer les cookies" footer link reopen this banner from anywhere.
    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_PREFS_EVENT, reopen);
  }, []);

  const accept = () => {
    grantConsent();
    setVisible(false);
  };

  const refuse = () => {
    const hadGaLoaded = typeof document !== 'undefined' && !!document.getElementById('ga-script');
    denyConsent();
    setVisible(false);
    // If GA was already running this session (consent given, then withdrawn via
    // the footer link), a reload is the only reliable way to guarantee it
    // actually stops — a loaded script can't be un-executed in place.
    if (hadGaLoaded) window.location.reload();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed z-[200] left-4 right-4 bottom-4 md:left-6 md:right-auto md:bottom-6 md:max-w-[420px] rounded-2xl shadow-2xl p-5"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
      role="dialog"
      aria-label="Cookies"
    >
      <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#464646' }}>
        {t.cookies.text}{' '}
        <a
          href={withLangPrefix('/politique-confidentialite', prefix)}
          className="underline underline-offset-2"
          style={{ color: brandColor }}
        >
          {t.cookies.linkText}
        </a>
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={refuse}
          className="flex-1 text-[13px] font-bold px-4 py-2.5 rounded-full border-2 transition-colors hover:border-[#BA9765] hover:text-[#BA9765]"
          style={{ borderColor: '#D0D0D0', color: '#464646', backgroundColor: '#FFFFFF' }}
        >
          {t.cookies.refuse}
        </button>
        <button
          type="button"
          onClick={accept}
          className="flex-1 text-white text-[13px] font-bold px-4 py-2.5 rounded-full border-2 border-[#BA9765] transition-all hover:bg-transparent hover:text-[#BA9765]"
          style={{ backgroundColor: brandColor }}
        >
          {t.cookies.accept}
        </button>
      </div>
    </div>
  );
};
