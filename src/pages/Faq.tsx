import { LegalPageLayout } from '../components/LegalPageLayout';

const items = [
  {
    q: 'Quels types de films proposez-vous ?',
    a: "Trois teintes : l'effet miroir (intimité totale de jour, bloque 99% des UV), la teinte solaire (transparente, réduit la chaleur et les UV) et le blanc mat (intimité totale des deux côtés, idéal salle de bain ou verrière).",
  },
  {
    q: "L'effet miroir fonctionne-t-il aussi la nuit ?",
    a: "De jour, l'effet miroir bloque totalement la vue depuis l'extérieur. La nuit, si votre intérieur est éclairé et qu'il fait sombre dehors, l'effet s'inverse — c'est le fonctionnement normal de ce type de film, à garder en tête selon vos pièces.",
  },
  {
    q: 'Comment se déroule une demande de devis ?',
    a: 'Vous nous transmettez vos mesures et quelques photos de vos vitrages pour une première estimation rapide. Si vous le préférez, ou pour les projets plus importants, nous pouvons également nous déplacer chez vous pour confirmer les mesures sur place avant de finaliser le devis.',
  },
  {
    q: 'Proposez-vous une visite à domicile ?',
    a: 'Oui — sur simple demande, ou systématiquement pour les grands chantiers, nous nous déplaçons pour évaluer précisément votre projet.',
  },
  {
    q: 'Combien coûte la pose ?',
    a: 'Le prix dépend du film choisi et de la surface à traiter. Nous établissons un devis personnalisé, sans engagement.',
  },
  {
    q: 'Quelle est la durée de vie du film ?',
    a: "Entre 10 et 15 ans. Nous posons systématiquement à l'intérieur du vitrage, ce qui garantit cette durée de vie optimale.",
  },
  {
    q: 'Quelle garantie proposez-vous ?',
    a: '1 an sur la pose.',
  },
  {
    q: 'Posez-vous sur tous les types de vitrage ?',
    a: 'Oui, sur simple, double et triple vitrage.',
  },
  {
    q: 'Le film protège-t-il vraiment contre la chaleur et les UV ?',
    a: "Oui — il bloque jusqu'à 99% des UV et réduit considérablement la chaleur en été, tout en aidant à conserver la chaleur en hiver.",
  },
  {
    q: 'Le film peut-il protéger mes meubles et mon parquet ?',
    a: 'Oui, la réduction des UV limite la décoloration des meubles, sols et objets exposés au soleil — le même principe que les films utilisés en muséographie.',
  },
  {
    q: 'Dans quelles zones intervenez-vous ?',
    a: 'Nous nous concentrons actuellement sur Bruxelles et sa périphérie, avec la possibilité de nous déplacer ailleurs en Belgique selon les projets.',
  },
  {
    q: 'Qui réalise la pose ?',
    a: 'La pose est assurée par notre installateur partenaire. VitraCare reste votre interlocuteur unique avant et après l\'intervention.',
  },
  {
    q: "Suis-je engagé après avoir demandé un devis ?",
    a: 'Non, le devis est gratuit et sans engagement.',
  },
];

export default function Faq() {
  return (
    <LegalPageLayout title="FAQ">
      <div className="flex flex-col gap-8">
        {items.map((item, idx) => (
          <div key={idx}>
            <h3 className="text-[17px] font-bold mb-2" style={{ color: '#464646' }}>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </LegalPageLayout>
  );
}
