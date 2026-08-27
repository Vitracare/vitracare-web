import { LocalizedLink as Link } from '../components/LocalizedLink';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { blogArticles } from '../blogContent';

const brandColor = '#BA9765';

export default function Blog() {
  const { t, lang } = useLanguage();
  const articles = [...blogArticles[lang]].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <SiteHeader alwaysSolid />

      <div className="flex-1 px-8 md:px-16 lg:px-20 pt-36 pb-24">
        <h1 className="text-[32px] md:text-[40px] font-bold text-center mb-4" style={{ color: '#464646' }}>
          {t.blog.title}
        </h1>
        <div className="w-[60px] h-[2px] mb-6 mx-auto" style={{ backgroundColor: brandColor }}></div>
        <p className="text-[16px] text-center mb-16 max-w-md mx-auto" style={{ color: '#767676' }}>
          {t.blog.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="flex flex-col rounded-xl border border-gray-100 hover:border-[#BA9765] transition-colors p-6 group"
            >
              <span className="text-[12px] font-bold uppercase tracking-wider mb-3" style={{ color: brandColor }}>
                {new Date(article.date).toLocaleDateString(lang === 'FR' ? 'fr-BE' : lang === 'NL' ? 'nl-BE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <h2 className="text-[19px] font-bold mb-3 leading-snug group-hover:opacity-80 transition-opacity" style={{ color: '#464646' }}>
                {article.title}
              </h2>
              <p className="text-[14px] leading-relaxed mb-4" style={{ color: '#767676' }}>
                {article.excerpt}
              </p>
              <span className="text-[13px] font-bold mt-auto" style={{ color: brandColor }}>
                {t.blog.readMore} →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
