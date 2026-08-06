import { Link } from 'react-router-dom';
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
      <header className="w-full px-8 md:px-16 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-[14px] font-bold tracking-wider">
          <ArrowLeft size={18} />
          {t.back}
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <MobileMenu dark />
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-20 py-12 min-w-0">
        <div className="max-w-5xl w-full min-w-0 flex flex-col items-center">
          <h1 className="w-full text-[36px] md:text-[44px] font-bold text-white mb-6 text-center tracking-tight">
            {t.devis.title}
          </h1>

          <div className="w-[60px] h-[2px] mb-8" style={{ backgroundColor: brandColor }}></div>

          <p className="text-[18px] text-white/90 text-center max-w-2xl leading-relaxed mb-6">
            {t.devis.subtitle}
          </p>

          <div className="max-w-[92%] sm:max-w-fit mx-auto text-center inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-16 text-white text-[13px] font-bold tracking-wide">
            {t.devis.reassurance}
          </div>

          <DevisFormCard />
        </div>
      </div>
    </div>
  );
}
