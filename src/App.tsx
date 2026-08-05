import React, { useState, useEffect, useRef } from 'react';
import { Ruler, ShieldCheck, FileBadge, Clock } from 'lucide-react';


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

const translations = {
  FR: {
    nav: { home: 'Accueil', services: 'Services', pricing: 'Produit', about: 'Avis', contact: 'Contact' },
    hero: { title1: 'Libérons tout le', title2: 'potentiel de vos', title3: 'Vitrages', subtitle: 'Et gagnez plus en', quote: 'DEVIS', getQuote: 'OBTENIR UN DEVIS' },
    words: ['intimité', 'sécurité', 'préservation', 'isolation'],
    features: {
      title: 'La lumière entre, rien d\'autre',
      f1_title: 'Retrouvez votre\nintimité',
      f1_desc: 'Le film bloque les regards extérieurs tout en laissant passer la lumière, pour une intimité ajustable pièce par pièce selon l\'opacité choisie.',
      f2_title: 'Protégez votre\nfamille',
      f2_desc: 'Le film renforce vos vitrages et retient le verre en cas de bris, retardant les intrusions pour gagner de précieuses secondes quand elles comptent.',
      f3_title: 'Préservez vos\nbiens',
      f3_desc: 'Le film filtre plus de 99 % des rayons UV pour protéger vos sols, vos meubles et vos œuvres de la décoloration, et préserver l\'éclat de votre intérieur.',
      f4_title: 'Une température\nmaîtrisée',
      f4_desc: 'Le film bloque jusqu\'à 80 % de la chaleur solaire infrarouge pour un intérieur plus frais en été, mieux isolé en hiver et confortable toute l\'année.'
    },
    protection: {
      title: 'Une protection\ninvisible pour\nvotre maison.',
      subtitle: 'Films pour vitrages sur mesure.'
    },
    slider: { before: 'AVANT', after: 'APRÈS' },
    reviews: {
      title: 'Avis',
      r1: 'Le salon plein sud est enfin vivable en été !',
      r2: 'Impossible de savoir si nous sommes là de l\'extérieur. C\'est exactement ce qu\'on voulait.',
      r3: 'Nous vivons enfin rideaux ouverts, sans nous sentir observés.',
      r4: 'Nos toiles ne craignent plus le soleil. Un vrai soulagement !',
      more: 'EN SAVOIR PLUS'
    },
    strip: {
      f1_title: 'Sur mesure', f1_desc: 'étudié fenêtre\npar fenêtre',
      f2_title: 'Film garanti', f2_desc: 'Jusqu\'à 10 ans\npar le fabricant',
      f3_title: 'Pose garantie', f3_desc: 'Jusqu\'à 1 ans\npar Vitra care',
      f4_title: 'Devis sous 48h', f4_desc: 'Contacter un expert\nsans engagement'
    },
    map: {
      title: 'Partout à Bruxelles\net en périphérie',
      subtitle: 'Nous développons un service de haute qualité partout\nà Bruxelles et ses alentours',
      locations: ['Centre', 'Ixelles', 'Uccle', 'Woluwe', 'Evere', 'Auderghem', 'Etterbeek', 'Forest', 'Waterloo', 'Linkebeek', 'Kraainem', 'Et partout\nautour']
    },
    contact: {
      title: 'Obtenez votre devis',
      subtitle: 'Découvrez le potentiel de vos vitrages : plus d\'intimité, moins de chaleur, et une protection durable pour votre intérieur.',
      success: 'Message envoyé ! Nous vous recontacterons dans les 48 heures.',
      form_name: 'Nom / Prénom',
      form_address: 'Adresse',
      form_zip: 'Code postal',
      form_email: 'Email',
      form_phone: 'Téléphone',
      form_privacy1: 'J\'ai lu et j\'accepte votre ',
      form_privacy2: 'politique de confidentialité',
      info_text: 'Remplissez vos coordonnées et cliquez sur le bouton ci-dessous, nous vous recontacterons dans les 48h.'
    },
    footer: {
      faq: 'FAQ', terms: 'Conditions générales', legal: 'Mention légales', privacy: 'Politique confidentialité'
    }
  },
  NL: {
    nav: { home: 'Startpagina', services: 'Diensten', pricing: 'Product', about: 'Beoordelingen', contact: 'Contact' },
    hero: { title1: 'Ontketen het volledige', title2: 'potentieel van', title3: 'uw beglazing', subtitle: 'En win meer aan', quote: 'OFFERTE', getQuote: 'EEN OFFERTE AANVRAGEN' },
    words: ['privacy', 'veiligheid', 'behoud', 'isolatie'],
    features: {
      title: 'Het licht komt binnen, verder niets',
      f1_title: 'Vind uw\nprivacy terug',
      f1_desc: 'De folie blokkeert blikken van buitenaf en laat tegelijkertijd licht door, voor instelbare privacy per kamer.',
      f2_title: 'Bescherm uw\nfamilie',
      f2_desc: 'De folie versterkt uw ramen en houdt het glas vast bij breuk, waardoor indringers worden vertraagd.',
      f3_title: 'Behoud uw\neigendommen',
      f3_desc: 'De folie filtert meer dan 99% van de UV-stralen om uw vloeren en meubels te beschermen tegen vervaging.',
      f4_title: 'Een beheerste\ntemperatuur',
      f4_desc: 'De folie blokkeert tot 80% van de zonnewarmte voor een koeler interieur in de zomer en beter geïsoleerd in de winter.'
    },
    protection: {
      title: 'Een onzichtbare\nbescherming voor\nuw huis.',
      subtitle: 'Raamfolie op maat.'
    },
    slider: { before: 'VOOR', after: 'NA' },
    reviews: {
      title: 'Beoordelingen',
      r1: 'De woonkamer op het zuiden is eindelijk leefbaar in de zomer!',
      r2: 'Onmogelijk om van buitenaf te zien of we er zijn. Precies wat we wilden.',
      r3: 'We leven eindelijk met open gordijnen, zonder ons bekeken te voelen.',
      r4: 'Onze doeken zijn niet meer bang voor de zon. Een hele opluchting!',
      more: 'LEES MEER'
    },
    strip: {
      f1_title: 'Op maat', f1_desc: 'raam voor\nraam bestudeerd',
      f2_title: 'Gegarandeerde folie', f2_desc: 'Tot 10 jaar\ndoor de fabrikant',
      f3_title: 'Installatie gegarandeerd', f3_desc: 'Tot 1 jaar\ndoor Vitra care',
      f4_title: 'Offerte binnen 48u', f4_desc: 'Neem vrijblijvend\ncontact op met een expert'
    },
    map: {
      title: 'Overal in Brussel\nen de rand',
      subtitle: 'Wij ontwikkelen een hoogwaardige service overal\nin Brussel en omgeving',
      locations: ['Centrum', 'Elsene', 'Ukkel', 'Woluwe', 'Evere', 'Oudergem', 'Etterbeek', 'Vorst', 'Waterloo', 'Linkebeek', 'Kraainem', 'En overal\nrondom']
    },
    contact: {
      title: 'Ontvang uw offerte',
      subtitle: 'Ontdek het potentieel van uw ramen: meer privacy, minder warmte en duurzame bescherming voor uw interieur.',
      success: 'Bericht verzonden! We nemen binnen 48 uur contact met u op.',
      form_name: 'Naam / Voornaam',
      form_address: 'Adres',
      form_zip: 'Postcode',
      form_email: 'E-mail',
      form_phone: 'Telefoon',
      form_privacy1: 'Ik heb uw ',
      form_privacy2: 'privacybeleid gelezen en ga ermee akkoord',
      info_text: 'Vul uw gegevens in en klik op de onderstaande knop, wij nemen binnen 48 uur contact met u op.'
    },
    footer: {
      faq: 'FAQ', terms: 'Algemene voorwaarden', legal: 'Wettelijke vermeldingen', privacy: 'Privacybeleid'
    }
  },
  EN: {
    nav: { home: 'Home', services: 'Services', pricing: 'Product', about: 'Reviews', contact: 'Contact' },
    hero: { title1: 'Unlock the full', title2: 'potential of your', title3: 'Windows', subtitle: 'And gain more', quote: 'QUOTE', getQuote: 'GET A QUOTE' },
    words: ['privacy', 'security', 'preservation', 'insulation'],
    features: {
      title: 'Light comes in, nothing else',
      f1_title: 'Regain your\nprivacy',
      f1_desc: 'The film blocks outside views while letting light through, for adjustable privacy room by room.',
      f2_title: 'Protect your\nfamily',
      f2_desc: 'The film strengthens your windows and holds the glass in case of breakage, delaying intrusions.',
      f3_title: 'Preserve your\nbelongings',
      f3_desc: 'The film filters more than 99% of UV rays to protect your floors, furniture and artwork from fading.',
      f4_title: 'A controlled\ntemperature',
      f4_desc: 'The film blocks up to 80% of infrared solar heat for a cooler interior in summer and better insulated in winter.'
    },
    protection: {
      title: 'Invisible protection\nfor your\nhome.',
      subtitle: 'Custom window films.'
    },
    slider: { before: 'BEFORE', after: 'AFTER' },
    reviews: {
      title: 'Reviews',
      r1: 'The south-facing living room is finally livable in summer!',
      r2: 'Impossible to know if we are there from the outside. Exactly what we wanted.',
      r3: 'We finally live with curtains open, without feeling watched.',
      r4: 'Our canvases no longer fear the sun. A real relief!',
      more: 'LEARN MORE'
    },
    strip: {
      f1_title: 'Custom made', f1_desc: 'studied window\nby window',
      f2_title: 'Guaranteed film', f2_desc: 'Up to 10 years\nby the manufacturer',
      f3_title: 'Guaranteed installation', f3_desc: 'Up to 1 year\nby Vitra care',
      f4_title: 'Quote within 48h', f4_desc: 'Contact an expert\nwithout obligation'
    },
    map: {
      title: 'Everywhere in Brussels\nand surroundings',
      subtitle: 'We develop a high quality service everywhere\nin Brussels and surroundings',
      locations: ['Center', 'Ixelles', 'Uccle', 'Woluwe', 'Evere', 'Auderghem', 'Etterbeek', 'Forest', 'Waterloo', 'Linkebeek', 'Kraainem', 'And everywhere\naround']
    },
    contact: {
      title: 'Get your quote',
      subtitle: 'Discover the potential of your windows: more privacy, less heat, and lasting protection for your interior.',
      success: 'Message sent! We will contact you within 48 hours.',
      form_name: 'Name / Surname',
      form_address: 'Address',
      form_zip: 'Postal code',
      form_email: 'Email',
      form_phone: 'Phone',
      form_privacy1: 'I have read and accept your ',
      form_privacy2: 'privacy policy',
      info_text: 'Fill in your details and click the button below, we will contact you within 48 hours.'
    },
    footer: {
      faq: 'FAQ', terms: 'Terms and conditions', legal: 'Legal notice', privacy: 'Privacy policy'
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<'FR' | 'NL' | 'EN'>('FR');
  const t = translations[lang];

  const brandColor = '#BA9765';
  const headingColor = '#464646';
  const textColor = '#555555';
  const lightTextColor = '#888888';

  const words = t.words;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const sectionIds = ['accueil', 'services', 'produit', 'avis', 'contact'];
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      address: formData.get('address'),
      zip: formData.get('zip'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setIsSubmitted(true);
    } catch {
      setSubmitError('Une erreur est survenue. Réessayez, ou appelez-nous directement au 0489 60 70 74.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000')",
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
            <img src="https://i.postimg.cc/P5C9fybp/Logo-et-nom.png" alt="Logo" className="absolute top-0 left-0 h-8 w-auto max-w-none" referrerPolicy="no-referrer" />
          </div>
          <div className="relative h-8 w-[105px] overflow-hidden">
            <img src="https://i.postimg.cc/P5C9fybp/Logo-et-nom.png" alt="VITRACARE" className="absolute top-0 left-[-33.5px] h-8 w-auto max-w-none" referrerPolicy="no-referrer" />
          </div>
        </a>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8 text-[20px] absolute left-1/2 transform -translate-x-1/2">
          {([
            { id: 'accueil', label: t.nav.home },
            { id: 'services', label: t.nav.services },
            { id: 'produit', label: t.nav.pricing },
            { id: 'avis', label: t.nav.about },
            { id: 'contact', label: t.nav.contact },
          ] as const).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative pb-1 transition-colors ${activeSection === item.id ? 'font-bold' : 'hover:text-black'}`}
              style={{ color: textColor }}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px]" style={{ backgroundColor: brandColor }}></span>
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a 
            href="#contact"
            className="hidden sm:block text-white px-6 py-2 rounded-full text-[16px] font-bold tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] bg-[#BA9765] cursor-pointer"
          >
            {t.hero.quote}
          </a>
          <div className="flex gap-2 text-[14px] font-bold tracking-widest text-[#999]">
            <span onClick={() => setLang('FR')} className={`cursor-pointer ${lang === 'FR' ? 'text-[#333]' : 'hover:text-[#333]'}`}>FR</span>
            <span onClick={() => setLang('NL')} className={`cursor-pointer ${lang === 'NL' ? 'text-[#333]' : 'hover:text-[#333]'}`}>NL</span>
            <span onClick={() => setLang('EN')} className={`cursor-pointer ${lang === 'EN' ? 'text-[#333]' : 'hover:text-[#333]'}`}>EN</span>
          </div>
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

          <a
            href="#contact"
            className="inline-block text-center text-white px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] bg-[#BA9765] w-fit cursor-pointer"
          >
            {t.hero.getQuote}
          </a>
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
              <img src="https://i.postimg.cc/Kz6Dkw4K/Yeux.png" alt="Retrouvez votre intimité" className="h-full w-full object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
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
              <img src="https://i.postimg.cc/JnVsbLct/Securite.png" alt="Protégez votre famille" className="h-full w-full object-contain" referrerPolicy="no-referrer" />
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
              <img src="https://i.postimg.cc/qMRv6qVG/Preserver.png" alt="Préservez vos biens" className="h-full w-full object-contain" referrerPolicy="no-referrer" />
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
              <img src="https://i.postimg.cc/hjDBFZSW/Temperature.png" alt="Une température maîtrisée" className="h-full w-full object-contain" referrerPolicy="no-referrer" />
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
          <a
            href="#contact"
            className="inline-block text-white px-10 py-4 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] bg-[#BA9765] cursor-pointer"
          >
            {t.hero.getQuote}
          </a>
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
            
            <a
              href="#contact"
              className="inline-block text-white px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] bg-[#BA9765] cursor-pointer"
            >
              {t.hero.getQuote}
            </a>
          </div>
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
                <img src="https://i.postimg.cc/CLhZ6F9P/House-1-final.png" className="w-[53%] h-full object-cover rounded-xl" alt="Maison" referrerPolicy="no-referrer" />
                <img src="https://i.postimg.cc/pr42fQKV/Avis-2.png" className="w-[25%] h-[98%] object-cover rounded-xl" alt="Balcon" referrerPolicy="no-referrer" />
              </div>
              {/* Bottom Row */}
              <div className="flex w-full h-[58%] gap-4 items-start pl-[7%]">
                <img src="https://i.postimg.cc/7PWYr4jH/Avis-3-final.png" className="w-[27%] h-[72%] object-cover rounded-xl" alt="Vitrages" referrerPolicy="no-referrer" />
                <img src="https://i.postimg.cc/P5GXN4tC/Avis-4.png" className="w-[34%] h-full object-cover rounded-xl" alt="Façade" referrerPolicy="no-referrer" />
                <img src="https://i.postimg.cc/Z5kb0cTX/Avis-5-final.png" className="w-[25%] h-[49%] object-cover rounded-xl" alt="Baie vitrée" referrerPolicy="no-referrer" />
              </div>
            </div>
            
            {/* Mobile Photo Collage */}
            <div className="w-full h-[300px] md:hidden relative overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
               <img src="https://i.postimg.cc/CLhZ6F9P/House-1-final.png" className="w-full h-full object-contain mix-blend-multiply" alt="Maison" referrerPolicy="no-referrer" />
            </div>

            {/* Right: Testimonials */}
            <div className="w-full lg:w-1/2 flex flex-col lg:pl-10">
              <div className="flex flex-col gap-8 w-full">
                <Testimonial 
                  name="Isabelle" 
                  image="https://i.postimg.cc/sxhFRkZz/Isabelle.avif" 
                  text={t.reviews.r1} 
                />
                
                <Testimonial 
                  name="Olivier" 
                  image="https://i.postimg.cc/02GkMSbq/Francois.avif" 
                  text={t.reviews.r2} 
                  offsetClass="ml-auto lg:mr-4"
                />

                <Testimonial 
                  name="Sophie" 
                  image="https://i.postimg.cc/FFy5D4mP/Sophie.avif" 
                  text={t.reviews.r3} 
                />

                <Testimonial 
                  name="François" 
                  image="https://i.postimg.cc/QtVCcdv4/Olivier.avif" 
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
              <img src="https://i.postimg.cc/90YzLScS/Mesure.png" alt="Mesure" className="h-8 w-auto mb-4 object-contain mix-blend-lighten" referrerPolicy="no-referrer" />
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
           <img src="https://i.postimg.cc/5thDHz4Z/Bruxelles.png" className="w-full h-full object-cover opacity-80" alt="Background map" referrerPolicy="no-referrer" />
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

      {/* Contact Section */}
      <section id="contact" className="w-full bg-[#4b4b4b] py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 text-center tracking-tight">
            {t.contact.title}
          </h2>
          
          <div className="w-[60px] h-[2px] mb-8" style={{ backgroundColor: brandColor }}></div>
          
          <p className="text-[18px] text-white/90 text-center max-w-2xl leading-relaxed mb-16">
            {t.contact.subtitle}
          </p>

          {/* Form Card */}
          <div className="w-full flex flex-col md:flex-row rounded-[16px] overflow-hidden shadow-2xl relative">
            
            {/* Success Overlay */}
            <div 
              className={`absolute inset-0 z-50 flex flex-col items-center justify-center p-8 md:p-12 text-center transition-opacity duration-500 ease-in-out ${isSubmitted ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
              style={{ backgroundColor: brandColor }}
            >
              <div className="w-[72px] h-[72px] rounded-full border-[5px] border-white flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-[28px] md:text-[36px] font-bold px-4 max-w-2xl leading-tight">
                {t.contact.success}
              </h3>
            </div>

            {/* Left Form Side */}
            <div className={`w-full md:w-[55%] bg-white p-8 md:p-12 transition-opacity duration-500 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
              <form id="devis-form" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t.contact.form_name}
                  className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
                />
                <input
                  type="text"
                  name="address"
                  placeholder={t.contact.form_address}
                  className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
                />
                <input
                  type="text"
                  name="zip"
                  placeholder={t.contact.form_zip}
                  className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.contact.form_email}
                  className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.contact.form_phone}
                  className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
                />
                <div className="flex items-start gap-2 mt-2">
                  <input type="checkbox" id="privacy" required className="mt-1" />
                  <label htmlFor="privacy" className="text-[11px] text-gray-500 leading-tight">
                    {t.contact.form_privacy1}<span style={{ color: brandColor }}>{t.contact.form_privacy2}</span>
                  </label>
                </div>
                {submitError && (
                  <p className="text-[12px] text-red-600">{submitError}</p>
                )}
              </form>
            </div>

            {/* Right Info Side */}
            <div className={`w-full md:w-[45%] p-8 md:p-12 flex flex-col items-center justify-center text-center transition-opacity duration-500 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: brandColor }}>
              {/* Logo icon */}
              <div className="flex flex-col items-center mb-8">
                <img src="https://i.postimg.cc/5twPjRXW/Logo.png" alt="Logo" className="h-14 w-auto mb-4 object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
                <div className="text-white text-[12px] md:text-[13px] tracking-[0.4em] font-bold">
                  VITRACARE
                </div>
              </div>

              <p className="text-white text-[16px] leading-relaxed mb-10 font-medium">
                {t.contact.info_text}
              </p>

              <button
                type="submit"
                form="devis-form"
                disabled={isSubmitting}
                className="bg-white text-[#BA9765] text-[13px] font-bold px-8 py-3.5 rounded-full tracking-wider transition-all duration-300 border-2 border-white hover:bg-[#BA9765] hover:text-white active:bg-[#BA9765] active:text-white cursor-pointer disabled:opacity-60 disabled:cursor-wait"
              >
                {isSubmitting ? '...' : t.hero.getQuote}
              </button>
            </div>
          </div>
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
          <a href="#contact" className="hover:opacity-80 transition-opacity">{t.nav.contact}</a>
        </div>
        
        {/* Bottom links */}
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-3 mb-16 text-[14px] md:text-[15px]">
          <a href="#" className="hover:opacity-80 transition-opacity">{t.footer.faq}</a>
          <a href="#" className="hover:opacity-80 transition-opacity">{t.footer.terms}</a>
          <a href="#" className="hover:opacity-80 transition-opacity">{t.footer.legal}</a>
          <a href="#" className="hover:opacity-80 transition-opacity">{t.footer.privacy}</a>
        </div>
        
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src="https://i.postimg.cc/5twPjRXW/Logo.png" alt="Logo" className="h-14 w-auto mb-4 object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
          <div className="text-white text-[12px] md:text-[13px] tracking-[0.4em] font-bold">
            VITRACARE
          </div>
        </div>
      </footer>
    </div>
  );
}
