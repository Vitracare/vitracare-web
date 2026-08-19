export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  metaTitle: string;
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
      metaTitle: 'Quel film choisir pour vos vitrages ?',
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
    {
      slug: 'film-vitrage-economies-climatisation',
      title: 'Film pour vitrage ou climatisation : quelle solution refroidit vraiment votre intérieur sans faire exploser la facture ?',
      metaTitle: 'Film pour vitrage vs climatisation : quelle économie ?',
      metaDescription:
        "Ventilateur, climatiseur ou film pour vitrage : quelle solution réduit vraiment la chaleur chez vous ? Voici ce que montrent les études, chiffres et sources à l'appui.",
      date: '2026-08-19',
      excerpt:
        "Face à la chaleur, le réflexe est souvent d'allumer un ventilateur ou un climatiseur. Voici ce que montrent les études sur une alternative plus discrète : le film pour vitrage.",
      sections: [
        {
          paragraphs: [
            "Chaque été, le même réflexe : sortir le ventilateur, ou investir dans un climatiseur mobile. Les deux ont un point commun — ils consomment de l'électricité en continu, sans jamais s'attaquer à la vraie cause du problème : la chaleur qui entre par les fenêtres. Le film pour vitrage prend le problème à l'envers, en bloquant une bonne partie de cette chaleur avant qu'elle n'entre. Voici ce que montrent les études indépendantes sur le sujet.",
          ],
        },
        {
          heading: 'Combien de degrés en moins, concrètement ?',
          paragraphs: [
            "Les retours de terrain sur des installations de films solaires font état d'une baisse de 3 à 6°C de la température intérieure en été, dans les pièces directement exposées au soleil — vérandas, toits vitrés, façades sud ou ouest en tête de liste.",
            "Aux États-Unis, le Department of Energy (le ministère fédéral de l'énergie) va dans le même sens : les films pour vitrage permettent de réduire la consommation liée au refroidissement jusqu'à 30 %, en limitant l'apport de chaleur solaire à travers le verre — responsable, selon le même organisme, d'environ un tiers de la charge de climatisation d'un bâtiment.",
          ],
        },
        {
          heading: 'Moins de climatisation, moins de dépenses',
          paragraphs: [
            "Sur des bâtiments équipés de films solaires, les retours d'expérience du secteur font état d'une réduction de 20 à 35 % de la consommation liée à la climatisation sur les façades traitées. En France, ce type de solution est d'ailleurs reconnu par l'ADEME (l'agence de la transition écologique) comme un moyen efficace et économique de réduire la consommation énergétique liée au refroidissement des bâtiments.",
            "Contrairement à un climatiseur, le film n'a aucun coût de fonctionnement une fois posé : pas d'électricité, pas d'entretien, pas de filtre à changer. C'est un investissement unique, pas une dépense qui revient chaque mois d'été.",
          ],
        },
        {
          heading: 'Film, climatiseur ou ventilateur : quelle différence de fond ?',
          paragraphs: [
            "Un ventilateur ne fait que déplacer l'air chaud déjà présent dans la pièce — il ne réduit pas la chaleur qui continue d'entrer par les vitrages. Un climatiseur, lui, refroidit activement l'air, mais consomme de l'électricité en continu et doit lutter en permanence contre une chaleur qui n'arrête pas d'entrer.",
            "Le film pour vitrage agit en amont : il réduit la quantité de chaleur solaire qui traverse le verre. Moins de chaleur qui entre, c'est moins de travail pour un climatiseur existant (et donc moins de consommation), ou tout simplement une pièce plus vivable sans avoir besoin d'allumer quoi que ce soit.",
          ],
        },
        {
          heading: 'Et en hiver, ce n\'est pas du gaspillage ?',
          paragraphs: [
            "Non — le film aide aussi à conserver la chaleur à l'intérieur en hiver, en limitant la déperdition à travers le vitrage. C'est un investissement qui travaille toute l'année, pas seulement pendant les pics de chaleur estivaux.",
          ],
        },
        {
          heading: 'Le film pour vitrage remplace-t-il complètement la climatisation ?',
          paragraphs: [
            "Pas nécessairement dans les cas les plus extrêmes, mais il réduit fortement le besoin. Beaucoup de nos clients constatent qu'une pièce auparavant invivable en été redevient confortable sans avoir besoin d'installer ou d'allumer un climatiseur.",
          ],
        },
        {
          heading: 'Le film fonctionne-t-il aussi bien qu\'un ventilateur ?',
          paragraphs: [
            "Ce n'est pas comparable : un ventilateur brasse l'air chaud déjà présent, sans réduire la chaleur qui continue d'entrer. Le film agit avant que la chaleur n'entre dans la pièce — les deux ne résolvent pas le même problème.",
          ],
        },
        {
          heading: 'Le film a-t-il un coût d\'entretien ou de fonctionnement ?',
          paragraphs: [
            "Non. Contrairement à un climatiseur, le film ne consomme aucune électricité et ne nécessite aucun entretien régulier une fois posé.",
          ],
        },
        {
          heading: 'Est-ce que ça fonctionne sur tous les types de vitrage ?',
          paragraphs: [
            "Nos films sont compatibles avec le simple et le double vitrage. Chaque projet étant différent, nous établissons toujours un devis personnalisé et gratuit après avoir évalué votre situation.",
          ],
        },
        {
          heading: 'Combien de temps dure l\'installation ?',
          paragraphs: [
            "La pose est réalisée par notre installateur partenaire directement chez vous, en une seule intervention. La durée exacte dépend du nombre et de la taille des vitrages concernés — nous vous la précisons dans votre devis.",
          ],
        },
        {
          heading: 'Sources',
          paragraphs: [
            'U.S. Department of Energy / Office of Scientific and Technical Information — étude sur les films de vitrage à contrôle énergétique : osti.gov/servlets/purl/1089147',
            'Wonderglass — Le film solaire : moins de clim, plus d\'économies (données terrain, référence à l\'ADEME) : wonderglass.fr/blog/le-film-solaire-moins-de-clim-plus-deconomie',
          ],
        },
      ],
    },
  ],
  NL: [
    {
      slug: 'quel-film-choisir-vitrages',
      title: 'Spiegeleffect, zonwerende folie of matwit: welke folie kiezen voor uw beglazing?',
      metaTitle: 'Welke folie kiezen voor uw beglazing?',
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
    {
      slug: 'film-vitrage-economies-climatisation',
      title: 'Raamfolie of airco: welke oplossing koelt uw interieur écht af zonder de energiefactuur te doen ontploffen?',
      metaTitle: 'Raamfolie vs airco: welke besparing?',
      metaDescription:
        'Ventilator, airco of raamfolie: wat vermindert de hitte bij u thuis echt? Dit tonen studies, met cijfers en bronnen.',
      date: '2026-08-19',
      excerpt:
        'Bij hitte grijpen we al snel naar de ventilator of de airco. Dit tonen studies over een discreter alternatief: raamfolie.',
      sections: [
        {
          paragraphs: [
            "Elke zomer dezelfde reflex: de ventilator erbij halen, of investeren in een mobiele airco. Beide hebben iets gemeen — ze verbruiken continu elektriciteit, zonder de echte oorzaak van het probleem aan te pakken: de warmte die via de ramen binnenkomt. Raamfolie pakt het probleem omgekeerd aan, door een groot deel van die warmte tegen te houden vóór ze binnenkomt. Dit tonen onafhankelijke studies over het onderwerp.",
          ],
        },
        {
          heading: 'Hoeveel graden minder, concreet?',
          paragraphs: [
            "Terugkoppelingen van installaties met zonwerende folie tonen een daling van 3 tot 6°C van de binnentemperatuur in de zomer, in ruimtes die rechtstreeks aan de zon blootgesteld zijn — verandas, glazen daken, zuid- of westgevels op kop.",
            "In de Verenigde Staten wijst het Department of Energy (het federale ministerie van energie) in dezelfde richting: raamfolie kan het energieverbruik voor koeling met tot 30% verminderen, door de zonnewarmte doorheen het glas te beperken — verantwoordelijk, volgens diezelfde instantie, voor ongeveer een derde van de koellast van een gebouw.",
          ],
        },
        {
          heading: 'Minder airco, minder kosten',
          paragraphs: [
            "Bij gebouwen uitgerust met zonwerende folie tonen terugkoppelingen uit de sector een vermindering van 20 tot 35% van het koelverbruik op de behandelde gevels. In Frankrijk wordt dit type oplossing trouwens erkend door ADEME (het Franse agentschap voor ecologische transitie) als een efficiënte en economische manier om het energieverbruik voor gebouwkoeling te verminderen.",
            "In tegenstelling tot een airco heeft de folie geen enkele werkingskost eenmaal geplaatst: geen elektriciteit, geen onderhoud, geen filter om te vervangen. Het is een eenmalige investering, geen kost die elke zomermaand terugkeert.",
          ],
        },
        {
          heading: 'Folie, airco of ventilator: wat is het fundamentele verschil?',
          paragraphs: [
            "Een ventilator verplaatst enkel de warme lucht die al in de ruimte aanwezig is — hij vermindert niet de warmte die via de beglazing blijft binnenkomen. Een airco koelt de lucht actief, maar verbruikt continu elektriciteit en moet voortdurend strijden tegen warmte die blijft binnenkomen.",
            "Raamfolie grijpt in aan de bron: ze vermindert de hoeveelheid zonnewarmte die door het glas dringt. Minder warmte die binnenkomt betekent minder werk voor een bestaande airco (en dus minder verbruik), of gewoon een leefbaardere ruimte zonder iets te moeten aanzetten.",
          ],
        },
        {
          heading: 'En is dit geen verspilling in de winter?',
          paragraphs: [
            "Nee — de folie helpt ook om warmte binnen te houden in de winter, door warmteverlies via de beglazing te beperken. Het is een investering die het hele jaar door werkt, niet enkel tijdens zomerse hittepieken.",
          ],
        },
        {
          heading: 'Vervangt raamfolie de airco volledig?',
          paragraphs: [
            "Niet noodzakelijk in de meest extreme gevallen, maar de folie vermindert de nood sterk. Veel van onze klanten merken dat een ruimte die voorheen onleefbaar was in de zomer opnieuw comfortabel wordt, zonder een airco te moeten installeren of aanzetten.",
          ],
        },
        {
          heading: 'Werkt de folie even goed als een ventilator?',
          paragraphs: [
            "Dat is niet vergelijkbaar: een ventilator verplaatst de warme lucht die al aanwezig is, zonder de binnenkomende warmte te verminderen. De folie grijpt in vóór de warmte de ruimte binnenkomt — beide lossen niet hetzelfde probleem op.",
          ],
        },
        {
          heading: 'Heeft de folie onderhouds- of werkingskosten?',
          paragraphs: [
            'Nee. In tegenstelling tot een airco verbruikt de folie geen elektriciteit en vereist ze geen regelmatig onderhoud eenmaal geplaatst.',
          ],
        },
        {
          heading: 'Werkt dit op alle soorten beglazing?',
          paragraphs: [
            'Onze folies zijn compatibel met enkel en dubbel glas. Aangezien elk project anders is, stellen we altijd een gepersonaliseerde en gratis offerte op na evaluatie van uw situatie.',
          ],
        },
        {
          heading: 'Hoe lang duurt de installatie?',
          paragraphs: [
            'De plaatsing gebeurt door onze partnerinstallateur rechtstreeks bij u thuis, in één interventie. De exacte duur hangt af van het aantal en de grootte van de betrokken vensters — we vermelden dit in uw offerte.',
          ],
        },
        {
          heading: 'Bronnen',
          paragraphs: [
            'U.S. Department of Energy / Office of Scientific and Technical Information — studie over energiebesparende raamfolies: osti.gov/servlets/purl/1089147',
            'Wonderglass — Le film solaire : moins de clim, plus d\'économies (praktijkgegevens, verwijzing naar ADEME): wonderglass.fr/blog/le-film-solaire-moins-de-clim-plus-deconomie',
          ],
        },
      ],
    },
  ],
  EN: [
    {
      slug: 'quel-film-choisir-vitrages',
      title: 'Mirror effect, solar tint or matte white: which film should you choose for your windows?',
      metaTitle: 'Which window film should you choose?',
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
    {
      slug: 'film-vitrage-economies-climatisation',
      title: 'Window film or air conditioning: which solution actually cools your home without blowing up your energy bill?',
      metaTitle: 'Window Film vs AC: Which Saves More Energy?',
      metaDescription:
        "Fan, air conditioner, or window film: what actually reduces heat at home? Here's what studies show, with figures and sources.",
      date: '2026-08-19',
      excerpt:
        "When it gets hot, the default move is to reach for a fan or an air conditioner. Here's what studies show about a quieter alternative: window film.",
      sections: [
        {
          paragraphs: [
            "Every summer, the same reflex: pull out the fan, or invest in a portable air conditioner. Both share one thing in common — they consume electricity continuously, without ever addressing the real cause of the problem: the heat entering through the windows. Window film tackles the problem from the other end, blocking a large share of that heat before it gets in. Here's what independent research shows on the topic.",
          ],
        },
        {
          heading: 'How many degrees cooler, in practice?',
          paragraphs: [
            "Field reports from solar film installations show a 3 to 6°C drop in indoor temperature during summer, in rooms directly exposed to the sun — conservatories, glass roofs, and south- or west-facing façades leading the list.",
            "In the United States, the Department of Energy points in the same direction: window films can cut cooling-related energy use by up to 30%, by limiting solar heat gain through the glass — which, according to the same agency, accounts for roughly a third of a building's cooling load.",
          ],
        },
        {
          heading: 'Less air conditioning, lower costs',
          paragraphs: [
            "On buildings fitted with solar film, industry field data shows a 20 to 35% reduction in cooling-related energy consumption on the treated façades. In France, this type of solution is in fact recognised by ADEME (the French ecological transition agency) as an effective and cost-efficient way to reduce a building's cooling energy consumption.",
            "Unlike an air conditioner, the film has zero running cost once installed: no electricity, no maintenance, no filter to replace. It's a one-off investment, not a bill that comes back every summer month.",
          ],
        },
        {
          heading: 'Film, AC, or fan: what\'s the fundamental difference?',
          paragraphs: [
            "A fan only moves the hot air already inside the room — it doesn't reduce the heat still coming in through the glass. An air conditioner actively cools the air, but consumes electricity continuously and has to keep fighting heat that never stops coming in.",
            "Window film acts upstream: it reduces the amount of solar heat passing through the glass in the first place. Less heat coming in means less work for an existing air conditioner (and so less consumption) — or simply a more liveable room without switching anything on at all.",
          ],
        },
        {
          heading: "Isn't that wasted effort come winter?",
          paragraphs: [
            "No — the film also helps retain indoor heat in winter, by limiting heat loss through the glazing. It's an investment that works year-round, not just during summer heat peaks.",
          ],
        },
        {
          heading: 'Does window film fully replace air conditioning?',
          paragraphs: [
            "Not necessarily in the most extreme cases, but it sharply reduces the need for it. Many of our clients find that a room that used to be unbearable in summer becomes comfortable again, without needing to install or switch on an air conditioner.",
          ],
        },
        {
          heading: 'Does the film work as well as a fan?',
          paragraphs: [
            "They're not really comparable: a fan circulates the hot air already present, without reducing the heat still coming in. The film acts before heat enters the room at all — the two don't solve the same problem.",
          ],
        },
        {
          heading: 'Does the film have any maintenance or running costs?',
          paragraphs: [
            'No. Unlike an air conditioner, the film uses no electricity and requires no regular maintenance once installed.',
          ],
        },
        {
          heading: 'Does this work on all types of glazing?',
          paragraphs: [
            'Our films are compatible with single and double glazing. Since every project is different, we always draw up a free, personalised quote after assessing your situation.',
          ],
        },
        {
          heading: 'How long does installation take?',
          paragraphs: [
            "Installation is carried out by our partner installer directly at your home, in a single visit. The exact duration depends on the number and size of the windows involved — we'll confirm this in your quote.",
          ],
        },
        {
          heading: 'Sources',
          paragraphs: [
            'U.S. Department of Energy / Office of Scientific and Technical Information — study on energy-control window films: osti.gov/servlets/purl/1089147',
            'Wonderglass — Le film solaire : moins de clim, plus d\'économies (field data, referencing ADEME, the French ecological transition agency): wonderglass.fr/blog/le-film-solaire-moins-de-clim-plus-deconomie',
          ],
        },
      ],
    },
  ],
};
