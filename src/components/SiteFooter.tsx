import { LocalizedLink as Link } from './LocalizedLink';
import { useLanguage } from '../LanguageContext';

const brandColor = '#BA9765';

export const SiteFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-16 flex flex-col items-center justify-center text-white" style={{ backgroundColor: brandColor }}>
      {/* Top links */}
      <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-3 mb-4 text-[14px] md:text-[15px]">
        <Link to="/" className="hover:opacity-80 transition-opacity">{t.nav.home}</Link>
        <Link to="/#services" className="hover:opacity-80 transition-opacity">{t.nav.services}</Link>
        <Link to="/#produit" className="hover:opacity-80 transition-opacity">{t.nav.pricing}</Link>
        <Link to="/#avis" className="hover:opacity-80 transition-opacity">{t.nav.about}</Link>
        <Link to="/realisations" className="hover:opacity-80 transition-opacity">{t.nav.realisations}</Link>
        <Link to="/contact" className="hover:opacity-80 transition-opacity">{t.nav.contact}</Link>
      </div>

      {/* Bottom links */}
      <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-3 mb-16 text-[14px] md:text-[15px]">
        <Link to="/blog" className="hover:opacity-80 transition-opacity">{t.footer.blog}</Link>
        <Link to="/faq" className="hover:opacity-80 transition-opacity">{t.footer.faq}</Link>
        <Link to="/conditions-generales" className="hover:opacity-80 transition-opacity">{t.footer.terms}</Link>
        <Link to="/mentions-legales" className="hover:opacity-80 transition-opacity">{t.footer.legal}</Link>
        <Link to="/politique-confidentialite" className="hover:opacity-80 transition-opacity">{t.footer.privacy}</Link>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center">
        <img loading="lazy" src="/images/Logo.png" alt="Logo" className="h-14 w-auto mb-4 object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
        <div className="text-white text-[12px] md:text-[13px] tracking-[0.4em] font-bold">
          VITRACARE
        </div>
      </div>

      {/* Copyright */}
      <div className="text-white/70 text-[12px] mt-8">
        {t.footer.copyright}
      </div>
    </footer>
  );
};
