import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Home from './pages/Home';
import Devis from './pages/Devis';
import Contact from './pages/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
