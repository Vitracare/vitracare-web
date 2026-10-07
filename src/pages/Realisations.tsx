import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { LocalizedLink as Link } from '../components/LocalizedLink';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const brandColor = '#BA9765';

// Real native dimensions of each chantier photo (not all identical) — used for the
// width/height attributes below so the browser can reserve the right box before the
// image loads, even though the aspect-[3/4] class is what actually crops/displays it.
const chantierDimensions: Record<number, { width: number; height: number }> = {
  1: { width: 525, height: 700 },
  2: { width: 525, height: 700 },
  3: { width: 525, height: 700 },
  4: { width: 397, height: 700 },
  5: { width: 525, height: 700 },
  6: { width: 525, height: 700 },
  7: { width: 525, height: 700 },
  8: { width: 525, height: 700 },
  9: { width: 525, height: 700 },
};

const chantierNumbers = Array.from({ length: 9 }, (_, i) => i + 1);

export default function Realisations() {
  const { t } = useLanguage();
  // Index into chantierNumbers, not the chantier number itself — null = closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const showPrev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + chantierNumbers.length) % chantierNumbers.length));
  const showNext = () => setOpenIndex((i) => (i === null ? null : (i + 1) % chantierNumbers.length));

  // Keyboard nav (desktop/iPad with keyboard) + lock body scroll while open.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex]);

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <SiteHeader activeId="realisations" alwaysSolid />

      <div className="flex-1 px-8 md:px-16 lg:px-20 pt-36 pb-24">
        <h1 className="text-[32px] md:text-[40px] font-bold text-center mb-4" style={{ color: '#464646' }}>
          {t.realisations.title}
        </h1>
        <p className="text-[15px] md:text-[16px] text-center max-w-2xl mx-auto mb-8" style={{ color: '#767676' }}>
          {t.realisations.intro}
        </p>
        <div className="w-[60px] h-[2px] mb-16 mx-auto" style={{ backgroundColor: brandColor }}></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {chantierNumbers.map((n, idx) => {
            const caption = t.realisations.captions[n - 1];
            return (
              <button
                key={n}
                type="button"
                onClick={() => setOpenIndex(idx)}
                aria-label={caption}
                className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in block w-full text-left"
              >
                <img
                  src={`/images/realisations/chantier-${n}.jpg`}
                  alt={caption}
                  loading="lazy"
                  width={chantierDimensions[n].width}
                  height={chantierDimensions[n].height}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox — click a thumbnail above to open, click the backdrop/X or press
          Escape to close, arrows or left/right keys to browse. Works the same on
          desktop, tablet and mobile (just tap instead of click). */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={`/images/realisations/chantier-${chantierNumbers[openIndex]}.jpg`}
            alt={t.realisations.captions[chantierNumbers[openIndex] - 1]}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-lg"
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <p
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 max-w-[90%] text-center text-white/90 text-[13px] md:text-[14px] px-4"
          >
            {t.realisations.captions[chantierNumbers[openIndex] - 1]}
          </p>
        </div>
      )}

      {/* CTA band */}
      <div className="w-full bg-[#FAF9F6] border-t border-gray-100 py-16 px-8 text-center">
        <h2 className="text-[24px] md:text-[28px] font-bold mb-3" style={{ color: '#464646' }}>
          {t.realisations.ctaTitle}
        </h2>
        <p className="text-[15px] mb-8 max-w-xl mx-auto" style={{ color: '#767676' }}>
          {t.realisations.ctaSubtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/devis"
            className="inline-block text-white px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] bg-[#BA9765] cursor-pointer"
          >
            {t.hero.getQuote}
          </Link>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 cursor-pointer hover:text-white"
            style={{ color: brandColor, borderColor: brandColor }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brandColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
