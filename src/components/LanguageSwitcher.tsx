import { useLanguage } from '../LanguageContext';
import { Lang } from '../i18n';

export const LanguageSwitcher = ({ dark = false }: { dark?: boolean }) => {
  const { lang, setLang } = useLanguage();
  const options: Lang[] = ['FR', 'NL', 'EN'];

  const inactiveClass = dark ? 'text-white/50 hover:text-white' : 'text-[#999] hover:text-[#333]';
  const activeClass = dark ? 'text-white' : 'text-[#333]';

  return (
    <div className="flex gap-2 text-[14px] font-bold tracking-widest">
      {options.map((option) => (
        <span
          key={option}
          onClick={() => setLang(option)}
          className={`cursor-pointer ${lang === option ? activeClass : inactiveClass}`}
        >
          {option}
        </span>
      ))}
    </div>
  );
};
