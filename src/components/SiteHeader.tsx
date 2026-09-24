import { useState, useEffect } from 'react';
import { LocalizedLink as Link } from './LocalizedLink';
import { useLanguage } from '../LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

const brandColor = '#BA9765';
const textColor = '#555555';

export const SiteHeader = ({ activeId, alwaysSolid = false }: { activeId?: string, alwaysSolid?: boolean }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(alwaysSolid);

  useEffect(() => {
    if (alwaysSolid) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysSolid]);

  const solid = alwaysSolid || isScrolled;

  const navItems = [
    { id: 'accueil', label: t.nav.home, to: '/' },
    { id: 'services', label: t.nav.services, to: '/#services' },
    { id: 'produit', label: t.nav.pricing, to: '/#produit' },
    { id: 'avis', label: t.nav.about, to: '/#avis' },
    { id: 'realisations', label: t.nav.realisations, to: '/realisations' },
    { id: 'contact', label: t.nav.contact, to: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] w-full px-8 md:px-16 lg:px-20 flex items-center justify-between transition-all duration-300 ${solid ? 'py-6 bg-white shadow-sm' : 'py-10 bg-transparent'}`}>
      {/* Logo — the asset itself is transparent (no blend-mode trick needed): mix-blend-mode
          can't reach past this header's own stacking context (position: fixed creates one),
          so it only ever blended against the header's own background, never the hero photo
          behind it — which is exactly why a white box used to show up over the image. */}
      <Link to="/" className="flex items-center gap-3">
        <div className="relative h-8 w-[29px] overflow-hidden">
          <img src="/images/Logo-et-nom.png" alt="Logo" width={1280} height={296} className="absolute top-0 left-0 h-8 w-auto max-w-none" referrerPolicy="no-referrer" />
        </div>
        <div className="relative h-8 w-[105px] overflow-hidden">
          <img src="/images/Logo-et-nom.png" alt="VITRACARE" width={1280} height={296} className="absolute top-0 left-[-33.5px] h-8 w-auto max-w-none" referrerPolicy="no-referrer" />
        </div>
      </Link>

      {/* Desktop Navigation - Centered */}
      <nav className="hidden xl:flex items-center gap-8 text-[20px] absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className={`relative pb-1 transition-colors ${activeId === item.id ? 'font-bold' : 'hover:text-black'}`}
            style={{ color: textColor }}
          >
            {item.label}
            {activeId === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px]" style={{ backgroundColor: brandColor }}></span>
            )}
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <Link
          to="/devis"
          className="hidden sm:block text-white px-6 py-2 rounded-full text-[16px] font-bold tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] bg-[#BA9765] cursor-pointer"
        >
          {t.hero.quote}
        </Link>
        <LanguageSwitcher />
        <MobileMenu />
      </div>
    </header>
  );
};
