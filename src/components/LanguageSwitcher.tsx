import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Lang } from '../i18n';
import { langPrefixes } from '../App';

export const LanguageSwitcher = ({ dark = false }: { dark?: boolean }) => {
  const { lang } = useLanguage();
  const location = useLocation();
  const options: Lang[] = ['FR', 'NL', 'EN'];

  // #767676 is the muted-text color already used elsewhere on the site and
  // passes WCAG AA contrast on white (unlike the #999 this replaced, which
  // an audit flagged as likely under 4.5:1). Same idea for the dark variant:
  // white/50 was too faint against a dark header, bumped to white/70.
  const inactiveClass = dark ? 'text-white/70 hover:text-white' : 'text-[#767676] hover:text-[#333]';
  const activeClass = dark ? 'text-white' : 'text-[#333]';

  const pathFor = (target: Lang) => {
    const currentPrefix = langPrefixes[lang];
    let path = location.pathname;
    if (currentPrefix && path.startsWith(currentPrefix)) {
      path = path.slice(currentPrefix.length) || '/';
    }
    const newPrefix = langPrefixes[target];
    const newPath = path === '/' ? newPrefix || '/' : `${newPrefix}${path}`;
    return `${newPath}${location.search}${location.hash}`;
  };

  return (
    <div className="flex gap-1 text-[14px] font-bold tracking-widest">
      {options.map((option) => (
        <Link
          key={option}
          to={pathFor(option)}
          aria-current={lang === option ? 'page' : undefined}
          className={`px-1.5 py-2 no-underline ${lang === option ? activeClass : inactiveClass}`}
        >
          {option}
        </Link>
      ))}
    </div>
  );
};
