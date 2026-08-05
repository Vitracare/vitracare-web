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

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
