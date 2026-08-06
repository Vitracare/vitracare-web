import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
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

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/devis" element={<Devis />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/conditions-generales" element={<ConditionsGenerales />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />
    </Routes>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}
