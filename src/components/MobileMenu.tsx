import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const brandColor = '#BA9765';

export const MobileMenu = ({ dark = false }: { dark?: boolean }) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/#services', label: t.nav.services },
    { to: '/#produit', label: t.nav.pricing },
    { to: '/realisations', label: t.nav.realisations },
    { to: '/#avis', label: t.nav.about },
    { to: '/devis', label: t.hero.quote },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menu"
        className={`flex items-center justify-center w-10 h-10 ${dark ? 'text-white' : 'text-[#464646]'}`}
      >
        <Menu size={26} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-[280px] max-w-[85vw] h-full bg-white shadow-2xl flex flex-col px-8 py-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="self-end mb-10 w-10 h-10 flex items-center justify-center text-[#464646]"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-[18px] font-bold text-[#464646] hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-gray-100">
              <a href="tel:+32489607074" className="text-[14px] font-bold" style={{ color: brandColor }}>
                0489 60 70 74
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
