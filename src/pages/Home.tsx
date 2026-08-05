import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileBadge, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { DevisFormCard } from '../components/DevisFormCard';

const BeforeAfterSlider = ({ before, after, beforeLabel, afterLabel }: { before: string, after: string, beforeLabel: string, afterLabel: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const handleUp = () => { isDragging.current = false; };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[500px] aspect-[4/3] rounded-xl overflow-hidden select-none cursor-ew-resize shadow-lg"
      onMouseDown={(e) => { isDragging.current = true; updatePosition(e.clientX); }}
      onTouchStart={(e) => { isDragging.current = true; updatePosition(e.touches[0].clientX); }}
    >
      {/* After image — base layer, always fully visible */}
      <img src={after} alt={afterLabel} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} referrerPolicy="no-referrer" />

      {/* Before image — clipped to reveal only up to the handle */}
      <img
        src={before}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
        referrerPolicy="no-referrer"
      />

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/55 text-white text-[11px] font-bold tracking-wider px-2.5 py-1 rounded pointer-events-none">{beforeLabel}</div>
      <div className="absolute top-3 right-3 bg-black/55 text-white text-[11px] font-bold tracking-wider px-2.5 py-1 rounded pointer-events-none">{afterLabel}</div>

      {/* Drag handle */}
      <div className="absolute top-0 bottom-0 w-[3px] bg-white shadow-lg pointer-events-none" style={{ left: `${position}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BA9765" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Testimonial = ({ name, image, text, offsetClass }: { name: string, image: string, text: string, offsetClass?: string }) => {
  return (
    <div className={`flex items-start gap-4 w-full max-w-[340px] ${offsetClass || ''}`}>
      <div className="flex flex-col items-center gap-1.5 shrink-0 z-10 pt-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
        <span className="text-[12px] text-[#A87C5D] font-bold">{name}</span>
      </div>
      <div className="relative bg-[#AF9269] text-white p-5 pl-6 rounded-[20px] shadow-sm mt-2 flex-1">
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#4b4b4b] rounded-full flex items-center justify-center z-10">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#AF9269" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        {/* Tail */}
        <div className="absolute top-6 -left-3 w-0 h-0 border-t-[8px] border-t-transparent border-r-[14px] border-r-[#AF9269] border-b-[8px] border-b-transparent"></div>
        <p className="font-bold text-[16px] leading-snug">{text}</p>
      </div>
    </div>
  )
};

export default function Home() {
  const { t } = useLanguage();

  const brandColor = '#BA9765';
  const headingColor = '#464646';
  const textColor = '#555555';
  const lightTextColor = '#888888';

  const words = t.words;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const sectionIds = ['accueil', 'services', 'produit', 'realisations', 'avis'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const fullWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(33);
      } else {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === fullWord) {
        timer = setTimeout(() => setIsDeleting(true), 1333);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(333);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <div className="w-full font-sans bg-white flex flex-col">
      {/* Hero Section */}
      <div id="accueil" className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Strong White Gradient Overlay to match image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 45%, rgba(255,255,255,0.7) 65%, rgba(255,255,255,0) 100%)'
        }}
      ></div>
      {/* Top subtle fade for header readability over image parts */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 to-transparent h-32"></div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-[100] w-full px-8 md:px-16 lg:px-20 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-6 bg-white shadow-sm' : 'py-10 bg-transparent'}`}>
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 mix-blend-multiply">
          {/* Split logo and name to add custom spacing */}
          <div className="relative h-8 w-[29px] overflow-hidden">
            <img src="/images/Logo-et-nom.png" alt="Logo" className="absolute top-0 left-0 h-8 w-auto max-w-none" referrerPolicy="no-referrer" />
          </div>
          <div className="relative h-8 w-[105px] overflow-hidden">
            <img src="/images/Logo-et-nom.png" alt="VITRACARE" className="absolute top-0 left-[-33.5px] h-8 w-auto max-w-none" referrerPolicy="no-referrer" />
          </div>
        </a>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8 text-[20px] absolute left-1/2 transform -translate-x-1/2">
          {([
            { id: 'accueil', label: t.nav.home, href: '#accueil' },
            { id: 'services', label: t.nav.services, href: '#services' },
            { id: 'produit', label: t.nav.pricing, href: '#produit' },
            { id: 'realisations', label: t.nav.realisations, href: '#realisations' },
            { id: 'avis', label: t.nav.about, href: '#avis' },
          ] as const).map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative pb-1 transition-colors ${activeSection === item.id ? 'font-bold' : 'hover:text-black'}`}
              style={{ color: textColor }}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px]" style={{ backgroundColor: brandColor }}></span>
              )}
            </a>
          ))}
          <Link
            to="/contact"
            className="pb-1 transition-colors hover:text-black"
            style={{ color: textColor }}
          >
            {t.nav.contact}
          </Link>
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
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-center min-h-[100vh] pt-[120px] px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-[800px] -translate-y-8 md:-translate-y-12">
          <h1
            className="text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight"
            style={{ color: headingColor }}
          >
            {t.hero.title1}<br />
            {t.hero.title2}<br />
            {t.hero.title3}
          </h1>

          {/* Decorative Line */}
          <div className="w-[50px] h-[2px] mb-6" style={{ backgroundColor: brandColor }}></div>

          <div className="text-[18px] lg:text-[22px] font-medium mb-12 flex flex-wrap items-center min-h-[32px]">
            <span style={{ color: lightTextColor }} className="font-normal tracking-wide mr-2">
              {t.hero.subtitle}
            </span>
            <span className="font-bold tracking-wide flex items-center" style={{ color: brandColor }}>
              {currentText}
              <span className="font-light text-[#ccc] animate-[pulse_1s_ease-in-out_infinite] ml-[2px] -mt-[2px]">|</span>
            </span>
          </div>

          <Link
            to="/devis"
            className="inline-block text-center text-white px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] bg-[#BA9765] w-fit cursor-pointer"
          >
            {t.hero.getQuote}
          </Link>
        </div>
      </main>
      </div>

      {/* Features Section */}
      <section id="services" className="w-full py-24 px-8 md:px-16 lg:px-20 bg-white">
        <h2 className="text-[32px] md:text-[40px] font-bold text-center mb-24" style={{ color: brandColor }}>
          {t.features.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex h-[80px] w-[80px] items-center justify-center">
              <img src="/images/Yeux.png" alt="Retrouvez votre intimité" className="h-full w-full object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-[22px] font-bold mb-4 leading-snug whitespace-pre-line" style={{ color: headingColor }}>
              {t.features.f1_title}
            </h3>
            <p className="text-[17px] leading-relaxed max-w-[280px]" style={{ color: lightTextColor }}>
              {t.features.f1_desc}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex h-[80px] w-[80px] items-center justify-center">
              <img src="/images/Securite.png" alt="Protégez votre famille" className="h-full w-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-[22px] font-bold mb-4 leading-snug whitespace-pre-line" style={{ color: headingColor }}>
              {t.features.f2_title}
            </h3>
            <p className="text-[17px] leading-relaxed max-w-[280px]" style={{ color: lightTextColor }}>
              {t.features.f2_desc}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex h-[80px] w-[80px] items-center justify-center">
              <img src="/images/Preserver.png" alt="Préservez vos biens" className="h-full w-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-[22px] font-bold mb-4 leading-snug whitespace-pre-line" style={{ color: headingColor }}>
              {t.features.f3_title}
            </h3>
            <p className="text-[17px] leading-relaxed max-w-[280px]" style={{ color: lightTextColor }}>
              {t.features.f3_desc}
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex h-[80px] w-[80px] items-center justify-center">
              <img src="/images/Temperature.png" alt="Une température maîtrisée" className="h-full w-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-[22px] font-bold mb-4 leading-snug whitespace-pre-line" style={{ color: headingColor }}>
              {t.features.f4_title}
            </h3>
            <p className="text-[17px] leading-relaxed max-w-[280px]" style={{ color: lightTextColor }}>
              {t.features.f4_desc}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-24">
          <Link
            to="/devis"
            className="inline-block text-white px-10 py-4 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] bg-[#BA9765] cursor-pointer"
          >
            {t.hero.getQuote}
          </Link>
        </div>
      </section>

      {/* Protection Section */}
      <section id="produit" className="w-full bg-[#4b4b4b] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          {/* Slider side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <BeforeAfterSlider
              before="/avant.jpg"
              after="/apres.jpg"
              beforeLabel={t.slider.before}
              afterLabel={t.slider.after}
            />
          </div>

          {/* Content side */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left max-w-xl">
            <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
              {t.protection.title}
            </h2>

            {/* Decorative Line */}
            <div className="w-[60px] h-[2px] mb-8" style={{ backgroundColor: brandColor }}></div>

            <p className="text-[20px] lg:text-[22px] mb-12 text-white/90">
              {t.protection.subtitle}
            </p>

            <Link
              to="/devis"
              className="inline-block text-white px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] bg-[#BA9765] cursor-pointer"
            >
              {t.hero.getQuote}
            </Link>
          </div>
        </div>
      </section>

      {/* Réalisations Section */}
      <section id="realisations" className="w-full py-24 px-8 md:px-16 lg:px-20 bg-[#FAF9F6]">
        <h2 className="text-[32px] md:text-[40px] font-bold text-center mb-4" style={{ color: brandColor }}>
          {t.realisations.title}
        </h2>
        <div className="w-[60px] h-[2px] mb-16 mx-auto" style={{ backgroundColor: brandColor }}></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
            <div key={n} className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={`/images/realisations/chantier-${n}.jpg`}
                alt={`Réalisation VitraCare ${n}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Avis Section */}
      <section id="avis" className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
          {/* Title */}
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-[40px] md:text-[48px] font-bold leading-tight" style={{ color: brandColor }}>
              {t.reviews.title}
            </h2>
            <div className="w-[60px] h-[2px] mt-4" style={{ backgroundColor: brandColor }}></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center lg:items-start">
            {/* Left: Photo Collage */}
            <div className="w-full lg:w-1/2 hidden md:flex flex-col gap-4 h-[550px] relative">
              {/* Top Row */}
              <div className="flex w-full h-[42%] gap-4 items-end">
                <img src="/images/House-1-final.png" className="w-[53%] h-full object-cover rounded-xl" alt="Maison" referrerPolicy="no-referrer" />
                <img src="/images/Avis-2.png" className="w-[25%] h-[98%] object-cover rounded-xl" alt="Balcon" referrerPolicy="no-referrer" />
              </div>
              {/* Bottom Row */}
              <div className="flex w-full h-[58%] gap-4 items-start pl-[7%]">
                <img src="/images/Avis-3-final.png" className="w-[27%] h-[72%] object-cover rounded-xl" alt="Vitrages" referrerPolicy="no-referrer" />
                <img src="/images/Avis-4.png" className="w-[34%] h-full object-cover rounded-xl" alt="Façade" referrerPolicy="no-referrer" />
                <img src="/images/Avis-5-final.png" className="w-[25%] h-[49%] object-cover rounded-xl" alt="Baie vitrée" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* Mobile Photo Collage */}
            <div className="w-full h-[300px] md:hidden relative overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
               <img src="/images/House-1-final.png" className="w-full h-full object-contain mix-blend-multiply" alt="Maison" referrerPolicy="no-referrer" />
            </div>

            {/* Right: Testimonials */}
            <div className="w-full lg:w-1/2 flex flex-col lg:pl-10">
              <div className="flex flex-col gap-8 w-full">
                <Testimonial
                  name="Isabelle"
                  image="/images/Isabelle.avif"
                  text={t.reviews.r1}
                />

                <Testimonial
                  name="Olivier"
                  image="/images/Francois.avif"
                  text={t.reviews.r2}
                  offsetClass="ml-auto lg:mr-4"
                />

                <Testimonial
                  name="Sophie"
                  image="/images/Sophie.avif"
                  text={t.reviews.r3}
                />

                <Testimonial
                  name="François"
                  image="/images/Olivier.avif"
                  text={t.reviews.r4}
                  offsetClass="ml-auto lg:mr-4"
                />
              </div>

              <div className="mt-12 flex justify-start pl-4 md:pl-16">
                <button
                  className="text-white px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] bg-[#BA9765] cursor-pointer"
                >
                  {t.reviews.more}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Strip Section */}
      <section className="w-full bg-[#4b4b4b] py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#BA9765]/40">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center lg:px-6">
              <img src="/images/Mesure.png" alt="Mesure" className="h-8 w-auto mb-4 object-contain mix-blend-lighten" referrerPolicy="no-referrer" />
              <h3 className="text-[20px] font-bold mb-3" style={{ color: brandColor }}>
                {t.strip.f1_title}
              </h3>
              <p className="text-white text-[15px] leading-relaxed whitespace-pre-line">
                {t.strip.f1_desc}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center lg:px-6">
              <ShieldCheck size={32} color={brandColor} strokeWidth={1.5} className="mb-4" />
              <h3 className="text-[20px] font-bold mb-3" style={{ color: brandColor }}>
                {t.strip.f2_title}
              </h3>
              <p className="text-white text-[15px] leading-relaxed whitespace-pre-line">
                {t.strip.f2_desc}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center lg:px-6">
              <FileBadge size={32} color={brandColor} strokeWidth={1.5} className="mb-4" />
              <h3 className="text-[20px] font-bold mb-3" style={{ color: brandColor }}>
                {t.strip.f3_title}
              </h3>
              <p className="text-white text-[15px] leading-relaxed whitespace-pre-line">
                {t.strip.f3_desc}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center lg:px-6">
              <Clock size={32} color={brandColor} strokeWidth={1.5} className="mb-4" />
              <h3 className="text-[20px] font-bold mb-3" style={{ color: brandColor }}>
                {t.strip.f4_title}
              </h3>
              <p className="text-white text-[15px] leading-relaxed whitespace-pre-line">
                {t.strip.f4_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative w-full bg-[#FAF9F6] py-24 overflow-hidden border-t border-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply">
           <img src="/images/Bruxelles.png" className="w-full h-full object-cover opacity-80" alt="Background map" referrerPolicy="no-referrer" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between z-10">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 lg:pr-10">
            <h2 className="text-[36px] md:text-[44px] font-bold leading-[1.1] mb-6 tracking-tight whitespace-pre-line" style={{ color: headingColor }}>
              {t.map.title}
            </h2>

            <div className="w-[60px] h-[2px] mb-8" style={{ backgroundColor: brandColor }}></div>

            <p className="text-[18px] text-[#767676] mb-12 max-w-md leading-relaxed whitespace-pre-line">
              {t.map.subtitle}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
              {t.map.locations.map((city, idx) => (
                <div key={idx} className="font-bold text-[16px] leading-tight" style={{ color: brandColor, whiteSpace: 'pre-line' }}>
                  {city}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[300px] lg:min-h-[500px]">
            <img src="/bx_transparent.png" alt="Bruxelles" className="w-full h-auto max-w-[500px] object-contain drop-shadow-2xl" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Devis Section */}
      <section id="devis" className="w-full bg-[#4b4b4b] py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 text-center tracking-tight">
            {t.devis.title}
          </h2>

          <div className="w-[60px] h-[2px] mb-8" style={{ backgroundColor: brandColor }}></div>

          <p className="text-[18px] text-white/90 text-center max-w-2xl leading-relaxed mb-6">
            {t.devis.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-16 text-white text-[13px] font-bold tracking-wide">
            {t.devis.reassurance}
          </div>

          <DevisFormCard />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 flex flex-col items-center justify-center text-white" style={{ backgroundColor: brandColor }}>
        {/* Top links */}
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-3 mb-4 text-[14px] md:text-[15px]">
          <a href="#accueil" className="hover:opacity-80 transition-opacity">{t.nav.home}</a>
          <a href="#services" className="hover:opacity-80 transition-opacity">{t.nav.services}</a>
          <a href="#produit" className="hover:opacity-80 transition-opacity">{t.nav.pricing}</a>
          <a href="#avis" className="hover:opacity-80 transition-opacity">{t.nav.about}</a>
          <Link to="/contact" className="hover:opacity-80 transition-opacity">{t.nav.contact}</Link>
        </div>

        {/* Bottom links */}
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-3 mb-16 text-[14px] md:text-[15px]">
          <Link to="/faq" className="hover:opacity-80 transition-opacity">{t.footer.faq}</Link>
          <Link to="/conditions-generales" className="hover:opacity-80 transition-opacity">{t.footer.terms}</Link>
          <Link to="/mentions-legales" className="hover:opacity-80 transition-opacity">{t.footer.legal}</Link>
          <Link to="/politique-confidentialite" className="hover:opacity-80 transition-opacity">{t.footer.privacy}</Link>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src="/images/Logo.png" alt="Logo" className="h-14 w-auto mb-4 object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
          <div className="text-white text-[12px] md:text-[13px] tracking-[0.4em] font-bold">
            VITRACARE
          </div>
        </div>

        {/* Copyright */}
        <div className="text-white/70 text-[12px] mt-8">
          {t.footer.copyright}
        </div>
      </footer>
    </div>
  );
}
