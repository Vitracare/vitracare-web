import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { blogArticles } from '../blogContent';

const brandColor = '#BA9765';

export default function BlogArticle() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const article = blogArticles[lang].find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — VitraCare`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', article.metaDescription);
    }
    return () => {
      document.title = 'VitraCare — Films et teintes pour vitrages à Bruxelles';
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <SiteHeader alwaysSolid />

      <div className="flex-1 px-8 md:px-16 lg:px-20 pt-36 pb-24">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[14px] font-bold mb-8 hover:opacity-70 transition-opacity" style={{ color: brandColor }}>
            <ArrowLeft size={16} />
            {t.blog.backToBlog}
          </Link>

          <span className="text-[12px] font-bold uppercase tracking-wider mb-4 block" style={{ color: brandColor }}>
            {new Date(article.date).toLocaleDateString(lang === 'FR' ? 'fr-BE' : lang === 'NL' ? 'nl-BE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>

          <h1 className="text-[30px] md:text-[38px] font-bold leading-tight mb-10" style={{ color: '#464646' }}>
            {article.title}
          </h1>

          <div className="flex flex-col gap-7 text-[16px] leading-relaxed" style={{ color: '#4a4a4a' }}>
            {article.sections.map((section, idx) => (
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
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
