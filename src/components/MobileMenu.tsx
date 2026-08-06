import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Eye, Layers, Image, Star, FileText, Phone, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const brandColor = '#BA9765';

export const MobileMenu = ({ dark = false }: { dark?: boolean }) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = original; };
    }
  }, [open]);

  const links = [
    { to: '/', label: t.nav.home, icon: Home },
    { to: '/#services', label: t.nav.services, icon: Eye },
    { to: '/#produit', label: t.nav.pricing, icon: Layers },
    { to: '/#avis', label: t.nav.about, icon: Star },
    { to: '/realisations', label: t.nav.realisations, icon: Image },
    { to: '/devis', label: t.hero.quote, icon: FileText },
    { to: '/contact', label: t.nav.contact, icon: Mail },
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
          <div className="relative w-[300px] max-w-[85vw] h-full bg-white shadow-2xl flex flex-col overflow-y-auto overscroll-contain">
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex border-[1.4px] border-[#2B2A28] w-[15px] h-[18px]">
                  <span className="flex-1 bg-white border-r-[1.4px] border-[#2B2A28]"></span>
                  <span className="flex-1 bg-[#DCDAD5]"></span>
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#464646]">VITRACARE</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="w-9 h-9 flex items-center justify-center text-[#464646] hover:bg-gray-50 rounded-full transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-3 py-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 px-3 py-3.5 rounded-lg text-[16px] font-bold text-[#464646] hover:bg-[#F8F5EF] transition-colors"
                  >
                    <Icon size={19} color={brandColor} strokeWidth={2} />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Contact card */}
            <div className="mt-auto p-5">
              <div className="rounded-2xl p-5" style={{ backgroundColor: '#F2E9DA' }}>
                <p className="text-[11px] font-bold uppercase tracking-wider mb-3" style={{ color: '#8a6a3f' }}>
                  {t.contactPage.title}
                </p>
                <a href="tel:+32489607074" className="flex items-center gap-3 mb-3 group">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Phone size={16} color={brandColor} />
                  </div>
                  <span className="text-[15px] font-bold text-[#464646] group-hover:opacity-70 transition-opacity">0489 60 70 74</span>
                </a>
                <a href="https://wa.me/32489607074" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                    <MessageCircle size={16} color={brandColor} />
                  </div>
                  <span className="text-[15px] font-bold text-[#464646] group-hover:opacity-70 transition-opacity">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
