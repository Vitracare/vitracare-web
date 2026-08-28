import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LocalizedLink as Link, withLangPrefix } from '../components/LocalizedLink';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { communePages } from '../communeContent';
import { langPrefixes } from '../App';

const brandColor = '#BA9765';

export default function Commune() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const commune = communePages[lang].find((c) => c.slug === slug);
  const otherCommunes = communePages[lang].filter((c) => c.slug !== slug);

  useEffect(() => {
    if (commune) {
      document.title = `${commune.metaTitle}`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', commune.metaDescription);
    }
    return () => {
      const fallbackTitles = {
        FR: 'VitraCare — Films et teintes pour vitrages à Bruxelles',
        NL: 'VitraCare — Folies en tinten voor beglazing in Brussel',
        EN: 'VitraCare — Window films and tints in Brussels',
      };
      document.title = fallbackTitles[lang];
    };
  }, [commune, lang]);

  if (!commune) {
    return <Navigate to={withLangPrefix('/', langPrefixes[lang])} replace />;
  }

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <SiteHeader alwaysSolid />

      <div className="flex-1 px-8 md:px-16 lg:px-20 pt-36 pb-24">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[14px] font-bold mb-8 hover:opacity-70 transition-opacity" style={{ color: brandColor }}>
            <ArrowLeft size={16} />
            {t.nav.home}
          </Link>

          <h1 className="text-[30px] md:text-[38px] font-bold leading-tight mb-6" style={{ color: '#464646' }}>
            {commune.title}
          </h1>

          <p className="text-[16px] leading-relaxed mb-8" style={{ color: '#4a4a4a' }}>
            {commune.intro}
          </p>

          <div className="flex flex-col gap-7 text-[16px] leading-relaxed" style={{ color: '#4a4a4a' }}>
            {commune.sections.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="text-[21px] font-bold mb-3" style={{ color: '#464646' }}>
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="mb-3">{p}</p>
                ))}
              </div>
            ))}

            {commune.faq.length > 0 && (
              <div>
                <h2 className="text-[21px] font-bold mb-5" style={{ color: '#464646' }}>
                  {t.blog.faqTitle}
                </h2>
                <div className="flex flex-col gap-5">
                  {commune.faq.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>
                        {item.question}
                      </h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-14 p-8 rounded-xl text-center" style={{ backgroundColor: '#FAF9F6' }}>
            <p className="text-[16px] font-bold mb-5" style={{ color: '#464646' }}>
              {t.blog.ctaTitle}
            </p>
            <Link
              to="/devis"
              className="inline-block text-white px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] bg-[#BA9765] cursor-pointer"
            >
              {t.hero.getQuote}
            </Link>
          </div>

          {otherCommunes.length > 0 && (
            <div className="mt-14">
              <h2 className="text-[21px] font-bold mb-5" style={{ color: '#464646' }}>
                {t.commune.otherAreas}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {otherCommunes.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/communes/${c.slug}`}
                    className="flex flex-col rounded-xl border border-gray-100 hover:border-[#BA9765] transition-colors p-5 group"
                  >
                    <h3 className="text-[15px] font-bold leading-snug group-hover:opacity-80 transition-opacity" style={{ color: '#464646' }}>
                      {c.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
