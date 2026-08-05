import { useLanguage } from '../LanguageContext';
import { Lang } from '../i18n';

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const options: Lang[] = ['FR', 'NL', 'EN'];

  return (
    <div className="flex gap-2 text-[14px] font-bold tracking-widest text-[#999]">
      {options.map((option) => (
        <span
          key={option}
          onClick={() => setLang(option)}
          className={`cursor-pointer ${lang === option ? 'text-[#333]' : 'hover:text-[#333]'}`}
        >
          {option}
        </span>
      ))}
    </div>
  );
};
