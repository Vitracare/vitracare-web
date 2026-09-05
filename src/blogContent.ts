export type BlogSection = {
  heading?: string;
  anchor?: string;
  paragraphs: string[];
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  excerpt: string;
  sections: BlogSection[];
  faq: BlogFaqItem[];
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
          heading: 'La teinte effet miroir',
          anchor: 'miroir',
          paragraphs: [
            "La teinte effet miroir est la solution la plus radicale en matière d'intimité. Posé sur vos vitrages, il crée un effet miroir sans tain qui empêche totalement la vue depuis l'extérieur pendant la journée, tout en vous laissant profiter d'une vue dégagée depuis l'intérieur. C'est le choix idéal pour une maison exposée à la rue, un rez-de-chaussée, ou une grande baie vitrée donnant sur un jardin visible des voisins.",
            "Au-delà de l'intimité, ce film bloque jusqu'à 99% des rayons UV — un niveau de protection reconnu par l'[International Window Film Association](https://iwfa.com/benefits-of-window-film/uv-protection/) pour les films de qualité — et réduit considérablement la chaleur qui entre par vos fenêtres — un vrai plus en été.",
            "Un point à connaître : l'effet miroir fonctionne uniquement de jour. La nuit, si votre intérieur est éclairé et qu'il fait sombre dehors, l'effet s'inverse, comme pour n'importe quelle vitre. C'est le fonctionnement normal de ce type de film, à garder en tête selon les pièces où vous l'installez.",
          ],
        },
        {
          heading: 'La teinte solaire',
          anchor: 'solaire',
          paragraphs: [
            "Si votre priorité est le confort thermique plutôt que l'intimité totale, la teinte solaire est le film le plus adapté. Contrairement au film miroir, elle reste transparente — on continue à voir clairement au travers, dans les deux sens.",
            "Son rôle principal : réduire la chaleur et les UV qui entrent dans la maison, pour un confort optimal en été sans devoir fermer les volets ou installer une climatisation. C'est une solution particulièrement appréciée dans les pièces de vie très exposées au soleil, ou pour protéger un salon plein sud qui devient difficilement vivable l'après-midi.",
          ],
        },
        {
          heading: 'La teinte blanc mat',
          anchor: 'mat',
          paragraphs: [
            "La teinte blanc mat répond à un besoin différent : une intimité totale, mais dans les deux sens — depuis l'intérieur comme depuis l'extérieur, de jour comme de nuit. Contrairement au film miroir, son fonctionnement ne dépend pas de la luminosité.",
            "C'est le choix le plus adapté pour une salle de bain, une verrière, une porte d'entrée vitrée, ou toute pièce où vous voulez laisser entrer la lumière sans jamais être visible. Il apporte aussi un rendu esthétique épuré et élégant, très apprécié sur les façades contemporaines.",
          ],
        },
        {
          heading: 'Le film anti-effraction',
          anchor: 'anti-effraction',
          paragraphs: [
            "Le film anti-effraction répond à un besoin différent des trois précédents : il est totalement transparent et ne change rien à l'apparence de votre vitrage. Sa fonction n'est pas l'intimité, mais la sécurité.",
            "Son principe est simple : en cas de choc (tentative d'effraction avec un objet contondant, par exemple), le verre se fissure mais les éclats restent collés au film au lieu de se détacher et de tomber. Le cambrioleur ne peut donc plus simplement pousser ou dégager la vitre brisée — il doit s'acharner beaucoup plus longtemps pour se frayer un passage. Le film n'empêche pas une effraction déterminée, mais il la ralentit fortement, ce qui laisse davantage de temps pour réagir ou pour que les secours interviennent.",
            "C'est une option particulièrement pertinente pour les maisons isolées ou peu passantes, ou pour toute vitre au rez-de-chaussée facilement accessible depuis l'extérieur.",
          ],
        },
        {
          heading: 'Comment choisir ?',
          paragraphs: [
            "En résumé : vous voulez une intimité totale de jour, sans perdre la vue depuis l'intérieur → la teinte effet miroir. Votre priorité est de réduire la chaleur sans perdre en transparence → la teinte solaire. Vous cherchez une intimité totale à toute heure, avec un rendu mat élégant → la teinte blanc mat. Votre priorité est la sécurité plutôt que l'intimité ou la chaleur → le film anti-effraction.",
            "Ces quatre films sont compatibles avec du simple, double ou triple vitrage, et peuvent être combinés entre eux sur un même projet.",
          ],
        },
        {
          heading: 'Pose et durée de vie',
          paragraphs: [
            "Quel que soit le film choisi, la pose est réalisée par notre installateur partenaire, toujours à l'intérieur du vitrage — ce qui garantit une durée de vie optimale, jusqu'à 10 ans. La pose est couverte par une garantie de deux ans.",
            "Chaque projet est différent : la surface, le type de vitrage et vos besoins spécifiques influencent le choix final. C'est pourquoi nous établissons toujours un devis personnalisé, gratuit et sans engagement.",
            "Un point d'entretien important : une fois le film posé, la vitre ne doit plus être nettoyée avec un produit chimique classique (type nettoyant vitres du commerce), au risque d'abîmer le film. Un nettoyage à l'eau et au savon doux suffit amplement. Pendant le mois qui suit la pose, évitez également de nettoyer ou de toucher la vitre : c'est le temps nécessaire au film pour adhérer complètement. De petites bulles d'air éventuellement visibles au début disparaissent d'elles-mêmes durant cette période, la chaleur et le soleil aidant le film à se fixer définitivement.",
            "Un petit avantage indirect de la pose : la vitre est nettoyée avant l'application du film, ce qui laisse cette face impeccable une fois le chantier terminé.",
          ],
        },
        {
          heading: 'Sources',
          paragraphs: [
            '[International Window Film Association — protection contre les UV](https://iwfa.com/benefits-of-window-film/uv-protection/)',
          ],
        },
        {
          heading: 'Vous hésitez encore ?',
          paragraphs: [
            "Contactez-nous, nous vous conseillons gratuitement selon votre projet et vous répondons sous 24h.",
          ],
        },
      ],
      faq: [
        {
          question: 'Le film se pose-t-il à l\'intérieur ou à l\'extérieur du vitrage ?',
          answer: "Toujours à l'intérieur. C'est ce qui protège le film des intempéries et des lavages de vitres, et qui garantit sa durée de vie — jusqu'à 10 ans.",
        },
        {
          question: 'Le film abîme-t-il la vue vers l\'extérieur ?',
          answer: "Non, ni le film effet miroir ni la teinte solaire ne dégradent la vue depuis l'intérieur — elle reste nette et dégagée. Seul le film blanc mat floute la vue, dans les deux sens, puisque c'est justement sa fonction.",
        },
        {
          question: 'Puis-je combiner plusieurs films différents dans la même maison ?',
          answer: "Oui, c'est même très courant : un film miroir pour le rez-de-chaussée exposé à la rue, une teinte solaire pour le salon plein sud, et un blanc mat pour la salle de bain, par exemple. Chaque pièce peut avoir la solution la plus adaptée à son usage.",
        },
        {
          question: 'Le film anti-effraction empêche-t-il vraiment un cambriolage ?',
          answer: "Non, aucun film ne rend une vitre incassable. Il ralentit fortement une tentative d'effraction en retenant les éclats de verre au lieu de les laisser tomber, ce qui complique et retarde le passage du cambrioleur — un délai souvent décisif.",
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
            "Les retours de terrain sur des installations de films solaires font état d'une baisse de 3 à 6°C de la température intérieure en été, dans les pièces directement exposées au soleil — vérandas, toits vitrés, façades sud ou ouest en tête de liste. Aux États-Unis, le [Department of Energy](https://www.osti.gov/servlets/purl/1089147) (le ministère fédéral de l'énergie) va dans le même sens : les films pour vitrage permettent de réduire la consommation liée au refroidissement jusqu'à 30 %, en limitant l'apport de chaleur solaire à travers le verre — responsable, selon la même étude, d'environ un tiers de la charge de climatisation d'un bâtiment. Concrètement, cela signifie qu'une pièce difficilement supportable en début d'après-midi peut redevenir vivable simplement en réduisant l'apport de chaleur à la source, avant qu'elle n'entre dans la pièce.",
          ],
        },
        {
          heading: 'Moins de climatisation, moins de dépenses',
          paragraphs: [
            "Sur des bâtiments équipés de films solaires, les retours d'expérience du secteur font état d'une réduction de 20 à 35 % de la consommation liée à la climatisation sur les façades traitées, selon les données compilées par [Wonderglass](https://www.wonderglass.fr/blog/le-film-solaire-moins-de-clim-plus-deconomie), qui s'appuient notamment sur les recommandations de l'ADEME (l'agence française de la transition écologique). Contrairement à un climatiseur, le film n'a aucun coût de fonctionnement une fois posé : pas d'électricité, pas d'entretien, pas de filtre à changer. Sur la durée, cela change la nature même de la dépense : au lieu d'un poste récurrent qui grimpe avec le prix de l'électricité, la protection solaire devient un investissement réalisé une seule fois, dont le bénéfice se répète chaque été sans coût additionnel.",
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
          heading: 'Sources',
          paragraphs: [
            '[U.S. Department of Energy / Office of Scientific and Technical Information — étude sur les films de vitrage à contrôle énergétique](https://www.osti.gov/servlets/purl/1089147)',
            '[Wonderglass — Le film solaire : moins de clim, plus d\'économies (données terrain, référence à l\'ADEME)](https://www.wonderglass.fr/blog/le-film-solaire-moins-de-clim-plus-deconomie)',
          ],
        },
      ],
      faq: [
        {
          question: 'Et en hiver, ce n\'est pas du gaspillage ?',
          answer: "Non — le film aide aussi à conserver la chaleur à l'intérieur en hiver, en limitant la déperdition à travers le vitrage. C'est un investissement qui travaille toute l'année, pas seulement pendant les pics de chaleur estivaux.",
        },
        {
          question: 'Le film pour vitrage remplace-t-il complètement la climatisation ?',
          answer: "Pas nécessairement dans les cas les plus extrêmes, mais il réduit fortement le besoin. Beaucoup de nos clients constatent qu'une pièce auparavant invivable en été redevient confortable sans avoir besoin d'installer ou d'allumer un climatiseur.",
        },
        {
          question: 'Le film fonctionne-t-il aussi bien qu\'un ventilateur ?',
          answer: "Ce n'est pas comparable : un ventilateur brasse l'air chaud déjà présent, sans réduire la chaleur qui continue d'entrer. Le film agit avant que la chaleur n'entre dans la pièce — les deux ne résolvent pas le même problème.",
        },
        {
          question: 'Le film a-t-il un coût d\'entretien ou de fonctionnement ?',
          answer: "Non. Contrairement à un climatiseur, le film ne consomme aucune électricité et ne nécessite aucun entretien régulier une fois posé.",
        },
        {
          question: 'Est-ce que ça fonctionne sur tous les types de vitrage ?',
          answer: "Nos films sont compatibles avec le simple et le double vitrage. Chaque projet étant différent, nous établissons toujours un devis personnalisé et gratuit après avoir évalué votre situation.",
        },
        {
          question: 'Combien de temps dure l\'installation ?',
          answer: "La pose est réalisée par notre installateur partenaire directement chez vous, en une seule intervention. La durée exacte dépend du nombre et de la taille des vitrages concernés — nous vous la précisons dans votre devis.",
        },
      ],
    },
    {
      slug: 'intimite-vis-a-vis-film-vitrage',
      title: 'Vis-à-vis, rez-de-chaussée, bureaux : comment garder son intimité sans vivre volets fermés ?',
      metaTitle: 'Film pour vitrage et intimité : la solution au vis-à-vis',
      metaDescription:
        "Rez-de-chaussée, vis-à-vis entre voisins, bureaux exposés à la rue : comment profiter de la lumière naturelle sans être vu depuis l'extérieur ? Voici comment le film pour vitrage change la donne.",
      date: '2026-08-27',
      excerpt:
        "Vivre en ville, c'est souvent choisir entre lumière naturelle et intimité. Le film pour vitrage permet d'avoir les deux, sans fermer un seul volet.",
      sections: [
        {
          paragraphs: [
            "Rideaux tirés en pleine journée, volets qui ne se rouvrent jamais complètement, salon qu'on évite de traverser en pyjama : le vis-à-vis fait partie du quotidien de beaucoup de foyers en ville. La solution la plus courante — fermer — a un coût direct : moins de lumière naturelle, une maison plus sombre, une pièce qu'on finit par déserter. Le film pour vitrage propose une autre approche : garder les fenêtres dégagées, tout en empêchant qu'on puisse voir à l'intérieur.",
          ],
        },
        {
          heading: 'Le vis-à-vis, une réalité du quotidien en ville',
          paragraphs: [
            "Maisons mitoyennes, rez-de-chaussée qui donnent directement sur le trottoir, appartements qui se font face de part et d'autre d'une cour intérieure, bureaux au rez-de-chaussée visibles depuis la rue : la densité du bâti bruxellois multiplie les situations où on est vu, qu'on le veuille ou non. Le réflexe naturel est de fermer — rideaux, voilages, volets — mais cette solution ferme aussi la lumière, et avec elle, une partie du confort de vie dans la pièce.",
          ],
        },
        {
          heading: 'Voir sans être vu : le principe',
          paragraphs: [
            "Le film effet miroir repose sur un principe optique simple : la lumière. En journée, l'extérieur est toujours plus lumineux que l'intérieur d'une pièce. Le film reflète cette lumière côté extérieur, ce qui crée un effet miroir empêchant la vue de l'intérieur — pendant que depuis chez vous, la vue reste dégagée, comme à travers une vitre classique.",
            "Un point important à connaître : cet effet fonctionne uniquement tant que l'extérieur reste plus lumineux que l'intérieur, donc en journée. Le soir, une fois la lumière allumée chez vous et la nuit tombée dehors, l'effet s'inverse — comme pour n'importe quelle fenêtre éclairée dans le noir. C'est un point à garder en tête selon les pièces et les horaires concernés.",
          ],
        },
        {
          heading: 'Rez-de-chaussée : reprendre possession de son salon',
          paragraphs: [
            "Pour un rez-de-chaussée donnant sur la rue, le film effet miroir permet de laisser passer la lumière toute la journée sans jamais fermer un rideau, tout en étant certain que personne ne peut voir à l'intérieur depuis le trottoir. C'est souvent la différence entre une pièce qu'on n'utilise qu'en soirée, volets fermés, et un salon qui redevient vivable en journée.",
          ],
        },
        {
          heading: 'Bureaux et commerces : rester visible sans être exposé',
          paragraphs: [
            "Pour un bureau ou un espace professionnel en rez-de-chaussée, la vitrine est souvent un atout — mais elle expose aussi tout ce qui se passe à l'intérieur : réunions, poste de travail, documents. Le film pour vitrage permet de garder une façade vitrée engageante depuis l'extérieur, tout en travaillant à l'abri des regards.",
          ],
        },
        {
          heading: 'Vis-à-vis entre voisins : plus besoin de rideaux fermés en permanence',
          paragraphs: [
            "Dans un immeuble ou une cour intérieure où les fenêtres se font face, le réflexe est souvent de garder les voilages fermés en continu — au détriment de la lumière naturelle. Avec un film sur les vitrages concernés, les fenêtres restent dégagées en journée, sans que les voisins d'en face ne puissent voir à l'intérieur.",
          ],
        },
        {
          heading: 'Le film blanc mat : l\'intimité totale, jour et nuit',
          paragraphs: [
            "Pour une pièce où l'intimité doit être garantie à toute heure — une salle de bain, une chambre au rez-de-chaussée, une porte d'entrée vitrée — le film effet miroir n'est pas la solution la plus adaptée, puisqu'il ne fonctionne que de jour. Le film blanc mat, lui, bloque la vue dans les deux sens, jour et nuit, quelle que soit la luminosité de chaque côté. Il laisse entrer la lumière tout en garantissant une intimité constante.",
          ],
        },
        {
          heading: 'Vous hésitez encore ?',
          paragraphs: [
            "Contactez-nous, nous vous conseillons gratuitement selon votre situation et vous répondons sous 24h.",
          ],
        },
      ],
      faq: [
        {
          question: 'Est-ce que ça marche la nuit aussi ?',
          answer: "Le film effet miroir fonctionne uniquement de jour, quand l'extérieur est plus lumineux que l'intérieur. La nuit, si vos lumières sont allumées, l'effet s'inverse. Pour une intimité garantie à toute heure, le film blanc mat est la solution adaptée : son fonctionnement ne dépend pas de la luminosité.",
        },
        {
          question: 'Est-ce que je vois moins bien vers l\'extérieur avec le film posé ?',
          answer: "Avec le film effet miroir ou la teinte solaire, la vue depuis l'intérieur reste claire et dégagée — seul le regard depuis l'extérieur est bloqué. Le film blanc mat, en revanche, floute la vue dans les deux sens : c'est le compromis nécessaire pour une intimité totale à toute heure.",
        },
        {
          question: 'Est-ce adapté pour un appartement en copropriété ?',
          answer: "Le film est posé côté intérieur du vitrage et ne modifie pas l'aspect extérieur du bâtiment. Selon les copropriétés, un simple avertissement à l'assemblée ou au syndic peut néanmoins être requis avant travaux — nous vous recommandons de vérifier le règlement de copropriété au cas où.",
        },
        {
          question: 'Le film remplace-t-il complètement les rideaux et volets ?',
          answer: "Il réduit fortement le besoin de les fermer en journée, notamment avec le film effet miroir ou blanc mat. La nuit, pour l'intimité ou l'isolation thermique, beaucoup de nos clients continuent à utiliser rideaux ou volets en complément.",
        },
        {
          question: 'Combien de temps dure la pose ?',
          answer: "La pose est réalisée par notre installateur partenaire directement chez vous, en une seule intervention. La durée dépend du nombre et de la taille des vitrages concernés — nous vous la précisons dans votre devis.",
        },
      ],
    },
    {
      slug: 'remplacer-fenetres-ou-film-vitrage',
      title: 'Remplacer ses fenêtres ou poser un film sur ses vitrages : quelle solution choisir ?',
      metaTitle: 'Remplacer ses fenêtres ou film pour vitrage ? — VitraCare',
      metaDescription:
        "Fenêtres à remplacer ou film sur vitrage existant : coût, durée de vie et réversibilité comparés, pour choisir la solution adaptée à votre projet.",
      date: '2026-09-05',
      excerpt:
        "Remplacer ses fenêtres coûte cher et prend du temps. Le film pour vitrage est-il une alternative sérieuse ? Voici un comparatif honnête, chiffres à l'appui.",
      sections: [
        {
          paragraphs: [
            "Vos fenêtres laissent trop entrer la chaleur, les UV, ou le regard des passants, et vous hésitez entre les remplacer complètement ou poser un film sur le vitrage existant ? Les deux solutions répondent au même problème, mais pas de la même manière, ni au même prix. Voici un comparatif honnête pour vous aider à choisir.",
          ],
        },
        {
          heading: 'Remplacer ses fenêtres : une solution durable, mais coûteuse',
          paragraphs: [
            "Remplacer un vitrage simple par du double ou triple vitrage reste la solution la plus complète sur le long terme : elle améliore l'isolation thermique et phonique de fond en comble, et dure plusieurs décennies. En Belgique, comptez généralement entre 150 et 300 €/m² pour un double vitrage standard posé, et jusqu'à 400 €/m² pour une version haute performance (faible émissivité, gaz argon). Pour une maison avec 5 fenêtres et 8 m² de vitrage, le remplacement complet peut ainsi représenter environ 2000 € hors TVA, selon les estimations du secteur.",
            "Cette solution est irréversible une fois posée, et implique un vrai chantier : démontage, nouveau châssis ou nouveau vitrage intégré, plusieurs jours d'intervention selon le nombre de fenêtres.",
          ],
        },
        {
          heading: 'Le film pour vitrage : rapide, réversible, et bien moins cher',
          paragraphs: [
            "Le film pour vitrage se pose directement sur vos fenêtres existantes, sans démontage ni remplacement du vitrage. Le coût se situe généralement entre 8 et 80 €/m² selon le type de film, soit une fraction du prix d'un remplacement complet. L'intervention se fait en une seule visite, sans gros œuvre.",
            "Autre avantage : le film est entièrement réversible. Si vos fenêtres sont encore en bon état, il n'y a aucune raison de les remplacer simplement pour gagner en confort thermique, en intimité ou en protection UV — le film répond au même besoin sans les inconvénients d'un chantier lourd.",
          ],
        },
        {
          heading: 'Ce que chaque solution ne fait pas',
          paragraphs: [
            "Le film ne remplace pas un vitrage défectueux : s'il y a de la condensation entre les parois d'un double vitrage, une fenêtre qui ferme mal, ou un simple vitrage très ancien mal isolé, c'est le signe qu'un remplacement est nécessaire, pas qu'un film suffira.",
            "À l'inverse, remplacer ses fenêtres uniquement pour gagner en intimité ou réduire la chaleur, alors qu'elles sont encore fonctionnelles, représente une dépense difficile à justifier quand un film résout le même problème pour une fraction du prix.",
          ],
        },
        {
          heading: 'Les deux solutions sont compatibles',
          paragraphs: [
            "Vous venez de faire remplacer vos fenêtres et cherchez en plus de l'intimité ou une protection solaire renforcée ? Le film se pose aussi bien sur du simple, double que triple vitrage neuf. Beaucoup de nos clients l'utilisent justement en complément d'un vitrage récent, pour ajouter une fonction (intimité, effet miroir, anti-effraction) que le vitrage seul n'apporte pas.",
          ],
        },
        {
          heading: 'Sources',
          paragraphs: [
            '[Comparatif film solaire vs vitrage à contrôle solaire — Batimaz](https://batimaz.fr/film-solaire-vs-verre-controle-solaire-cout-performance-reversibilite/)',
            '[Prix pour changer une fenêtre en Belgique — Trustup](https://blog.trustup.be/fr/prix-changer-fenetres/)',
          ],
        },
        {
          heading: 'Vous hésitez encore ?',
          paragraphs: [
            "Contactez-nous, nous vous conseillons gratuitement selon votre projet et vous répondons sous 24h.",
          ],
        },
      ],
      faq: [
        {
          question: 'Le film pour vitrage fonctionne-t-il sur du double ou triple vitrage neuf ?',
          answer: "Oui, sans problème. Le film se pose côté intérieur de n'importe quel type de vitrage — simple, double ou triple — qu'il soit ancien ou tout juste installé.",
        },
        {
          question: 'Le film peut-il remplacer un vitrage à contrôle solaire intégré ?',
          answer: "Il répond au même besoin (réduire la chaleur et les UV) mais pas de la même manière : le vitrage à contrôle solaire est intégré à la fabrication de la fenêtre et dure aussi longtemps qu'elle, alors que le film se pose après coup et se remplace plus facilement, pour un coût de départ bien inférieur.",
        },
        {
          question: 'Combien de temps dure un film pour vitrage comparé à un remplacement de fenêtre ?',
          answer: "Le film dure généralement jusqu'à 10 ans, contre plusieurs décennies pour un vitrage remplacé. En contrepartie, son coût de départ est nettement inférieur, et il peut être remplacé sans toucher à la fenêtre elle-même.",
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
          anchor: 'miroir',
          paragraphs: [
            "De spiegeleffect folie is de meest radicale oplossing op het gebied van privacy. Geplaatst op uw beglazing creëert ze een spiegeleffect zonder tain dat overdag elk zicht van buitenaf volledig blokkeert, terwijl u vanbinnen gewoon van een vrij uitzicht blijft genieten. Dit is de ideale keuze voor een huis aan de straatkant, een gelijkvloers, of een grote raampartij met zicht op een tuin die zichtbaar is voor de buren.",
            "Naast privacy blokkeert deze folie tot 99% van de UV-stralen — een beschermingsniveau erkend door de [International Window Film Association](https://iwfa.com/benefits-of-window-film/uv-protection/) voor kwaliteitsfolies — en vermindert ze aanzienlijk de warmte die via uw ramen binnenkomt — een echte troef in de zomer.",
            "Een aandachtspunt: het spiegeleffect werkt enkel overdag. 's Nachts, wanneer uw interieur verlicht is en het buiten donker is, keert het effect om, zoals bij elk ander raam. Dit is de normale werking van dit type folie, houd hier rekening mee afhankelijk van de kamer waarin u ze plaatst.",
          ],
        },
        {
          heading: 'Zonwerende folie',
          anchor: 'solaire',
          paragraphs: [
            "Als uw prioriteit eerder thermisch comfort is dan volledige privacy, is de zonwerende folie de meest geschikte keuze. In tegenstelling tot de spiegelfolie blijft ze transparant — u blijft duidelijk doorheen kijken, in beide richtingen.",
            "Haar belangrijkste rol: de warmte en UV-stralen die het huis binnenkomen verminderen, voor optimaal comfort in de zomer zonder de rolluiken te moeten sluiten of airconditioning te installeren. Een oplossing die vooral gewaardeerd wordt in leefruimtes die sterk aan de zon blootgesteld zijn, of om een zuidgerichte woonkamer te beschermen die 's namiddags moeilijk leefbaar wordt.",
          ],
        },
        {
          heading: 'Matwitte folie',
          anchor: 'mat',
          paragraphs: [
            "De matwitte folie beantwoordt aan een andere behoefte: volledige privacy, maar in beide richtingen — van binnenuit zoals van buitenaf, dag en nacht. In tegenstelling tot de spiegelfolie hangt haar werking niet af van het lichtniveau.",
            "Dit is de meest geschikte keuze voor een badkamer, een veranda, een glazen voordeur, of elke ruimte waar u licht wilt binnenlaten zonder ooit zichtbaar te zijn. Ze zorgt ook voor een strak en elegant esthetisch resultaat, erg gewaardeerd op hedendaagse gevels.",
          ],
        },
        {
          heading: 'Inbraakwerende folie',
          anchor: 'anti-effraction',
          paragraphs: [
            "De inbraakwerende folie beantwoordt aan een andere behoefte dan de vorige drie: ze is volledig transparant en verandert niets aan het uitzicht van uw beglazing. Haar functie is niet privacy, maar veiligheid.",
            "Het principe is eenvoudig: bij een schok (bijvoorbeeld een inbraakpoging met een hard voorwerp) barst het glas, maar de scherven blijven aan de folie kleven in plaats van los te komen en te vallen. De inbreker kan de gebroken ruit dus niet zomaar wegduwen of verwijderen — hij moet veel langer volharden om zich een doorgang te banen. De folie voorkomt geen vastberaden inbraak, maar vertraagt ze sterk, wat meer tijd geeft om te reageren of voor de hulpdiensten om tussen te komen.",
            "Dit is een bijzonder relevante optie voor afgelegen of rustig gelegen woningen, of voor elk gemakkelijk bereikbaar raam op het gelijkvloers.",
          ],
        },
        {
          heading: 'Hoe kiezen?',
          paragraphs: [
            "Samengevat: u wilt overdag volledige privacy, zonder het zicht van binnenuit te verliezen → de spiegeleffect folie. Uw prioriteit is warmte verminderen zonder transparantie te verliezen → de zonwerende folie. U zoekt volledige privacy op elk moment, met een elegante matte afwerking → de matwitte folie. Uw prioriteit is veiligheid eerder dan privacy of warmte → de inbraakwerende folie.",
            "Deze vier folies zijn compatibel met enkel, dubbel of drievoudig glas, en kunnen onderling gecombineerd worden binnen hetzelfde project.",
          ],
        },
        {
          heading: 'Plaatsing en levensduur',
          paragraphs: [
            "Ongeacht de gekozen folie wordt de plaatsing uitgevoerd door onze partnerinstallateur, steeds aan de binnenzijde van het glas — wat een optimale levensduur garandeert, tot 10 jaar. De plaatsing wordt gedekt door een garantie van twee jaar.",
            "Elk project is anders: de oppervlakte, het type beglazing en uw specifieke behoeften bepalen de uiteindelijke keuze. Daarom stellen we altijd een gepersonaliseerde offerte op, gratis en vrijblijvend.",
            "Een belangrijk onderhoudspunt: eenmaal de folie geplaatst is, mag het raam niet meer gereinigd worden met een klassiek chemisch product (zoals gewone glasreiniger), want dit kan de folie beschadigen. Reinigen met water en een milde zeep volstaat ruimschoots. Vermijd ook gedurende de maand na de plaatsing om het raam te reinigen of aan te raken: dit is de tijd die de folie nodig heeft om volledig te hechten. Eventuele kleine luchtbelletjes die in het begin zichtbaar zijn, verdwijnen tijdens deze periode vanzelf, doordat warmte en zonlicht de folie helpen definitief te fixeren.",
            "Een bijkomend voordeel van de plaatsing: het raam wordt gereinigd vóór het aanbrengen van de folie, waardoor deze zijde na afloop van de werken perfect proper is.",
          ],
        },
        {
          heading: 'Bronnen',
          paragraphs: [
            '[International Window Film Association — bescherming tegen UV-stralen](https://iwfa.com/benefits-of-window-film/uv-protection/)',
          ],
        },
        {
          heading: 'Twijfelt u nog?',
          paragraphs: [
            'Neem contact met ons op, we adviseren u gratis op basis van uw project en antwoorden binnen 24u.',
          ],
        },
      ],
      faq: [
        {
          question: 'Wordt de folie aan de binnen- of buitenzijde van het glas geplaatst?',
          answer: "Altijd aan de binnenzijde. Dit beschermt de folie tegen weersinvloeden en het reinigen van de ramen, en garandeert haar levensduur — tot 10 jaar.",
        },
        {
          question: 'Verslechtert de folie het zicht naar buiten?',
          answer: "Nee, noch de spiegeleffectfolie noch de zonwerende folie tast het zicht van binnenuit aan — dat blijft helder en vrij. Enkel de matwitte folie vertroebelt het zicht, in beide richtingen, aangezien dat net haar functie is.",
        },
        {
          question: 'Kan ik verschillende folies combineren in hetzelfde huis?',
          answer: "Ja, dit is zelfs heel gebruikelijk: spiegelfolie voor het gelijkvloers aan de straatkant, zonwerende folie voor de zuidgerichte woonkamer, en matwitte folie voor de badkamer, bijvoorbeeld. Elke ruimte kan de oplossing krijgen die het beste bij haar gebruik past.",
        },
        {
          question: 'Voorkomt de inbraakwerende folie echt een inbraak?',
          answer: "Nee, geen enkele folie maakt een raam onbreekbaar. Ze vertraagt een inbraakpoging sterk door de glasscherven vast te houden in plaats van ze te laten vallen, wat de doorgang van de inbreker bemoeilijkt en vertraagt — een vertraging die vaak doorslaggevend is.",
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
            "Terugkoppelingen van installaties met zonwerende folie tonen een daling van 3 tot 6°C van de binnentemperatuur in de zomer, in ruimtes die rechtstreeks aan de zon blootgesteld zijn — verandas, glazen daken, zuid- of westgevels op kop. In de Verenigde Staten wijst het [Department of Energy](https://www.osti.gov/servlets/purl/1089147) (het federale ministerie van energie) in dezelfde richting: raamfolie kan het energieverbruik voor koeling met tot 30% verminderen, door de zonnewarmte doorheen het glas te beperken — verantwoordelijk, volgens diezelfde studie, voor ongeveer een derde van de koellast van een gebouw. Concreet betekent dit dat een ruimte die 's namiddags amper leefbaar is, opnieuw comfortabel kan worden door de warmte al aan de bron te beperken, vóór ze de kamer binnenkomt.",
          ],
        },
        {
          heading: 'Minder airco, minder kosten',
          paragraphs: [
            "Bij gebouwen uitgerust met zonwerende folie tonen terugkoppelingen uit de sector een vermindering van 20 tot 35% van het koelverbruik op de behandelde gevels, volgens gegevens verzameld door [Wonderglass](https://www.wonderglass.fr/blog/le-film-solaire-moins-de-clim-plus-deconomie), die zich onder meer baseren op de aanbevelingen van ADEME (het Franse agentschap voor ecologische transitie). In tegenstelling tot een airco heeft de folie geen enkele werkingskost eenmaal geplaatst: geen elektriciteit, geen onderhoud, geen filter om te vervangen. Op termijn verandert dit de aard van de uitgave zelf: in plaats van een terugkerende kost die meestijgt met de elektriciteitsprijs, wordt de zonwering een eenmalige investering waarvan het voordeel zich elke zomer herhaalt zonder bijkomende kost.",
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
          heading: 'Bronnen',
          paragraphs: [
            '[U.S. Department of Energy / Office of Scientific and Technical Information — studie over energiebesparende raamfolies](https://www.osti.gov/servlets/purl/1089147)',
            '[Wonderglass — Le film solaire : moins de clim, plus d\'économies (praktijkgegevens, verwijzing naar ADEME)](https://www.wonderglass.fr/blog/le-film-solaire-moins-de-clim-plus-deconomie)',
          ],
        },
      ],
      faq: [
        {
          question: 'En is dit geen verspilling in de winter?',
          answer: "Nee — de folie helpt ook om warmte binnen te houden in de winter, door warmteverlies via de beglazing te beperken. Het is een investering die het hele jaar door werkt, niet enkel tijdens zomerse hittepieken.",
        },
        {
          question: 'Vervangt raamfolie de airco volledig?',
          answer: "Niet noodzakelijk in de meest extreme gevallen, maar de folie vermindert de nood sterk. Veel van onze klanten merken dat een ruimte die voorheen onleefbaar was in de zomer opnieuw comfortabel wordt, zonder een airco te moeten installeren of aanzetten.",
        },
        {
          question: 'Werkt de folie even goed als een ventilator?',
          answer: "Dat is niet vergelijkbaar: een ventilator verplaatst de warme lucht die al aanwezig is, zonder de binnenkomende warmte te verminderen. De folie grijpt in vóór de warmte de ruimte binnenkomt — beide lossen niet hetzelfde probleem op.",
        },
        {
          question: 'Heeft de folie onderhouds- of werkingskosten?',
          answer: 'Nee. In tegenstelling tot een airco verbruikt de folie geen elektriciteit en vereist ze geen regelmatig onderhoud eenmaal geplaatst.',
        },
        {
          question: 'Werkt dit op alle soorten beglazing?',
          answer: 'Onze folies zijn compatibel met enkel en dubbel glas. Aangezien elk project anders is, stellen we altijd een gepersonaliseerde en gratis offerte op na evaluatie van uw situatie.',
        },
        {
          question: 'Hoe lang duurt de installatie?',
          answer: 'De plaatsing gebeurt door onze partnerinstallateur rechtstreeks bij u thuis, in één interventie. De exacte duur hangt af van het aantal en de grootte van de betrokken vensters — we vermelden dit in uw offerte.',
        },
      ],
    },
    {
      slug: 'intimite-vis-a-vis-film-vitrage',
      title: 'Inkijk, gelijkvloers, kantoren: hoe bewaart u uw privacy zonder altijd de rolluiken te sluiten?',
      metaTitle: 'Raamfolie en privacy: de oplossing tegen inkijk',
      metaDescription:
        'Gelijkvloers, inkijk tussen buren, kantoren aan de straatkant: hoe geniet u van natuurlijk licht zonder van buitenaf gezien te worden? Raamfolie verandert de zaak.',
      date: '2026-08-27',
      excerpt:
        'Stadswonen betekent vaak kiezen tussen natuurlijk licht en privacy. Raamfolie biedt beide, zonder één rolluik te moeten sluiten.',
      sections: [
        {
          paragraphs: [
            "Gordijnen dicht midden op de dag, rolluiken die nooit helemaal opengaan, een woonkamer die je in pyjama liever vermijdt: inkijk hoort bij het dagelijks leven van veel gezinnen in de stad. De meest voorkomende oplossing — sluiten — heeft een directe kost: minder natuurlijk licht, een donkerder huis, een kamer die je uiteindelijk links laat liggen. Raamfolie biedt een andere aanpak: de ramen open houden, terwijl niemand naar binnen kan kijken.",
          ],
        },
        {
          heading: 'Inkijk, een dagelijkse realiteit in de stad',
          paragraphs: [
            "Rijwoningen, gelijkvloerse verdiepingen die rechtstreeks op het trottoir uitgeven, appartementen die elkaar aankijken over een binnenkoer, kantoren op het gelijkvloers zichtbaar vanaf de straat: de dichte bebouwing in Brussel vermenigvuldigt de situaties waarin u gezien wordt, of u dat nu wilt of niet. De natuurlijke reflex is sluiten — gordijnen, vitrages, rolluiken — maar deze oplossing sluit ook het licht buiten, en daarmee een deel van het wooncomfort in de kamer.",
          ],
        },
        {
          heading: 'Zien zonder gezien te worden: het principe',
          paragraphs: [
            "Spiegeleffectfolie berust op een eenvoudig optisch principe: licht. Overdag is het buiten altijd lichter dan binnen in een kamer. De folie weerkaatst dat licht langs de buitenkant, wat een spiegeleffect creëert dat het zicht van buitenaf blokkeert — terwijl u vanuit uw huis gewoon vrij zicht behoudt, zoals door een gewoon raam.",
          ],
        },
        {
          heading: 'Gelijkvloers: uw woonkamer terug innemen',
          paragraphs: [
            "Voor een gelijkvloerse verdieping aan de straatkant laat spiegeleffectfolie het licht de hele dag binnen zonder ooit een gordijn te moeten sluiten, terwijl niemand vanaf het trottoir naar binnen kan kijken. Vaak is dit het verschil tussen een kamer die u enkel 's avonds gebruikt, rolluiken dicht, en een woonkamer die overdag opnieuw leefbaar wordt.",
          ],
        },
        {
          heading: 'Kantoren en winkels: zichtbaar blijven zonder blootgesteld te zijn',
          paragraphs: [
            "Voor een kantoor of professionele ruimte op het gelijkvloers is de etalage vaak een troef — maar ze toont ook alles wat binnen gebeurt: vergaderingen, werkplekken, documenten. Raamfolie laat toe een uitnodigende glazen gevel te behouden vanaf buiten, terwijl u beschut van blikken werkt.",
          ],
        },
        {
          heading: 'Inkijk tussen buren: geen permanent gesloten vitrages meer nodig',
          paragraphs: [
            "In een gebouw of binnenkoer waar ramen elkaar aankijken, is de reflex vaak om de vitrages voortdurend dicht te houden — ten koste van het natuurlijk licht. Met folie op de betrokken ramen blijven de ramen overdag vrij, zonder dat de buren aan de overkant naar binnen kunnen kijken.",
          ],
        },
        {
          heading: 'Matwitte folie: volledige privacy, dag en nacht',
          paragraphs: [
            "Voor een ruimte waar privacy op elk moment gegarandeerd moet zijn — een badkamer, een slaapkamer op het gelijkvloers, een glazen voordeur — is spiegeleffectfolie niet de meest geschikte oplossing, aangezien ze enkel overdag werkt. Matwitte folie daarentegen blokkeert het zicht in beide richtingen, dag en nacht, ongeacht de lichtsterkte aan elke kant. Ze laat licht binnen terwijl ze constante privacy garandeert.",
          ],
        },
        {
          heading: 'Twijfelt u nog?',
          paragraphs: [
            'Neem contact met ons op, we adviseren u gratis op basis van uw situatie en antwoorden binnen 24u.',
          ],
        },
      ],
      faq: [
        {
          question: 'Werkt dit ook \'s nachts?',
          answer: "Een belangrijk punt: dit effect werkt enkel zolang het buiten lichter is dan binnen, dus overdag. 's Avonds, wanneer het licht bij u brandt en het buiten donker is, keert het effect om — zoals bij elk verlicht raam in het donker. Hou hier rekening mee, afhankelijk van de kamer en het tijdstip.",
        },
        {
          question: 'Zie ik minder goed naar buiten met de folie geplaatst?',
          answer: "Met spiegeleffectfolie of zonwerende folie blijft het zicht vanaf binnen helder en vrij — enkel het zicht vanaf buiten wordt geblokkeerd. Matwitte folie daarentegen vertroebelt het zicht in beide richtingen: dat is het noodzakelijke compromis voor volledige privacy op elk moment.",
        },
        {
          question: 'Is dit geschikt voor een appartement in mede-eigendom?',
          answer: "De folie wordt aan de binnenzijde van het glas geplaatst en verandert het uiterlijk van het gebouw niet. Afhankelijk van de mede-eigendom kan een eenvoudige melding aan de algemene vergadering of de syndicus toch vereist zijn — we raden aan het reglement van mede-eigendom na te kijken.",
        },
        {
          question: 'Vervangt de folie gordijnen en rolluiken volledig?',
          answer: "Ze vermindert sterk de nood om ze overdag te sluiten, vooral met spiegeleffectfolie of matwitte folie. 's Nachts, voor privacy of thermische isolatie, blijven veel van onze klanten gordijnen of rolluiken als aanvulling gebruiken.",
        },
        {
          question: 'Hoe lang duurt de plaatsing?',
          answer: 'De plaatsing gebeurt door onze partnerinstallateur rechtstreeks bij u thuis, in één interventie. De duur hangt af van het aantal en de grootte van de betrokken vensters — we vermelden dit in uw offerte.',
        },
      ],
    },
    {
      slug: 'remplacer-fenetres-ou-film-vitrage',
      title: 'Ramen vervangen of folie op uw beglazing plaatsen: wat kiezen?',
      metaTitle: 'Ramen vervangen of raamfolie? — VitraCare',
      metaDescription:
        'Ramen vervangen of folie op bestaande beglazing: kostprijs, levensduur en omkeerbaarheid vergeleken, om de juiste oplossing voor uw project te kiezen.',
      date: '2026-09-05',
      excerpt:
        'Ramen vervangen kost veel en duurt lang. Is raamfolie een serieus alternatief? Een eerlijke vergelijking, met cijfers.',
      sections: [
        {
          paragraphs: [
            'Uw ramen laten te veel warmte, UV-stralen of blikken van voorbijgangers binnen, en u twijfelt tussen ze volledig vervangen of folie plaatsen op de bestaande beglazing? Beide oplossingen pakken hetzelfde probleem aan, maar niet op dezelfde manier, en niet voor dezelfde prijs. Hier is een eerlijke vergelijking om u te helpen kiezen.',
          ],
        },
        {
          heading: 'Ramen vervangen: een duurzame maar dure oplossing',
          paragraphs: [
            'Enkel glas vervangen door dubbel of drievoudig glas blijft op lange termijn de meest complete oplossing: het verbetert de thermische en akoestische isolatie grondig, en gaat tientallen jaren mee. In België betaalt u doorgaans tussen 150 en 300 €/m² voor standaard dubbel glas geplaatst, en tot 400 €/m² voor een hoogperformante versie (lage emissiviteit, argongas). Voor een woning met 5 ramen en 8 m² beglazing kan de volledige vervanging zo ongeveer 2000 € exclusief btw bedragen, volgens schattingen uit de sector.',
            'Deze oplossing is onomkeerbaar eenmaal geplaatst, en vereist een echte werf: demontage, nieuw kozijn of nieuwe geïntegreerde beglazing, meerdere dagen werk afhankelijk van het aantal ramen.',
          ],
        },
        {
          heading: 'Raamfolie: snel, omkeerbaar, en veel goedkoper',
          paragraphs: [
            'Raamfolie wordt rechtstreeks op uw bestaande ramen geplaatst, zonder demontage of vervanging van de beglazing. De kostprijs ligt doorgaans tussen 8 en 80 €/m² afhankelijk van het type folie, dus een fractie van de prijs van een volledige vervanging. De interventie gebeurt in één bezoek, zonder grote werken.',
            'Nog een voordeel: de folie is volledig omkeerbaar. Als uw ramen nog in goede staat zijn, is er geen enkele reden om ze te vervangen enkel om thermisch comfort, privacy of UV-bescherming te winnen — de folie beantwoordt aan dezelfde behoefte zonder de nadelen van een zware werf.',
          ],
        },
        {
          heading: 'Wat elke oplossing niet doet',
          paragraphs: [
            'De folie vervangt geen defecte beglazing: als er condensatie zit tussen de wanden van een dubbel glas, een raam dat slecht sluit, of zeer oud enkel glas met slechte isolatie, is dat een teken dat vervanging nodig is, niet dat een folie zal volstaan.',
            'Omgekeerd is het vervangen van ramen enkel om privacy te winnen of warmte te verminderen, terwijl ze nog functioneel zijn, een uitgave die moeilijk te verantwoorden is wanneer een folie hetzelfde probleem oplost voor een fractie van de prijs.',
          ],
        },
        {
          heading: 'Beide oplossingen zijn compatibel',
          paragraphs: [
            'Heeft u net uw ramen laten vervangen en zoekt u bovendien meer privacy of extra zonwering? De folie wordt evengoed geplaatst op nieuw enkel, dubbel of drievoudig glas. Veel van onze klanten gebruiken ze net als aanvulling op recente beglazing, om een functie toe te voegen (privacy, spiegeleffect, inbraakwering) die de beglazing alleen niet biedt.',
          ],
        },
        {
          heading: 'Bronnen',
          paragraphs: [
            '[Vergelijking zonnefolie vs zonwerende beglazing — Batimaz](https://batimaz.fr/film-solaire-vs-verre-controle-solaire-cout-performance-reversibilite/)',
            '[Prijs om een raam te vervangen in België — Trustup](https://blog.trustup.be/fr/prix-changer-fenetres/)',
          ],
        },
        {
          heading: 'Twijfelt u nog?',
          paragraphs: [
            'Neem contact met ons op, we adviseren u gratis op basis van uw project en antwoorden binnen 24u.',
          ],
        },
      ],
      faq: [
        {
          question: 'Werkt raamfolie op nieuw dubbel of drievoudig glas?',
          answer: 'Ja, zonder probleem. De folie wordt aan de binnenzijde van eender welk type beglazing geplaatst — enkel, dubbel of drievoudig — of het nu oud is of net geïnstalleerd.',
        },
        {
          question: 'Kan folie een geïntegreerde zonwerende beglazing vervangen?',
          answer: 'Ze beantwoordt aan dezelfde behoefte (warmte en UV verminderen) maar niet op dezelfde manier: zonwerende beglazing is geïntegreerd bij de fabricage van het raam en gaat even lang mee, terwijl folie achteraf geplaatst wordt en makkelijker te vervangen is, voor een veel lagere startprijs.',
        },
        {
          question: 'Hoe lang gaat raamfolie mee vergeleken met het vervangen van een raam?',
          answer: 'Folie gaat doorgaans tot 10 jaar mee, tegenover meerdere decennia voor vervangen beglazing. Daartegenover staat een aanzienlijk lagere startprijs, en ze kan vervangen worden zonder het raam zelf aan te raken.',
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
          anchor: 'miroir',
          paragraphs: [
            "The mirror effect film is the most effective solution when it comes to privacy. Applied to your windows, it creates a one-way mirror effect that completely blocks the view from outside during the day, while you continue to enjoy a clear view from inside. It's the ideal choice for a house facing the street, a ground floor, or a large window overlooking a garden visible to neighbours.",
            "Beyond privacy, this film blocks up to 99% of UV rays — a protection level recognised by the [International Window Film Association](https://iwfa.com/benefits-of-window-film/uv-protection/) for quality films — and significantly reduces the heat entering through your windows — a real advantage in summer.",
            "One thing to know: the mirror effect only works during the day. At night, if your interior is lit and it's dark outside, the effect reverses, as with any window. This is normal behaviour for this type of film, worth keeping in mind depending on the room.",
          ],
        },
        {
          heading: 'Solar tint',
          anchor: 'solaire',
          paragraphs: [
            "If your priority is thermal comfort rather than total privacy, solar tint is the most suitable film. Unlike mirror film, it remains transparent — you can still see clearly through it, in both directions.",
            "Its main role: reducing the heat and UV entering the house, for optimal comfort in summer without having to close the shutters or install air conditioning. It's a solution particularly appreciated in living spaces heavily exposed to the sun, or to protect a south-facing living room that becomes hard to use in the afternoon.",
          ],
        },
        {
          heading: 'Matte white film',
          anchor: 'mat',
          paragraphs: [
            "Matte white film answers a different need: total privacy, in both directions — from inside as well as outside, day or night. Unlike mirror film, how it works doesn't depend on light levels.",
            "It's the best choice for a bathroom, a conservatory, a glazed front door, or any room where you want to let light in without ever being visible. It also gives a clean, elegant look that's very popular on contemporary façades.",
          ],
        },
        {
          heading: 'Anti-burglary film',
          anchor: 'anti-effraction',
          paragraphs: [
            "Anti-burglary film answers a different need from the previous three: it's completely transparent and changes nothing about how your windows look. Its purpose isn't privacy, but security.",
            "The principle is simple: on impact (for instance, a break-in attempt with a blunt object), the glass cracks but the shards stay stuck to the film instead of coming loose and falling. The intruder can no longer simply push through or clear the broken pane — they have to keep working much longer to force their way in. The film doesn't stop a determined break-in, but it slows it down significantly, giving more time to react or for help to arrive.",
            "This is a particularly relevant option for secluded or quiet homes, or for any easily accessible ground-floor window.",
          ],
        },
        {
          heading: 'How to choose?',
          paragraphs: [
            "In short: you want total daytime privacy without losing the view from inside → mirror effect film. Your priority is reducing heat without losing transparency → solar tint. You're looking for total privacy at any time, with an elegant matte finish → matte white film. Your priority is security rather than privacy or heat → anti-burglary film.",
            'All four films are compatible with single, double and triple glazing, and can be combined with each other on the same project.',
          ],
        },
        {
          heading: 'Installation and lifespan',
          paragraphs: [
            "Whichever film you choose, installation is carried out by our partner installer, always on the interior side of the glass — which guarantees an optimal lifespan of up to 10 years. Installation is covered by a two-year warranty.",
            'Every project is different: the surface area, type of glazing and your specific needs all influence the final choice. That\'s why we always draw up a personalised quote, free and with no obligation.',
            "One important care note: once the film is applied, the window must no longer be cleaned with a standard chemical glass cleaner, as this can damage the film. Cleaning with water and mild soap is more than enough. Also avoid cleaning or touching the window for the month following installation — this is the time the film needs to fully adhere. Any small air bubbles visible at first disappear on their own during this period, as heat and sunlight help the film set completely.",
            "A small side benefit of the installation: the window is cleaned before the film is applied, leaving that side spotless once the work is done.",
          ],
        },
        {
          heading: 'Sources',
          paragraphs: [
            '[International Window Film Association — UV protection](https://iwfa.com/benefits-of-window-film/uv-protection/)',
          ],
        },
        {
          heading: 'Still unsure?',
          paragraphs: [
            "Contact us — we'll advise you for free based on your project and reply within 24 hours.",
          ],
        },
      ],
      faq: [
        {
          question: 'Is the film applied to the inside or the outside of the glass?',
          answer: "Always on the inside. This protects the film from weather and window cleaning, and guarantees its lifespan — up to 10 years.",
        },
        {
          question: "Does the film reduce the view towards the outside?",
          answer: "No, neither mirror effect film nor solar tint affects the view from inside — it stays clear and unobstructed. Only matte white film blurs the view, in both directions, since that's precisely its purpose.",
        },
        {
          question: 'Can I combine different films within the same home?',
          answer: "Yes, it's actually very common: mirror film for a street-facing ground floor, solar tint for a south-facing living room, and matte white for the bathroom, for example. Each room can get the solution best suited to how it's used.",
        },
        {
          question: 'Does anti-burglary film really prevent a break-in?',
          answer: "No, no film makes a window unbreakable. It significantly slows down a break-in attempt by holding the glass shards together instead of letting them fall, which makes it harder and slower for an intruder to get through — a delay that's often decisive.",
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
            "Field reports from solar film installations show a 3 to 6°C drop in indoor temperature during summer, in rooms directly exposed to the sun — conservatories, glass roofs, and south- or west-facing façades leading the list. In the United States, the [Department of Energy](https://www.osti.gov/servlets/purl/1089147) points in the same direction: window films can cut cooling-related energy use by up to 30%, by limiting solar heat gain through the glass — which, according to the same study, accounts for roughly a third of a building's cooling load. In practical terms, that means a room that's barely bearable by early afternoon can become liveable again simply by cutting the heat off at the source, before it ever enters the room.",
          ],
        },
        {
          heading: 'Less air conditioning, lower costs',
          paragraphs: [
            "On buildings fitted with solar film, industry field data shows a 20 to 35% reduction in cooling-related energy consumption on the treated façades, according to figures compiled by [Wonderglass](https://www.wonderglass.fr/blog/le-film-solaire-moins-de-clim-plus-deconomie), which draw in part on recommendations from ADEME, the French ecological transition agency. Unlike an air conditioner, the film has zero running cost once installed: no electricity, no maintenance, no filter to replace. Over time, that changes the nature of the expense itself: instead of a recurring bill that climbs with electricity prices, solar protection becomes a one-off investment whose benefit repeats every summer at no extra cost.",
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
          heading: 'Sources',
          paragraphs: [
            '[U.S. Department of Energy / Office of Scientific and Technical Information — study on energy-control window films](https://www.osti.gov/servlets/purl/1089147)',
            '[Wonderglass — Le film solaire : moins de clim, plus d\'économies (field data, referencing ADEME, the French ecological transition agency)](https://www.wonderglass.fr/blog/le-film-solaire-moins-de-clim-plus-deconomie)',
          ],
        },
      ],
      faq: [
        {
          question: "Isn't that wasted effort come winter?",
          answer: "No — the film also helps retain indoor heat in winter, by limiting heat loss through the glazing. It's an investment that works year-round, not just during summer heat peaks.",
        },
        {
          question: 'Does window film fully replace air conditioning?',
          answer: "Not necessarily in the most extreme cases, but it sharply reduces the need for it. Many of our clients find that a room that used to be unbearable in summer becomes comfortable again, without needing to install or switch on an air conditioner.",
        },
        {
          question: 'Does the film work as well as a fan?',
          answer: "They're not really comparable: a fan circulates the hot air already present, without reducing the heat still coming in. The film acts before heat enters the room at all — the two don't solve the same problem.",
        },
        {
          question: 'Does the film have any maintenance or running costs?',
          answer: 'No. Unlike an air conditioner, the film uses no electricity and requires no regular maintenance once installed.',
        },
        {
          question: 'Does this work on all types of glazing?',
          answer: 'Our films are compatible with single and double glazing. Since every project is different, we always draw up a free, personalised quote after assessing your situation.',
        },
        {
          question: 'How long does installation take?',
          answer: "Installation is carried out by our partner installer directly at your home, in a single visit. The exact duration depends on the number and size of the windows involved — we'll confirm this in your quote.",
        },
      ],
    },
    {
      slug: 'intimite-vis-a-vis-film-vitrage',
      title: 'Overlooked from outside, ground floor, offices: how do you keep your privacy without living behind closed shutters?',
      metaTitle: 'Window Film for Privacy: The Fix for Being Overlooked',
      metaDescription:
        "Ground floor rooms, neighbours facing your windows, offices exposed to the street: how do you enjoy natural light without being seen from outside? Here's how window film changes the equation.",
      date: '2026-08-27',
      excerpt:
        "City living often means choosing between natural light and privacy. Window film gives you both, without closing a single shutter.",
      sections: [
        {
          paragraphs: [
            "Curtains drawn in the middle of the day, shutters that never fully open, a living room you avoid walking through in your pyjamas: being overlooked is part of daily life for many city households. The usual fix — closing up — comes with a real cost: less natural light, a darker home, a room you eventually stop using. Window film offers a different approach: keep the windows uncovered, while making it impossible to see inside.",
          ],
        },
        {
          heading: 'Being overlooked: a daily reality of city living',
          paragraphs: [
            "Terraced houses, ground-floor rooms opening straight onto the pavement, flats facing each other across a shared courtyard, ground-floor offices visible from the street: dense urban housing in Brussels multiplies the situations where you're seen, whether you want to be or not. The natural instinct is to close up — curtains, net curtains, shutters — but that also shuts out the light, and with it, part of the room's liveability.",
          ],
        },
        {
          heading: 'Seeing without being seen: how it works',
          paragraphs: [
            "Mirror effect film relies on a simple optical principle: light. During the day, the outside of a room is always brighter than the inside. The film reflects that light on the outside face, creating a mirror effect that blocks the view from outside — while from inside your home, the view stays just as clear as through an ordinary window.",
          ],
        },
        {
          heading: 'Ground floor: taking back your living room',
          paragraphs: [
            "For a ground-floor room facing the street, mirror effect film lets light in all day without ever closing a curtain, while guaranteeing no one can see inside from the pavement. It's often the difference between a room you only use in the evening with the shutters down, and a living room that becomes usable again during the day.",
          ],
        },
        {
          heading: 'Offices and shopfronts: staying visible without being exposed',
          paragraphs: [
            "For a ground-floor office or professional space, a glazed frontage is often an asset — but it also puts everything inside on display: meetings, workstations, documents. Window film lets you keep an inviting glass façade from the outside, while working away from prying eyes on the inside.",
          ],
        },
        {
          heading: "Overlooked by neighbours: no more permanently closed net curtains",
          paragraphs: [
            "In a building or courtyard where windows face each other, the usual reflex is to keep net curtains permanently closed — at the cost of natural light. With film applied to the windows concerned, they stay uncovered during the day, without neighbours across the way being able to see in.",
          ],
        },
        {
          heading: 'Matte white film: total privacy, day and night',
          paragraphs: [
            "For a room where privacy needs to be guaranteed at all times — a bathroom, a ground-floor bedroom, a glazed front door — mirror effect film isn't the best fit, since it only works during the day. Matte white film, on the other hand, blocks the view in both directions, day and night, regardless of the light level on either side. It lets light in while guaranteeing constant privacy.",
          ],
        },
        {
          heading: 'Still unsure?',
          paragraphs: [
            "Contact us — we'll advise you for free based on your situation and reply within 24 hours.",
          ],
        },
      ],
      faq: [
        {
          question: 'Does it work at night too?',
          answer: "One important thing to know: this effect only works as long as the outside is brighter than the inside — in other words, during the day. In the evening, once your lights are on and it's dark outside, the effect reverses, just like with any lit window at night. Worth keeping in mind depending on the room and the time of day.",
        },
        {
          question: 'Do I lose visibility looking outward with the film applied?',
          answer: "With mirror effect film or solar tint, the view from inside stays clear and unobstructed — only the view from outside is blocked. Matte white film, on the other hand, blurs the view in both directions: that's the necessary trade-off for total privacy at all times.",
        },
        {
          question: 'Is this suitable for a flat in a co-owned building?',
          answer: "The film is applied to the inside face of the glass and doesn't change the building's exterior appearance. Depending on the co-ownership rules, a simple notice to the general assembly or the building manager may still be required beforehand — we recommend checking your co-ownership regulations to be sure.",
        },
        {
          question: 'Does the film fully replace curtains and shutters?',
          answer: "It greatly reduces the need to close them during the day, especially with mirror effect or matte white film. At night, for privacy or thermal insulation, many of our clients still use curtains or shutters alongside it.",
        },
        {
          question: 'How long does installation take?',
          answer: "Installation is carried out by our partner installer directly at your home, in a single visit. The duration depends on the number and size of the windows involved — we'll confirm this in your quote.",
        },
      ],
    },
    {
      slug: 'remplacer-fenetres-ou-film-vitrage',
      title: 'Replace your windows or add film to your glazing: which should you choose?',
      metaTitle: 'Replace Windows or Add Window Film? — VitraCare',
      metaDescription:
        'Replacing windows or adding film to existing glazing: cost, lifespan and reversibility compared, to help you choose the right solution for your project.',
      date: '2026-09-05',
      excerpt:
        "Replacing windows is expensive and slow. Is window film a serious alternative? An honest, figures-based comparison.",
      sections: [
        {
          paragraphs: [
            "Your windows let in too much heat, UV rays, or prying eyes, and you're torn between replacing them entirely or adding film to the existing glazing? Both solutions address the same problem, but not in the same way, and not at the same price. Here's an honest comparison to help you choose.",
          ],
        },
        {
          heading: 'Replacing your windows: a durable but costly solution',
          paragraphs: [
            "Replacing single glazing with double or triple glazing remains the most complete long-term solution: it thoroughly improves thermal and acoustic insulation and lasts for decades. In Belgium, expect to pay generally between €150 and €300/m² for standard double glazing installed, and up to €400/m² for a high-performance version (low emissivity, argon gas). For a house with 5 windows and 8 m² of glazing, a full replacement can amount to around €2,000 excluding VAT, according to industry estimates.",
            'This solution is irreversible once installed, and involves real construction work: removal, a new frame or newly integrated glazing, several days of work depending on the number of windows.',
          ],
        },
        {
          heading: 'Window film: fast, reversible, and far cheaper',
          paragraphs: [
            'Window film is applied directly to your existing windows, with no need to remove or replace the glazing. The cost is generally between €8 and €80/m² depending on the type of film, a fraction of the price of a full replacement. The work is done in a single visit, with no major construction involved.',
            "Another advantage: the film is fully reversible. If your windows are still in good condition, there's no reason to replace them just to gain thermal comfort, privacy, or UV protection — film addresses the same need without the drawbacks of major construction work.",
          ],
        },
        {
          heading: "What each solution doesn't do",
          paragraphs: [
            "Film doesn't fix faulty glazing: if there's condensation between the panes of a double-glazed window, a window that doesn't close properly, or very old, poorly insulated single glazing, that's a sign replacement is needed, not that film will be enough.",
            'Conversely, replacing windows solely to gain privacy or reduce heat, when they are still functional, is a hard expense to justify when film solves the same problem for a fraction of the price.',
          ],
        },
        {
          heading: 'The two solutions work together',
          paragraphs: [
            'Just had your windows replaced and still want more privacy or extra solar protection? Film applies just as well to new single, double, or triple glazing. Many of our clients use it precisely as a complement to recently installed glazing, to add a function (privacy, mirror effect, anti-burglary protection) that the glazing alone does not provide.',
          ],
        },
        {
          heading: 'Sources',
          paragraphs: [
            '[Solar film vs solar control glass comparison — Batimaz](https://batimaz.fr/film-solaire-vs-verre-controle-solaire-cout-performance-reversibilite/)',
            '[Cost of replacing a window in Belgium — Trustup](https://blog.trustup.be/fr/prix-changer-fenetres/)',
          ],
        },
        {
          heading: 'Still unsure?',
          paragraphs: [
            "Contact us — we'll advise you for free based on your project and reply within 24 hours.",
          ],
        },
      ],
      faq: [
        {
          question: 'Does window film work on new double or triple glazing?',
          answer: "Yes, without any issue. The film is applied to the inside of any type of glazing — single, double, or triple — whether it's old or just installed.",
        },
        {
          question: 'Can film replace built-in solar control glazing?',
          answer: "It addresses the same need (reducing heat and UV) but not in the same way: solar control glazing is integrated during the window's manufacturing and lasts as long as the window itself, while film is applied afterwards and is easier to replace, at a much lower starting cost.",
        },
        {
          question: "How does window film's lifespan compare to replacing a window?",
          answer: 'Film typically lasts up to 10 years, compared to several decades for replaced glazing. In exchange, its starting cost is significantly lower, and it can be replaced without touching the window itself.',
        },
      ],
    },
  ],
};
