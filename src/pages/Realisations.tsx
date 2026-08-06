import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { MobileMenu } from '../components/MobileMenu';

const brandColor = '#BA9765';

export default function Realisations() {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <header className="w-full px-8 md:px-16 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-[#555] hover:text-black transition-colors text-[14px] font-bold tracking-wider">
          <ArrowLeft size={18} />
          {t.back}
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </header>

      <div className="flex-1 px-8 md:px-16 lg:px-20 pb-24">
        <h1 className="text-[32px] md:text-[40px] font-bold text-center mb-4" style={{ color: '#464646' }}>
          {t.realisations.title}
        </h1>
        <div className="w-[60px] h-[2px] mb-16 mx-auto" style={{ backgroundColor: brandColor }}></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
            <div key={n} className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
              <img
                src={`/images/realisations/chantier-${n}.jpg`}
                alt={`Réalisation VitraCare ${n}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
