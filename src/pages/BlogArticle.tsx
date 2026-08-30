import { useEffect, useRef, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LocalizedLink as Link, withLangPrefix } from '../components/LocalizedLink';
import { ArrowLeft, Share2, MessageCircle, Mail, Copy, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { blogArticles, type BlogArticle as BlogArticleData } from '../blogContent';
import { langPrefixes } from '../App';
import { renderParagraph } from '../lib/renderParagraph';

const brandColor = '#BA9765';
const WORDS_PER_MINUTE = 200;

function estimateReadingMinutes(article: BlogArticleData): number {
  const text = [...article.sections.flatMap((s) => s.paragraphs), ...article.faq.map((f) => f.answer)].join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function ShareButton({
  url,
  title,
  label,
  whatsappLabel,
  emailLabel,
  copyLabel,
  copiedLabel,
}: {
  url: string;
  title: string;
  label: string;
  whatsappLabel: string;
  emailLabel: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const supportsNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const handleClick = async () => {
    // On phones and most modern browsers this opens the OS-level share sheet
    // (Messages, WhatsApp, Mail, etc.) — a single button, no menu to build
    // ourselves. Only browsers without it (mainly desktop Firefox) fall back
    // to our own small menu below.
    if (supportsNativeShare) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled the native share sheet — nothing to do.
      }
      return;
    }
    setOpen((o) => !o);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (older browser / no HTTPS) — ignore.
    }
  };

  return (
    <div className="relative inline-block mb-10" ref={wrapperRef}>
      <button
        type="button"
        onClick={handleClick}
        aria-label={label}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-[#BA9765] text-gray-500 hover:text-[#BA9765] transition-colors"
      >
        <Share2 size={18} />
      </button>
      {open && !supportsNativeShare && (
        <div className="absolute left-0 top-full mt-2 z-10 bg-white border border-gray-100 rounded-lg shadow-lg p-1.5 flex flex-col gap-0.5 min-w-[170px]">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-semibold px-3 py-2 rounded-md hover:bg-gray-50"
            style={{ color: '#464646' }}
          >
            <MessageCircle size={16} style={{ color: brandColor }} />
            {whatsappLabel}
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
            className="flex items-center gap-2 text-[13px] font-semibold px-3 py-2 rounded-md hover:bg-gray-50"
            style={{ color: '#464646' }}
          >
            <Mail size={16} style={{ color: brandColor }} />
            {emailLabel}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 text-[13px] font-semibold px-3 py-2 rounded-md hover:bg-gray-50 text-left"
            style={{ color: '#464646' }}
          >
            {copied ? <Check size={16} style={{ color: brandColor }} /> : <Copy size={16} style={{ color: brandColor }} />}
            {copied ? copiedLabel : copyLabel}
          </button>
        </div>
      )}
    </div>
  );
}

export default function BlogArticle() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const article = blogArticles[lang].find((a) => a.slug === slug);
  const otherArticles = blogArticles[lang].filter((a) => a.slug !== slug);

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

  const dateLocale = lang === 'FR' ? 'fr-BE' : lang === 'NL' ? 'nl-BE' : 'en-GB';

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <SiteHeader alwaysSolid />

      <div className="flex-1 px-8 md:px-16 lg:px-20 pt-36 pb-24">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[14px] font-bold mb-8 hover:opacity-70 transition-opacity" style={{ color: brandColor }}>
            <ArrowLeft size={16} />
            {t.blog.backToBlog}
          </Link>

          <div className="flex items-center gap-4 text-[12px] font-bold uppercase tracking-wider mb-4" style={{ color: brandColor }}>
            <span>{new Date(article.date).toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span aria-hidden="true">·</span>
            <span>{estimateReadingMinutes(article)} {t.blog.minRead}</span>
          </div>

          <h1 className="text-[30px] md:text-[38px] font-bold leading-tight mb-3" style={{ color: '#464646' }}>
            {article.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 py-5 border-y border-gray-100 mb-10">
            <p className="text-[14px]" style={{ color: '#767676' }}>
              {t.blog.byline}
            </p>
            <ShareButton
              url={`https://vitracare.be${langPrefixes[lang]}/blog/${article.slug}`}
              title={article.title}
              label={t.blog.share}
              whatsappLabel={t.blog.shareWhatsapp}
              emailLabel={t.blog.shareEmail}
              copyLabel={t.blog.copyLink}
              copiedLabel={t.blog.linkCopied}
            />
          </div>

          <div className="flex flex-col gap-7 text-[16px] leading-relaxed" style={{ color: '#4a4a4a' }}>
            {article.sections.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 id={section.anchor} className="text-[21px] font-bold mb-3 scroll-mt-28" style={{ color: '#464646' }}>
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="mb-3">{renderParagraph(p)}</p>
                ))}
              </div>
            ))}

            {article.faq.length > 0 && (
              <div>
                <h2 className="text-[21px] font-bold mb-5" style={{ color: '#464646' }}>
                  {t.blog.faqTitle}
                </h2>
                <div className="flex flex-col gap-5">
                  {article.faq.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>
                        {item.question}
                      </h3>
                      <p>{renderParagraph(item.answer)}</p>
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

          {otherArticles.length > 0 && (
            <div className="mt-14">
              <h2 className="text-[21px] font-bold mb-5" style={{ color: '#464646' }}>
                {t.blog.relatedTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {otherArticles.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="flex flex-col rounded-xl border border-gray-100 hover:border-[#BA9765] transition-colors p-5 group"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: brandColor }}>
                      {new Date(related.date).toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <h3 className="text-[15px] font-bold leading-snug group-hover:opacity-80 transition-opacity" style={{ color: '#464646' }}>
                      {related.title}
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
