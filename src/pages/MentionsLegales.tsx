import { LegalPageLayout } from '../components/LegalPageLayout';

export default function MentionsLegales() {
  return (
    <LegalPageLayout title="Mentions légales">
      <div className="flex flex-col gap-7">
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>1. Éditeur du site</h3>
          <p>Le site vitracare.be est édité par Laslo Hase, personne physique.</p>
          <p>Adresse : Bruxelles, Belgique</p>
          <p>Email : contact@vitracare.be</p>
          <p>Numéro d'entreprise : non applicable — activité exercée à titre personnel (à mettre à jour dès l'immatriculation d'une structure).</p>
          <p>Pour nous contacter par téléphone, consultez notre page Contact.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>2. Directeur de la publication</h3>
          <p>Laslo Hase</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>3. Hébergement</h3>
          <p>Le site est hébergé par Vercel Inc. (États-Unis) — coordonnées complètes disponibles sur vercel.com/legal.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>4. Description des services</h3>
          <p>Ce site présente les services de teinte et de film pour vitres proposés sous la marque VitraCare. VitraCare agit en tant qu'intermédiaire commercial : la prise de contact, le devis et le suivi client sont assurés par VitraCare, tandis que la pose est réalisée par un installateur partenaire indépendant. Les informations publiées sont données à titre indicatif et peuvent évoluer sans préavis.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>5. Disponibilité du site</h3>
          <p>Le site est normalement accessible en permanence. Une interruption pour maintenance technique peut être décidée à tout moment, sans engagement de préavis systématique.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>6. Propriété intellectuelle</h3>
          <p>L'ensemble des contenus présents sur ce site (textes, images, logo, identité visuelle) est la propriété de VitraCare, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable, est interdite.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>7. Limitation de responsabilité</h3>
          <p>VitraCare met tout en œuvre pour assurer l'exactitude des informations diffusées sur ce site, sans garantie d'exhaustivité. VitraCare ne pourra être tenue responsable des dommages indirects résultant de l'utilisation du site (bug, incompatibilité technique, interruption de service).</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>8. Droit applicable et juridiction</h3>
          <p>Le présent site est soumis au droit belge. Tout litige non résolu à l'amiable dans un délai d'un mois sera porté devant les tribunaux francophones de l'arrondissement de Bruxelles.</p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
