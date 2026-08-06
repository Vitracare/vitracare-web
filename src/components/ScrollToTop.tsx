import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };
      if (!scrollToHash()) {
        const timeout = setTimeout(scrollToHash, 100);
        return () => clearTimeout(timeout);
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};
