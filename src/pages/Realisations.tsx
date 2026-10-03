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

export default function Realisations() {
  const { t } = useLanguage();

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
          {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => {
            const caption = t.realisations.captions[n - 1];
            return (
              <div key={n} className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={`/images/realisations/chantier-${n}.jpg`}
                  alt={caption}
                  loading="lazy"
                  width={chantierDimensions[n].width}
                  height={chantierDimensions[n].height}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>

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
