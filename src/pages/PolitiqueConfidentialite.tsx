import { LegalPageLayout } from '../components/LegalPageLayout';
import { useLanguage } from '../LanguageContext';
import { legalContent } from '../legalContent';

export default function PolitiqueConfidentialite() {
  const { lang } = useLanguage();
  const content = legalContent[lang];

  return (
    <LegalPageLayout title={content.privacyTitle}>
      <div className="flex flex-col gap-7">
        {content.privacySections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>{section.h}</h3>
            {section.p.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ))}
      </div>
    </LegalPageLayout>
  );
}
