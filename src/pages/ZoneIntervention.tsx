import { useEffect } from 'react';
import { LocalizedLink as Link } from '../components/LocalizedLink';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { communePages } from '../communeContent';

const brandColor = '#BA9765';

export default function ZoneIntervention() {
  const { t, lang } = useLanguage();
  const zone = t.zone;
  const communes = communePages[lang];

  useEffect(() => {
    document.title = zone.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', zone.metaDescription);
    return () => {
      const fallbackTitles = {
        FR: 'VitraCare — Films et teintes pour vitrages à Bruxelles',
        NL: 'VitraCare — Folies en tinten voor beglazing in Brussel',
        EN: 'VitraCare — Window films and tints in Brussels',
      };
      document.title = fallbackTitles[lang];
    };
  }, [zone, lang]);

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
            {zone.title}
          </h1>

          <p className="text-[16px] leading-relaxed mb-10" style={{ color: '#4a4a4a' }}>
            {zone.intro}
          </p>

          <div className="flex flex-col gap-10 text-[16px] leading-relaxed" style={{ color: '#4a4a4a' }}>
            <div>
              <h2 className="text-[21px] font-bold mb-3" style={{ color: '#464646' }}>
                {zone.brusselsHeading}
              </h2>
              <p className="mb-4">{zone.brusselsIntro}</p>
              <div className="flex flex-wrap gap-2">
                {zone.brusselsCommunes.map((name) => {
                  const slug = communes.find((c) => c.name === name)?.slug;
                  if (slug) {
                    return (
                      <Link
                        key={name}
                        to={`/communes/${slug}`}
                        className="px-4 py-2 rounded-full text-[14px] font-bold border transition-colors hover:text-white"
                        style={{ borderColor: brandColor, color: brandColor }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brandColor)}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        {name}
                      </Link>
                    );
                  }
                  return (
                    <span
                      key={name}
                      className="px-4 py-2 rounded-full text-[14px] border border-gray-200"
                      style={{ color: '#4a4a4a' }}
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-[21px] font-bold mb-3" style={{ color: '#464646' }}>
                {zone.peripheryHeading}
              </h2>
              <p>{zone.peripheryIntro}</p>
            </div>

            <div>
              <h2 className="text-[21px] font-bold mb-3" style={{ color: '#464646' }}>
                {zone.bigCitiesHeading}
              </h2>
              <p>{zone.bigCitiesText}</p>
            </div>
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

          <div className="mt-14">
            <h2 className="text-[21px] font-bold mb-2" style={{ color: '#464646' }}>
              {zone.detailedHeading}
            </h2>
            <p className="text-[15px] mb-5" style={{ color: '#767676' }}>
              {zone.detailedIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {communes.map((c) => (
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
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
