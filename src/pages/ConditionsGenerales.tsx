import { LegalPageLayout } from '../components/LegalPageLayout';

export default function ConditionsGenerales() {
  return (
    <LegalPageLayout title="Conditions générales de mise en relation">
      <div className="flex flex-col gap-7">
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>1. Objet</h3>
          <p>VitraCare est un service de mise en relation entre les clients et des installateurs partenaires indépendants, spécialisés dans la pose de films pour vitrages. VitraCare n'exécute pas elle-même la prestation de pose.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>2. Rôle de VitraCare</h3>
          <p>VitraCare assure la prise de contact, l'établissement d'un devis indicatif, la mise en relation avec l'installateur partenaire, et le suivi de la demande du client.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>3. Rôle de l'installateur partenaire</h3>
          <p>La prestation (confirmation des mesures, pose, garantie technique) est réalisée par l'installateur partenaire (actuellement MK Teint), qui facture directement le client et reste seul responsable de l'exécution de la prestation.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>4. Nature du devis</h3>
          <p>Le devis transmis par VitraCare est indicatif, établi sur base des informations fournies par le client. Le contrat définitif de prestation est conclu directement entre le client et l'installateur partenaire, qui peut ajuster le montant après vérification sur place.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>5. Responsabilité</h3>
          <p>VitraCare n'étant pas partie au contrat d'exécution, elle ne peut être tenue responsable des délais, de la qualité de la pose ou de dommages éventuels liés à la prestation elle-même. VitraCare s'engage en revanche sur la qualité de la mise en relation et reste disponible pour tout suivi.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>6. Garantie</h3>
          <p>La garantie applicable (1 an sur la pose) est celle offerte par l'installateur partenaire. VitraCare accompagne le client dans le suivi en cas de besoin.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>7. Prix et paiement</h3>
          <p>Le prix est fixé d'un commun accord avant intervention. Le paiement s'effectue directement auprès de l'installateur partenaire, selon ses propres modalités.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>8. Droit applicable</h3>
          <p>Ces conditions sont régies par le droit belge. Tout litige non résolu à l'amiable sera porté devant les tribunaux francophones de l'arrondissement de Bruxelles.</p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
