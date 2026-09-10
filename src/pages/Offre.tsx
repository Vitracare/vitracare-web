import { useEffect } from 'react';
import { LocalizedLink as Link } from '../components/LocalizedLink';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const brandColor = '#BA9765';

export default function Offre() {
  const { t, lang } = useLanguage();
  const o = t.offre;

  useEffect(() => {
    document.title = o.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', o.metaDescription);
    return () => {
      const fallbackTitles = {
        FR: 'VitraCare — Films et teintes pour vitrages à Bruxelles',
        NL: 'VitraCare — Folies en tinten voor beglazing in Brussel',
        EN: 'VitraCare — Window films and tints in Brussels',
      };
      document.title = fallbackTitles[lang];
    };
  }, [o, lang]);

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <SiteHeader alwaysSolid />

      <div className="flex-1 px-8 md:px-16 lg:px-20 pt-36 pb-24">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl mb-10 p-8 md:p-10"
            style={{ backgroundColor: '#FBF3E3', border: '2px dashed #BA9765' }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-4"
              style={{ backgroundColor: brandColor, color: '#FFFFFF' }}
            >
              <Sparkles size={13} />
              {o.eyebrow}
            </div>

            <h1 className="text-[30px] md:text-[38px] font-bold leading-tight mb-4" style={{ color: '#464646' }}>
              {o.title}
            </h1>

            <p className="text-[16px] leading-relaxed mb-5" style={{ color: '#4a4a4a' }}>
              {o.intro}
            </p>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold"
              style={{ backgroundColor: '#FFFFFF', color: brandColor, border: `1.5px solid ${brandColor}` }}
            >
              {o.badge}
            </div>
          </div>

          <div className="flex flex-col gap-8 text-[16px] leading-relaxed" style={{ color: '#4a4a4a' }}>
            <div>
              <h2 className="text-[21px] font-bold mb-3" style={{ color: '#464646' }}>
                {o.section1_title}
              </h2>
              <p>{o.section1_desc}</p>
            </div>
            <div>
              <h2 className="text-[21px] font-bold mb-3" style={{ color: '#464646' }}>
                {o.section2_title}
              </h2>
              <p>{o.section2_desc}</p>
            </div>
          </div>

          <div className="mt-14 p-8 rounded-xl text-center" style={{ backgroundColor: '#FAF9F6' }}>
            <Link
              to="/devis"
              className="inline-block text-white px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] bg-[#BA9765] cursor-pointer"
            >
              {o.cta}
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
