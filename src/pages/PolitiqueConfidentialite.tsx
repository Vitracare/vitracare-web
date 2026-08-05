import { LegalPageLayout } from '../components/LegalPageLayout';

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageLayout title="Politique de confidentialité">
      <div className="flex flex-col gap-7">
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>1. Responsable du traitement</h3>
          <p>Le responsable du traitement des données collectées sur ce site est Laslo Hase, éditeur de vitracare.be (voir Mentions légales). Pour toute question relative à vos données, vous pouvez nous contacter à l'adresse contact@vitracare.be.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>2. Données collectées</h3>
          <p>Nous collectons uniquement les données que vous nous transmettez volontairement via nos formulaires :</p>
          <p>— Formulaire de devis : nom, adresse, code postal, email, téléphone.</p>
          <p>— Formulaire de contact : nom, email, message.</p>
          <p>Aucune donnée n'est collectée à votre insu, et nous ne collectons aucune donnée sensible.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>3. Finalité du traitement</h3>
          <p>Ces données sont utilisées exclusivement pour répondre à votre demande : établir un devis indicatif, vous recontacter, et le cas échéant vous mettre en relation avec notre installateur partenaire pour l'exécution de la prestation. Elles ne sont jamais utilisées à des fins de prospection commerciale non sollicitée.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>4. Base légale</h3>
          <p>Le traitement de vos données repose sur les mesures précontractuelles prises à votre demande (article 6.1.b du RGPD) : vous nous transmettez ces informations dans le but d'obtenir un devis ou une réponse à votre question, en vue d'une éventuelle prestation.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>5. Destinataires des données</h3>
          <p>Vos données sont reçues par VitraCare (Laslo Hase) par email. Si votre demande implique un devis pour une prestation, elles sont également transmises à notre installateur partenaire (actuellement MK Teint) afin qu'il puisse établir et exécuter la prestation.</p>
          <p>Le site est hébergé par Vercel Inc., situé aux États-Unis. L'hébergeur peut donc être amené à traiter des données techniques liées à votre visite, dans le cadre de garanties encadrant les transferts de données hors Union européenne.</p>
          <p>Vos données ne sont jamais vendues ni transmises à des tiers à des fins commerciales.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>6. Durée de conservation</h3>
          <p>Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 3 ans à compter de notre dernier échange, sauf obligation légale de conservation plus longue (notamment en cas de facturation par notre installateur partenaire).</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>7. Cookies</h3>
          <p>Ce site n'utilise actuellement aucun cookie de mesure d'audience, de publicité ou de traçage. Il ne dépose aucun cookie non essentiel sur votre appareil. Si cela venait à évoluer (par exemple avec l'ajout d'un outil de statistiques), cette politique sera mise à jour en conséquence et, le cas échéant, votre consentement vous sera demandé au préalable.</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>8. Vos droits</h3>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition concernant vos données personnelles, ainsi que d'un droit à la limitation du traitement et à la portabilité de vos données. Pour exercer ces droits, contactez-nous à contact@vitracare.be. Vous disposez également du droit d'introduire une réclamation auprès de l'Autorité de protection des données belge (APD).</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>9. Sécurité</h3>
          <p>Nous prenons des mesures raisonnables pour protéger vos données contre tout accès, modification ou divulgation non autorisés. Les échanges avec nos formulaires transitent par une connexion sécurisée (HTTPS).</p>
        </div>
        <div>
          <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>10. Contact</h3>
          <p>Pour toute question relative à cette politique de confidentialité ou à vos données personnelles : contact@vitracare.be.</p>
        </div>
      </div>
    </LegalPageLayout>
  );
}
