import type { ReactNode } from 'react';
import { LocalizedLink as Link } from './LocalizedLink';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

const brandColor = '#BA9765';

export const LegalPageLayout = ({ title, children }: { title: string, children: ReactNode }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <header className="w-full px-8 md:px-16 lg:px-20 py-8 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-[#555] hover:text-black transition-colors text-[14px] font-bold tracking-wider">
          <ArrowLeft size={18} />
          {t.back}
        </Link>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </header>

      <div className="flex-1 px-8 md:px-16 lg:px-20 pb-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[32px] md:text-[40px] font-bold tracking-tight mb-6" style={{ color: '#464646' }}>
            {title}
          </h1>
          <div className="w-[60px] h-[2px] mb-10" style={{ backgroundColor: brandColor }}></div>
          <div className="prose-legal text-[15px] leading-relaxed" style={{ color: '#4a4a4a' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
