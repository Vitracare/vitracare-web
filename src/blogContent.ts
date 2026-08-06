export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  excerpt: string;
  sections: BlogSection[];
};

export const blogArticles: Record<'FR' | 'NL' | 'EN', BlogArticle[]> = {
  FR: [
    {
      slug: 'quel-film-choisir-vitrages',
      title: 'Film effet miroir, teinte solaire ou blanc mat : quel film choisir pour vos vitrages ?',
      metaDescription: "Film miroir, teinte solaire ou blanc mat : découvrez les différences, avantages et usages de chaque film pour vitrages, et lequel convient le mieux à votre maison.",
      date: '2026-08-06',
      excerpt: "Chaque film répond à un besoin différent : intimité totale, confort thermique, ou esthétique discrète. Voici un guide simple pour faire le bon choix.",
      sections: [
        {
          paragraphs: [
            "Vous envisagez de faire poser un film sur vos vitrages, mais vous hésitez entre les différentes teintes disponibles ? C'est une question qu'on nous pose très souvent. Chaque film répond à un besoin différent : intimité totale, confort thermique, ou esthétique discrète. Voici un guide simple pour vous aider à faire le bon choix.",
          ],
        },
        {
          heading: 'Le teint effet miroir',
          paragraphs: [
            "Le teint effet miroir est la solution la plus radicale en matière d'intimité. Posé sur vos vitrages, il crée un effet miroir sans tain qui empêche totalement la vue depuis l'extérieur pendant la journée, tout en vous laissant profiter d'une vue dégagée depuis l'intérieur. C'est le choix idéal pour une maison exposée à la rue, un rez-de-chaussée, ou une grande baie vitrée donnant sur un jardin visible des voisins.",
            "Au-delà de l'intimité, ce film bloque 99% des rayons UV et réduit considérablement la chaleur qui entre par vos fenêtres — un vrai plus en été.",
            "Un point à connaître : l'effet miroir fonctionne uniquement de jour. La nuit, si votre intérieur est éclairé et qu'il fait sombre dehors, l'effet s'inverse, comme pour n'importe quelle vitre. C'est le fonctionnement normal de ce type de film, à garder en tête selon les pièces où vous l'installez.",
          ],
        },
        {
          heading: 'La teinte solaire',
          paragraphs: [
            "Si votre priorité est le confort thermique plutôt que l'intimité totale, la teinte solaire est le film le plus adapté. Contrairement au film miroir, elle reste transparente — on continue à voir clairement au travers, dans les deux sens.",
            "Son rôle principal : réduire la chaleur et les UV qui entrent dans la maison, pour un confort optimal en été sans devoir fermer les volets ou installer une climatisation. C'est une solution particulièrement appréciée dans les pièces de vie très exposées au soleil, ou pour protéger un salon plein sud qui devient difficilement vivable l'après-midi.",
          ],
        },
        {
          heading: 'Le teint blanc mat',
          paragraphs: [
            "Le teint blanc mat répond à un besoin différent : une intimité totale, mais dans les deux sens — depuis l'intérieur comme depuis l'extérieur, de jour comme de nuit. Contrairement au film miroir, son fonctionnement ne dépend pas de la luminosité.",
            "C'est le choix le plus adapté pour une salle de bain, une verrière, une porte d'entrée vitrée, ou toute pièce où vous voulez laisser entrer la lumière sans jamais être visible. Il apporte aussi un rendu esthétique épuré et élégant, très apprécié sur les façades contemporaines.",
          ],
        },
        {
          heading: 'Comment choisir ?',
          paragraphs: [
            "En résumé : vous voulez une intimité totale de jour, sans perdre la vue depuis l'intérieur → le teint effet miroir. Votre priorité est de réduire la chaleur sans perdre en transparence → la teinte solaire. Vous cherchez une intimité totale à toute heure, avec un rendu mat élégant → le teint blanc mat.",
            "Ces trois films sont compatibles avec du simple, double ou triple vitrage.",
          ],
        },
        {
          heading: 'Pose et durée de vie',
          paragraphs: [
            "Quel que soit le film choisi, la pose est réalisée par notre installateur partenaire, toujours à l'intérieur du vitrage — ce qui garantit une durée de vie optimale, jusqu'à 10 ans. La pose est couverte par une garantie d'un an.",
            "Chaque projet est différent : la surface, le type de vitrage et vos besoins spécifiques influencent le choix final. C'est pourquoi nous établissons toujours un devis personnalisé, gratuit et sans engagement.",
          ],
        },
        {
          heading: 'Vous hésitez encore ?',
          paragraphs: [
            "Contactez-nous, nous vous conseillons gratuitement selon votre projet et vous répondons sous 24h.",
          ],
        },
      ],
    },
  ],
  NL: [
    {
      slug: 'quel-film-choisir-vitrages',
      title: 'Spiegeleffect, zonwerende folie of matwit: welke folie kiezen voor uw beglazing?',
      metaDescription: 'Spiegelfolie, zonwerende folie of matwitte folie: ontdek de verschillen, voordelen en toepassingen van elke folie, en welke het beste bij uw huis past.',
      date: '2026-08-06',
      excerpt: 'Elke folie beantwoordt aan een andere behoefte: volledige privacy, thermisch comfort, of een discrete esthetiek. Een eenvoudige gids om de juiste keuze te maken.',
      sections: [
        {
          paragraphs: [
            "Overweegt u een folie te laten plaatsen op uw beglazing, maar twijfelt u tussen de verschillende tinten? Een vraag die we vaak krijgen. Elke folie beantwoordt aan een andere behoefte: volledige privacy, thermisch comfort, of een discrete esthetiek. Hier is een eenvoudige gids om de juiste keuze te maken.",
          ],
        },
        {
          heading: 'Spiegeleffect folie',
          paragraphs: [
            "De spiegeleffect folie is de meest radicale oplossing op het gebied van privacy. Geplaatst op uw beglazing creëert ze een spiegeleffect zonder tain dat overdag elk zicht van buitenaf volledig blokkeert, terwijl u vanbinnen gewoon van een vrij uitzicht blijft genieten. Dit is de ideale keuze voor een huis aan de straatkant, een gelijkvloers, of een grote raampartij met zicht op een tuin die zichtbaar is voor de buren.",
            "Naast privacy blokkeert deze folie ook 99% van de UV-stralen en vermindert ze aanzienlijk de warmte die via uw ramen binnenkomt — een echte troef in de zomer.",
            "Een aandachtspunt: het spiegeleffect werkt enkel overdag. 's Nachts, wanneer uw interieur verlicht is en het buiten donker is, keert het effect om, zoals bij elk ander raam. Dit is de normale werking van dit type folie, houd hier rekening mee afhankelijk van de kamer waarin u ze plaatst.",
          ],
        },
        {
          heading: 'Zonwerende folie',
          paragraphs: [
            "Als uw prioriteit eerder thermisch comfort is dan volledige privacy, is de zonwerende folie de meest geschikte keuze. In tegenstelling tot de spiegelfolie blijft ze transparant — u blijft duidelijk doorheen kijken, in beide richtingen.",
            "Haar belangrijkste rol: de warmte en UV-stralen die het huis binnenkomen verminderen, voor optimaal comfort in de zomer zonder de rolluiken te moeten sluiten of airconditioning te installeren. Een oplossing die vooral gewaardeerd wordt in leefruimtes die sterk aan de zon blootgesteld zijn, of om een zuidgerichte woonkamer te beschermen die 's namiddags moeilijk leefbaar wordt.",
          ],
        },
        {
          heading: 'Matwitte folie',
          paragraphs: [
            "De matwitte folie beantwoordt aan een andere behoefte: volledige privacy, maar in beide richtingen — van binnenuit zoals van buitenaf, dag en nacht. In tegenstelling tot de spiegelfolie hangt haar werking niet af van het lichtniveau.",
            "Dit is de meest geschikte keuze voor een badkamer, een veranda, een glazen voordeur, of elke ruimte waar u licht wilt binnenlaten zonder ooit zichtbaar te zijn. Ze zorgt ook voor een strak en elegant esthetisch resultaat, erg gewaardeerd op hedendaagse gevels.",
          ],
        },
        {
          heading: 'Hoe kiezen?',
          paragraphs: [
            "Samengevat: u wilt overdag volledige privacy, zonder het zicht van binnenuit te verliezen → de spiegeleffect folie. Uw prioriteit is warmte verminderen zonder transparantie te verliezen → de zonwerende folie. U zoekt volledige privacy op elk moment, met een elegante matte afwerking → de matwitte folie.",
            "Deze drie folies zijn compatibel met enkel, dubbel of drievoudig glas.",
          ],
        },
        {
          heading: 'Plaatsing en levensduur',
          paragraphs: [
            "Ongeacht de gekozen folie wordt de plaatsing uitgevoerd door onze partnerinstallateur, steeds aan de binnenzijde van het glas — wat een optimale levensduur garandeert, tot 10 jaar. De plaatsing wordt gedekt door een garantie van één jaar.",
            "Elk project is anders: de oppervlakte, het type beglazing en uw specifieke behoeften bepalen de uiteindelijke keuze. Daarom stellen we altijd een gepersonaliseerde offerte op, gratis en vrijblijvend.",
          ],
        },
        {
          heading: 'Twijfelt u nog?',
          paragraphs: [
            'Neem contact met ons op, we adviseren u gratis op basis van uw project en antwoorden binnen 24u.',
          ],
        },
      ],
    },
  ],
  EN: [
    {
      slug: 'quel-film-choisir-vitrages',
      title: 'Mirror effect, solar tint or matte white: which film should you choose for your windows?',
      metaDescription: 'Mirror film, solar tint or matte white: discover the differences, benefits and uses of each window film, and which one best suits your home.',
      date: '2026-08-06',
      excerpt: "Each film answers a different need: total privacy, thermal comfort, or a discreet look. Here's a simple guide to help you make the right choice.",
      sections: [
        {
          paragraphs: [
            "Thinking about having a film installed on your windows, but unsure which tint to choose? It's a question we get asked often. Each film answers a different need: total privacy, thermal comfort, or a discreet look. Here's a simple guide to help you make the right choice.",
          ],
        },
        {
          heading: 'Mirror effect film',
          paragraphs: [
            "The mirror effect film is the most effective solution when it comes to privacy. Applied to your windows, it creates a one-way mirror effect that completely blocks the view from outside during the day, while you continue to enjoy a clear view from inside. It's the ideal choice for a house facing the street, a ground floor, or a large window overlooking a garden visible to neighbours.",
            "Beyond privacy, this film blocks 99% of UV rays and significantly reduces the heat entering through your windows — a real advantage in summer.",
            "One thing to know: the mirror effect only works during the day. At night, if your interior is lit and it's dark outside, the effect reverses, as with any window. This is normal behaviour for this type of film, worth keeping in mind depending on the room.",
          ],
        },
        {
          heading: 'Solar tint',
          paragraphs: [
            "If your priority is thermal comfort rather than total privacy, solar tint is the most suitable film. Unlike mirror film, it remains transparent — you can still see clearly through it, in both directions.",
            "Its main role: reducing the heat and UV entering the house, for optimal comfort in summer without having to close the shutters or install air conditioning. It's a solution particularly appreciated in living spaces heavily exposed to the sun, or to protect a south-facing living room that becomes hard to use in the afternoon.",
          ],
        },
        {
          heading: 'Matte white film',
          paragraphs: [
            "Matte white film answers a different need: total privacy, in both directions — from inside as well as outside, day or night. Unlike mirror film, how it works doesn't depend on light levels.",
            "It's the best choice for a bathroom, a conservatory, a glazed front door, or any room where you want to let light in without ever being visible. It also gives a clean, elegant look that's very popular on contemporary façades.",
          ],
        },
        {
          heading: 'How to choose?',
          paragraphs: [
            "In short: you want total daytime privacy without losing the view from inside → mirror effect film. Your priority is reducing heat without losing transparency → solar tint. You're looking for total privacy at any time, with an elegant matte finish → matte white film.",
            'All three films are compatible with single, double and triple glazing.',
          ],
        },
        {
          heading: 'Installation and lifespan',
          paragraphs: [
            "Whichever film you choose, installation is carried out by our partner installer, always on the interior side of the glass — which guarantees an optimal lifespan of up to 10 years. Installation is covered by a one-year warranty.",
            'Every project is different: the surface area, type of glazing and your specific needs all influence the final choice. That\'s why we always draw up a personalised quote, free and with no obligation.',
          ],
        },
        {
          heading: 'Still unsure?',
          paragraphs: [
            "Contact us — we'll advise you for free based on your project and reply within 24 hours.",
          ],
        },
      ],
    },
  ],
};
