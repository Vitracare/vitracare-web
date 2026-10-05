import { Star } from 'lucide-react';
import { LocalizedLink as Link } from '../components/LocalizedLink';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const brandColor = '#BA9765';

export default function Avis() {
  const { t, lang } = useLanguage();

  const trustpilotUrl =
    lang === 'NL'
      ? 'https://nl-be.trustpilot.com/review/vitracare.be'
      : lang === 'EN'
        ? 'https://www.trustpilot.com/review/vitracare.be'
        : 'https://fr-be.trustpilot.com/review/vitracare.be';

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <SiteHeader activeId="avis" alwaysSolid />

      <div className="flex-1 px-8 md:px-16 lg:px-20 pt-36 pb-24 max-w-5xl mx-auto w-full">
        <h1 className="text-[32px] md:text-[40px] font-bold text-center mb-4" style={{ color: '#464646' }}>
          {t.avis.h1}
        </h1>
        <p className="text-[15px] md:text-[16px] text-center max-w-2xl mx-auto mb-8" style={{ color: '#767676' }}>
          {t.avis.intro}
        </p>
        <div className="w-[60px] h-[2px] mb-6 mx-auto" style={{ backgroundColor: brandColor }}></div>

        {/* Score badges — same real figures as the homepage testimonials section */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="https://share.google/c3Bih4FWySHUhjkAZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pl-2.5 pr-3.5 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <svg width="14" height="14" viewBox="0 0 48 48" className="shrink-0">
              <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
              <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
              <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
              <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
            </svg>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} fill="#FBBC04" color="#FBBC04" strokeWidth={1.5} />
              ))}
            </div>
            <span className="text-[13px] font-bold whitespace-nowrap" style={{ color: '#464646' }}>
              {lang === 'FR' ? '4,8/5' : '4.8/5'} <span className="font-normal">{lang === 'NL' ? 'op Google' : lang === 'EN' ? 'on Google' : 'sur Google'}</span>
            </span>
          </a>
          <a
            href={trustpilotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pl-2.5 pr-3.5 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#00b67a' }}>
              <Star size={11} color="#fff" fill="#fff" />
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={13} fill={i <= 4 ? '#00b67a' : 'none'} color={i <= 4 ? '#00b67a' : '#d1d5db'} strokeWidth={1.5} />
              ))}
            </div>
            <span className="text-[13px] font-bold whitespace-nowrap" style={{ color: '#464646' }}>
              4/5 <span className="font-normal">{lang === 'NL' ? 'op Trustpilot' : lang === 'EN' ? 'on Trustpilot' : 'sur Trustpilot'}</span>
            </span>
          </a>
        </div>

        {/* Google reviews */}
        <h2 className="text-[22px] md:text-[26px] font-bold mb-6" style={{ color: '#464646' }}>
          {t.avis.sectionGoogleTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {t.avis.google.map((r, i) => (
            <div key={i} className="rounded-xl border border-gray-100 shadow-sm p-5 bg-white">
              <div className="flex items-center gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill={s <= r.rating ? '#FBBC04' : 'none'} color={s <= r.rating ? '#FBBC04' : '#d1d5db'} strokeWidth={1.5} />
                ))}
              </div>
              <p className="text-[14.5px] leading-relaxed mb-3" style={{ color: '#464646' }}>{r.text}</p>
              <p className="text-[13px] font-bold" style={{ color: '#767676' }}>{r.name} — {lang === 'NL' ? 'via Google' : lang === 'EN' ? 'via Google' : 'via Google'}</p>
            </div>
          ))}
        </div>
        <div className="text-center mb-20">
          <a href="https://share.google/c3Bih4FWySHUhjkAZ" target="_blank" rel="noopener noreferrer" className="text-[14px] font-bold underline underline-offset-4" style={{ color: brandColor }}>
            {t.avis.viewAllGoogle}
          </a>
        </div>

        {/* Trustpilot reviews */}
        <h2 className="text-[22px] md:text-[26px] font-bold mb-6" style={{ color: '#464646' }}>
          {t.avis.sectionTrustpilotTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {t.avis.trustpilot.map((r, i) => (
            <div key={i} className="rounded-xl border border-gray-100 shadow-sm p-5 bg-white">
              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mb-2" style={{ backgroundColor: '#00b67a' }}>
                <Star size={11} color="#fff" fill="#fff" />
              </div>
              <p className="text-[15px] font-bold mb-1.5" style={{ color: '#464646' }}>{r.title}</p>
              <p className="text-[14.5px] leading-relaxed mb-3" style={{ color: '#464646' }}>{r.text}</p>
              <p className="text-[13px] font-bold" style={{ color: '#767676' }}>
                {r.name ?? t.avis.anonymousReviewer}{r.date ? ` — ${r.date}` : ''} — Trustpilot
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href={trustpilotUrl} target="_blank" rel="noopener noreferrer" className="text-[14px] font-bold underline underline-offset-4" style={{ color: brandColor }}>
            {t.avis.viewAllTrustpilot}
          </a>
        </div>
      </div>

      {/* CTA band */}
      <div className="w-full bg-[#FAF9F6] border-t border-gray-100 py-16 px-8 text-center">
        <h2 className="text-[24px] md:text-[28px] font-bold mb-3" style={{ color: '#464646' }}>
          {t.avis.ctaTitle}
        </h2>
        <p className="text-[15px] mb-8 max-w-xl mx-auto" style={{ color: '#767676' }}>
          {t.avis.ctaSubtitle}
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
