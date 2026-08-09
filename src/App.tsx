import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import { Lang } from './i18n';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import Devis from './pages/Devis';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Realisations from './pages/Realisations';
import ConditionsGenerales from './pages/ConditionsGenerales';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';

export const pageRoutes: { path: string; element: ReactElement }[] = [
  { path: '/', element: <Home /> },
  { path: '/devis', element: <Devis /> },
  { path: '/contact', element: <Contact /> },
  { path: '/faq', element: <Faq /> },
  { path: '/realisations', element: <Realisations /> },
  { path: '/conditions-generales', element: <ConditionsGenerales /> },
  { path: '/mentions-legales', element: <MentionsLegales /> },
  { path: '/politique-confidentialite', element: <PolitiqueConfidentialite /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogArticle /> },
];

export const langPrefixes: Record<Lang, string> = { FR: '', NL: '/nl', EN: '/en' };

function localizedPath(prefix: string, path: string) {
  return path === '/' ? prefix || '/' : `${prefix}${path}`;
}

function buildRouteElements(): ReactElement[] {
  const elements: ReactElement[] = [];
  for (const lang of Object.keys(langPrefixes) as Lang[]) {
    for (const r of pageRoutes) {
      const routePath = localizedPath(langPrefixes[lang], r.path);
      const routeElement = <LanguageProvider initialLang={lang}>{r.element}</LanguageProvider>;
      // react-router v7's Route(props: RouteProps) signature doesn't resolve `key` via
      // JSX.LibraryManagedAttributes in this TS/React setup — confirmed upstream typing
      // quirk (key is valid at runtime), not a real prop error.
      // @ts-expect-error — see comment above
      elements.push(<Route key={`${lang}${r.path}`} path={routePath} element={routeElement} />);
    }
  }
  return elements;
}

export function AppRoutes() {
  return <Routes>{buildRouteElements()}</Routes>;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}
