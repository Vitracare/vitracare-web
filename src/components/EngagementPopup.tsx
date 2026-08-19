import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, MessageCircle } from 'lucide-react';
import { translations, Lang } from '../i18n';
import { langPrefixes } from '../App';
import { withLangPrefix } from './LocalizedLink';

const brandColor = '#BA9765';
const SHOW_AFTER_MS = 9000;
const DISMISSED_KEY = 'vitracare_popup_dismissed';

// Pages where a "talk to us" popup would be redundant — the visitor is already mid-conversion there.
const HIDDEN_ON = ['/devis', '/contact'];

function langFromPath(pathname: string): Lang {
  if (pathname === '/nl' || pathname.startsWith('/nl/')) return 'NL';
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'EN';
  return 'FR';
}

export const EngagementPopup = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const lang = langFromPath(location.pathname);
  const prefix = langPrefixes[lang];
  const t = translations[lang];

  const barePath = location.pathname.replace(/^\/(nl|en)(?=\/|$)/, '') || '/';
  const isHiddenPage = HIDDEN_ON.some((p) => barePath === p || barePath === `${p}/`);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(DISMISSED_KEY)) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(DISMISSED_KEY, '1');
  };

  if (dismissed || isHiddenPage) return null;

  return (
    <div
      className={`fixed z-[150] left-4 right-4 bottom-4 md:left-auto md:right-6 md:bottom-6 md:w-[360px] transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl border border-black/5 p-6 pt-7">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#F2E9DA' }}>
          <MessageCircle size={20} color={brandColor} />
        </div>

        <h3 className="text-[17px] font-bold leading-snug mb-2" style={{ color: '#464646' }}>
          {t.popup.title}
        </h3>
        <p className="text-[14px] text-[#767676] leading-relaxed mb-5">
          {t.popup.subtitle}
        </p>

        <div className="flex flex-col gap-2.5">
          <a
            href="https://wa.me/32489607074"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 text-white text-[13px] font-bold px-5 py-3 rounded-full tracking-wide transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] cursor-pointer"
            style={{ backgroundColor: brandColor }}
          >
            <MessageCircle size={15} />
            {t.popup.whatsapp}
          </a>
          <a
            href={withLangPrefix('/devis', prefix)}
            onClick={close}
            className="inline-flex items-center justify-center text-[13px] font-bold px-5 py-3 rounded-full tracking-wide transition-all duration-300 border-2 border-gray-200 hover:border-[#BA9765] hover:text-[#BA9765] cursor-pointer"
            style={{ color: '#464646' }}
          >
            {t.hero.getQuote}
          </a>
        </div>
      </div>
    </div>
  );
};
