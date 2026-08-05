import { LegalPageLayout } from '../components/LegalPageLayout';
import { useLanguage } from '../LanguageContext';
import { legalContent } from '../legalContent';

export default function Faq() {
  const { lang } = useLanguage();
  const content = legalContent[lang];

  return (
    <LegalPageLayout title={content.faqTitle}>
      <div className="flex flex-col gap-8">
        {content.faqItems.map((item, idx) => (
          <div key={idx}>
            <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </LegalPageLayout>
  );
}
