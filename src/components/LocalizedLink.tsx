import { Link, LinkProps } from 'react-router-dom';
import { forwardRef } from 'react';
import { useLanguage } from '../LanguageContext';
import { langPrefixes } from '../App';

export function withLangPrefix(to: string, prefix: string) {
  if (!prefix) return to;
  if (to.startsWith('/#')) return `${prefix}${to.slice(1)}`;
  if (to === '/') return prefix;
  return `${prefix}${to}`;
}

export const LocalizedLink = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const { lang } = useLanguage();
  const prefix = langPrefixes[lang];
  const target = typeof to === 'string' ? withLangPrefix(to, prefix) : to;
  return <Link ref={ref} to={target} {...props} />;
});
LocalizedLink.displayName = 'LocalizedLink';
