import { LegalPageLayout } from '../components/LegalPageLayout';
import { useLanguage } from '../LanguageContext';
import { legalContent } from '../legalContent';
import { langPrefixes } from '../App';
import { renderParagraph } from '../lib/renderParagraph';

export default function Faq() {
  const { lang } = useLanguage();
  const content = legalContent[lang];

  return (
    <LegalPageLayout title={content.faqTitle}>
      {/* The page's <h1> above is just the short page title ("FAQ") — this <h2>
          fills the gap before the <h3> questions start, since jumping straight
          from h1 to h3 skips a heading level. */}
      <h2 className="text-[13px] font-bold uppercase tracking-wider mb-6" style={{ color: '#767676' }}>
        {lang === 'NL' ? 'Al onze antwoorden' : lang === 'EN' ? 'All our answers' : 'Toutes nos réponses'}
      </h2>
      <div className="flex flex-col gap-8">
        {content.faqItems.map((item, idx) => (
          <div key={idx}>
            <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>{item.q}</h3>
            <p>{renderParagraph(item.a, langPrefixes[lang])}</p>
          </div>
        ))}
      </div>
    </LegalPageLayout>
  );
}
