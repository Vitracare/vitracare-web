import { useEffect, useState, type ReactElement } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LocalizedLink as Link, withLangPrefix } from '../components/LocalizedLink';
import { ArrowLeft, MessageCircle, Mail, Copy, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { blogArticles } from '../blogContent';
import { langPrefixes } from '../App';

const brandColor = '#BA9765';

// Article content is authored as plain strings with an optional lightweight
// [texte](url) syntax for citing external sources inline. Since this content
// is hand-written in blogContent.ts (never user input), splitting on the
// pattern and rendering real <a> elements is simpler and safer than a full
// markdown parser or dangerouslySetInnerHTML.
function renderParagraph(text: string) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | ReactElement)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-semibold hover:opacity-80 transition-opacity"
        style={{ color: brandColor }}
      >
        {match[1]}
      </a>,
    );
    lastIndex = linkPattern.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function ShareRow({ url, title, label, whatsappLabel, emailLabel, copyLabel, copiedLabel }: {
  url: string;
  title: string;
  label: string;
  whatsappLabel: string;
  emailLabel: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (older browser / no HTTPS) — silently ignore,
      // the other share options still work.
    }
  };

  const linkClass = 'inline-flex items-center gap-1.5 text-[13px] font-bold hover:opacity-70 transition-opacity';

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10">
      <span className="text-[13px] font-bold uppercase tracking-wider" style={{ color: '#767676' }}>
        {label}
      </span>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        style={{ color: brandColor }}
      >
        <MessageCircle size={16} />
        {whatsappLabel}
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
        className={linkClass}
        style={{ color: brandColor }}
      >
        <Mail size={16} />
        {emailLabel}
      </a>
      <button type="button" onClick={handleCopy} className={linkClass} style={{ color: brandColor }}>
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}

export default function BlogArticle() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const article = blogArticles[lang].find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.metaTitle} — VitraCare`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', article.metaDescription);
    }
    return () => {
      const fallbackTitles = {
        FR: 'VitraCare — Films et teintes pour vitrages à Bruxelles',
        NL: 'VitraCare — Folies en tinten voor beglazing in Brussel',
        EN: 'VitraCare — Window films and tints in Brussels',
      };
      document.title = fallbackTitles[lang];
    };
  }, [article, lang]);

  if (!article) {
    return <Navigate to={withLangPrefix('/blog', langPrefixes[lang])} replace />;
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

          <h1 className="text-[30px] md:text-[38px] font-bold leading-tight mb-3" style={{ color: '#464646' }}>
            {article.title}
          </h1>

          <p className="text-[14px] mb-8" style={{ color: '#767676' }}>
            {t.blog.byline}
          </p>

          <ShareRow
            url={`https://vitracare.be${langPrefixes[lang]}/blog/${article.slug}`}
            title={article.title}
            label={t.blog.share}
            whatsappLabel={t.blog.shareWhatsapp}
            emailLabel={t.blog.shareEmail}
            copyLabel={t.blog.copyLink}
            copiedLabel={t.blog.linkCopied}
          />

          <div className="flex flex-col gap-7 text-[16px] leading-relaxed" style={{ color: '#4a4a4a' }}>
            {article.sections.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="text-[21px] font-bold mb-3" style={{ color: '#464646' }}>
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="mb-3">{renderParagraph(p)}</p>
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
