import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Lang } from '../i18n';
import { langPrefixes } from '../App';

export const LanguageSwitcher = ({ dark = false }: { dark?: boolean }) => {
  const { lang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const options: Lang[] = ['FR', 'NL', 'EN'];

  const inactiveClass = dark ? 'text-white/50 hover:text-white' : 'text-[#999] hover:text-[#333]';
  const activeClass = dark ? 'text-white' : 'text-[#333]';

  const switchTo = (target: Lang) => {
    if (target === lang) return;
    const currentPrefix = langPrefixes[lang];
    let path = location.pathname;
    if (currentPrefix && path.startsWith(currentPrefix)) {
      path = path.slice(currentPrefix.length) || '/';
    }
    const newPrefix = langPrefixes[target];
    const newPath = path === '/' ? newPrefix || '/' : `${newPrefix}${path}`;
    navigate(`${newPath}${location.search}${location.hash}`);
  };

  return (
    <div className="flex gap-2 text-[14px] font-bold tracking-widest">
      {options.map((option) => (
        <span
          key={option}
          onClick={() => switchTo(option)}
          className={`cursor-pointer ${lang === option ? activeClass : inactiveClass}`}
        >
          {option}
        </span>
      ))}
    </div>
  );
};
