import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Lang } from './i18n';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations['FR'];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children, initialLang = 'FR' }: { children: React.ReactNode, initialLang?: Lang }) => {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = translations[lang];

  // Route-level language groups (/nl, /en) can be reconciled rather than remounted
  // on client-side navigation between them — re-sync state when initialLang changes
  // so the language switcher actually updates the rendered content, not just the URL.
  useEffect(() => {
    setLang(initialLang);
    document.documentElement.lang = initialLang.toLowerCase();
  }, [initialLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
