import { LocalizedLink as Link } from '../components/LocalizedLink';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { MobileMenu } from '../components/MobileMenu';
import { DevisFormCard } from '../components/DevisFormCard';

const brandColor = '#BA9765';

export default function Devis() {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen font-sans bg-[#4b4b4b] flex flex-col">
      {/* Header */}
      <header className="w-full px-8 md:px-16 lg:px-20 py-4 md:py-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-[14px] font-bold tracking-wider">
          <ArrowLeft size={18} />
          {t.back}
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher dark />
          <MobileMenu dark />
        </div>
      </header>

      {/* Mobile: header/title/badge stack tightened so the form itself — the whole point
          of this page — starts closer to the top instead of requiring a scroll before
          the first field is even visible (an SEO/UX audit caught this on a real mobile
          screenshot). Desktop/tablet spacing is unchanged. */}
      <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-20 py-6 md:py-12 min-w-0">
        <div className="max-w-5xl w-full min-w-0 flex flex-col items-center">
          <h1 className="w-full text-[26px] md:text-[44px] font-bold text-white mb-2 md:mb-6 text-center tracking-tight">
            {t.devis.title}
          </h1>

          <div className="w-[60px] h-[2px] mb-3 md:mb-8" style={{ backgroundColor: brandColor }}></div>

          <p className="text-[14px] md:text-[18px] text-white/90 text-center max-w-2xl leading-relaxed mb-3 md:mb-6">
            {t.devis.subtitle}
          </p>

          <div className="max-w-[92%] sm:max-w-fit mx-auto text-center inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-5 md:mb-16 text-white text-[12px] md:text-[13px] font-bold tracking-wide">
            {t.devis.reassurance}
          </div>

          <DevisFormCard />

          {/* Trust/process content: this page used to be little more than the form
              itself (82 words total) — an audit flagged it as the thinnest page on the
              site relative to how much trust content a hesitant visitor typically needs
              before handing over contact details. Placed below the form, not above, so
              it doesn't undo the mobile above-the-fold fix. */}
          <div className="w-full mt-16 md:mt-20">
            <h2 className="text-white text-[22px] md:text-[26px] font-bold text-center mb-10">
              {t.devis.process_title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                { n: '1', title: t.devis.process1_title, desc: t.devis.process1_desc },
                { n: '2', title: t.devis.process2_title, desc: t.devis.process2_desc },
                { n: '3', title: t.devis.process3_title, desc: t.devis.process3_desc },
              ].map((step) => (
                <div key={step.n} className="text-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-[15px]"
                    style={{ backgroundColor: brandColor, color: '#fff' }}
                  >
                    {step.n}
                  </div>
                  <p className="text-white font-bold text-[15px] mb-2">{step.title}</p>
                  <p className="text-white/70 text-[13.5px] leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
