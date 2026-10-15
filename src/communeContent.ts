export type CommuneSection = {
  heading?: string;
  paragraphs: string[];
};

export type CommuneFaqItem = {
  question: string;
  answer: string;
};

export type CommunePage = {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: CommuneSection[];
  faq: CommuneFaqItem[];
  // Defaults to shown. Set to false for a commune page that should exist (built,
  // indexed via sitemap.xml, listed in llms.txt — real content for Google/AI
  // crawlers) without a clickable link anywhere in the site's own navigation —
  // deliberately requested to keep /zone-intervention from listing every commune.
  hidden?: boolean;
};

// Each commune page leads with what's actually different about the local building
// stock (a real, verifiable, general fact — not a fabricated project or review), and
// derives its film recommendation from that. No invented testimonials, no claimed
// completed projects beyond what's genuinely true (ongoing local outreach).
export const communePages: Record<'FR' | 'NL' | 'EN', CommunePage[]> = {
  FR: [
    {
      slug: 'uccle',
      name: 'Uccle',
      title: 'Film pour vitrage à Uccle : la solution pour maisons avec jardin et grandes baies vitrées',
      metaTitle: 'Vitre teintée à Uccle, Linkebeek et Rhode-Saint-Genèse',
      metaDescription:
        "VitraCare pose des films et teintes pour vitrages à Uccle : intimité, confort thermique et protection UV, adaptés aux maisons avec jardin et grandes baies vitrées typiques de la commune.",
      intro:
        "Uccle est l'une des communes les plus résidentielles de la périphérie bruxelloise : maisons individuelles, jardins, grandes baies vitrées côté jardin. C'est aussi une commune où le vis-à-vis reste bien réel, même avec un jardin, et où la chaleur d'été peut vite rendre un salon plein sud invivable. Voici comment le film pour vitrage répond à ces deux réalités locales.",
      sections: [
        {
          heading: 'Le bâti à Uccle : ce qui compte pour choisir son film',
          paragraphs: [
            "Dans des quartiers comme Fort-Jaco, Saint-Job ou Calevoet, l'habitat uccellois est dominé par des maisons individuelles ou semi-mitoyennes, souvent construites dans l'entre-deux-guerres, avec de grandes baies vitrées orientées vers le jardin. Cette architecture est agréable, mais génère deux problèmes fréquents : une chaleur intense en été dans les pièces exposées plein sud ou plein ouest, et un vis-à-vis avec les propriétés voisines malgré la présence d'un jardin — les parcelles restent souvent proches les unes des autres.",
          ],
        },
        {
          heading: 'Notre recommandation pour les maisons uccloises',
          paragraphs: [
            "Pour les grandes baies vitrées orientées sud ou ouest, la teinte solaire est en général le choix le plus pertinent : elle réduit la chaleur et les UV sans perdre en transparence ni assombrir la pièce. Pour les façades avant, plus proches de la rue ou des voisins, le film effet miroir permet de garder une vue dégagée depuis l'intérieur tout en devenant invisible de l'extérieur en journée.",
          ],
        },
        {
          heading: 'Un bénéfice souvent négligé : la discrétion face aux regards indiscrets',
          paragraphs: [
            "Les grandes baies vitrées donnant sur le jardin, typiques des maisons uccloises, exposent aussi l'intérieur du logement aux regards extérieurs — pas seulement ceux des voisins bienveillants. Le service belge de prévention [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (SPF Intérieur) recommande explicitement de ne pas laisser d'objets de valeur visibles depuis l'extérieur. Le film pour vitrage permet d'obtenir cette discrétion en continu, sans devoir réorganiser son intérieur au quotidien.",
          ],
        },
        {
          heading: 'VitraCare à Uccle',
          paragraphs: [
            "Nous menons actuellement des actions de sensibilisation locale à Uccle, en complément de notre présence dans toute la région bruxelloise. Notre collaborateur intervient dans tous les quartiers de la commune.",
          ],
        },
      ],
      faq: [
        {
          question: 'Le film convient-il aux grandes baies vitrées typiques des maisons uccloises ?',
          answer: "Oui, c'est justement l'un des cas d'usage les plus courants du film pour vitrage. La teinte solaire est particulièrement adaptée aux grandes surfaces vitrées exposées au soleil, sans en réduire la transparence.",
        },
        {
          question: 'Intervenez-vous dans tous les quartiers d\'Uccle ?',
          answer: "Oui, notre collaborateur intervient dans l'ensemble de la commune, du Fort-Jaco à Saint-Job en passant par Calevoet et le centre d'Uccle.",
        },
        {
          question: 'Le film est-il adapté à une maison avec jardin, même sans vis-à-vis apparent ?',
          answer: "Oui. Même avec un jardin, les propriétés voisines ou la rue restent souvent visibles depuis certaines pièces — le film permet de garder cette intimité sans fermer les volets en journée.",
        },
        {
          question: 'Le film peut-il aider à réduire le risque de cambriolage ?',
          answer: "Il existe deux approches complémentaires. La première, passive : réduire ce qui est visible depuis l'extérieur, un principe recommandé par les services de prévention belges. La seconde, plus directe : notre film anti-effraction, qui ne rend pas la vitre incassable mais retient les éclats de verre en cas de choc, ralentissant fortement une tentative d'effraction.",
        },
      ],
    },
    {
      slug: 'waterloo',
      name: 'Waterloo',
      title: 'Film pour vitrage à Waterloo : confort et intimité pour les grandes propriétés',
      metaTitle: "Film pour vitrage à Waterloo, Braine-l'Alleud et Lasne",
      metaDescription:
        "VitraCare pose des films et teintes pour vitrages à Waterloo (Brabant wallon) : intimité, confort thermique et protection UV pour villas et grandes surfaces vitrées.",
      intro:
        "Waterloo est une commune résidentielle du Brabant wallon, réputée pour ses villas spacieuses, ses grandes propriétés arborées et sa proximité avec la forêt de Soignes. Les maisons y sont souvent équipées de grandes baies vitrées, vérandas ou verrières — des surfaces qui profitent particulièrement du film pour vitrage.",
      sections: [
        {
          heading: 'Le bâti à Waterloo',
          paragraphs: [
            "Contrairement aux communes plus denses de Bruxelles, Waterloo se caractérise par des parcelles plus grandes et des maisons plus espacées. Le vis-à-vis y est moins systématique, mais les grandes surfaces vitrées — vérandas, baies coulissantes, verrières — sont très présentes et exposent fortement les pièces de vie à la chaleur en été.",
          ],
        },
        {
          heading: 'Notre recommandation',
          paragraphs: [
            "Pour les vérandas et grandes baies vitrées, la teinte solaire permet de garder ces pièces vivables toute l'année sans devoir fermer les stores en pleine journée. Pour les façades avant ou les propriétés proches de la rue, le film effet miroir ou blanc mat reste pertinent selon le niveau d'intimité recherché.",
          ],
        },
        {
          heading: 'Un bénéfice souvent négligé : la discrétion face aux regards indiscrets',
          paragraphs: [
            "Les grandes propriétés, parfois plus isolées et moins passantes qu'en zone urbaine dense, exposent aussi davantage ce qui est visible depuis leurs grandes baies vitrées ou vérandas. Le service belge de prévention [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (SPF Intérieur) recommande explicitement de ne pas laisser d'objets de valeur visibles depuis l'extérieur. Le film pour vitrage permet d'obtenir cette discrétion en continu, sans devoir réorganiser son intérieur au quotidien.",
          ],
        },
        {
          heading: 'VitraCare à Waterloo',
          paragraphs: [
            "Nous étendons actuellement notre présence à Waterloo, en complément de notre activité dans la région bruxelloise. Notre collaborateur se déplace dans toute la commune.",
          ],
        },
      ],
      faq: [
        {
          question: 'Intervenez-vous en dehors de la région bruxelloise, à Waterloo ?',
          answer: "Oui, nous intervenons à Waterloo et dans le Brabant wallon, au même titre que dans la périphérie bruxelloise.",
        },
        {
          question: 'Le film est-il adapté aux vérandas et verrières, courantes à Waterloo ?',
          answer: "Tout à fait, c'est même l'un des usages où le film apporte le plus de confort : une véranda plein sud peut devenir difficilement vivable en été sans protection solaire.",
        },
        {
          question: 'Faut-il un vis-à-vis pour que le film soit utile ?',
          answer: "Non. Même sans vis-à-vis direct, la teinte solaire reste pertinente pour son effet sur la chaleur et les UV, indépendamment de toute question d'intimité.",
        },
        {
          question: 'Le film peut-il aider à réduire le risque de cambriolage ?',
          answer: "Il existe deux approches complémentaires. La première, passive : réduire ce qui est visible depuis l'extérieur, un principe recommandé par les services de prévention belges. La seconde, plus directe : notre film anti-effraction, qui ne rend pas la vitre incassable mais retient les éclats de verre en cas de choc, ralentissant fortement une tentative d'effraction.",
        },
      ],
    },
    {
      slug: 'forest',
      name: 'Forest',
      title: 'Film pour vitrage à Forest : la solution pour maisons mitoyennes et vis-à-vis urbain',
      metaTitle: 'Film pour vitrage à Forest, Anderlecht et Saint-Gilles',
      metaDescription:
        "VitraCare pose des films et teintes pour vitrages à Forest : intimité et confort thermique adaptés aux maisons mitoyennes et à la densité urbaine de la commune.",
      intro:
        "Forest est une commune plus urbaine et plus dense que ses voisines, avec une majorité de maisons mitoyennes et de façades donnant directement sur rue. Le vis-à-vis y est souvent immédiat, que ce soit avec les voisins d'en face ou les passants.",
      sections: [
        {
          heading: 'Le bâti à Forest',
          paragraphs: [
            "À Forest, les maisons sont pour la plupart mitoyennes, avec des façades avant proches du trottoir et des fenêtres qui donnent directement sur la rue. Cette configuration, fréquente dans des quartiers comme le Bas de Forest ou Saint-Denis, expose les pièces de vie du rez-de-chaussée aux regards des passants toute la journée.",
          ],
        },
        {
          heading: 'Notre recommandation',
          paragraphs: [
            "Pour ce type de configuration, le film effet miroir est en général la solution la plus adaptée : il bloque totalement la vue depuis la rue en journée, sans obliger à fermer les rideaux ou les volets. Pour les pièces où l'intimité doit être garantie à toute heure — salle de bain, chambre au rez-de-chaussée — le film blanc mat reste l'option la plus fiable.",
          ],
        },
        {
          heading: 'Un bénéfice souvent négligé : la discrétion face aux regards indiscrets',
          paragraphs: [
            "À Forest, un rez-de-chaussée donnant directement sur la rue laisse voir à tout passant ce qui se trouve à l'intérieur — télévision, ordinateur, objets de valeur. Le service belge de prévention [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (SPF Intérieur) recommande explicitement de ne pas laisser d'objets de valeur visibles depuis l'extérieur. Le film pour vitrage permet d'obtenir cette discrétion en continu, sans devoir réorganiser son intérieur au quotidien.",
          ],
        },
        {
          heading: 'VitraCare à Forest',
          paragraphs: [
            "Nous menons actuellement des actions de sensibilisation locale à Forest, en complément de notre présence dans le reste de la région bruxelloise.",
          ],
        },
      ],
      faq: [
        {
          question: 'Le film est-il efficace pour une maison mitoyenne donnant directement sur la rue ?',
          answer: "Oui, c'est exactement le cas d'usage pour lequel le film effet miroir est le plus utilisé : il permet de garder une vue dégagée depuis l'intérieur tout en empêchant les passants de voir à l'intérieur en journée.",
        },
        {
          question: 'Intervenez-vous dans tous les quartiers de Forest ?',
          answer: "Oui, notre collaborateur intervient dans l'ensemble de la commune, du Bas de Forest à Saint-Denis.",
        },
        {
          question: 'Que se passe-t-il le soir, une fois les lumières allumées ?',
          answer: "L'effet miroir fonctionne uniquement de jour. Le soir, si l'intérieur est éclairé, l'effet s'inverse comme pour une fenêtre classique — un point à garder en tête selon les pièces concernées.",
        },
        {
          question: 'Le film peut-il aider à réduire le risque de cambriolage ?',
          answer: "Il existe deux approches complémentaires. La première, passive : réduire ce qui est visible depuis l'extérieur, un principe recommandé par les services de prévention belges. La seconde, plus directe : notre film anti-effraction, qui ne rend pas la vitre incassable mais retient les éclats de verre en cas de choc, ralentissant fortement une tentative d'effraction.",
        },
      ],
    },
    {
      slug: 'ixelles',
      hidden: true,
      name: 'Ixelles',
      title: 'Film pour vitrage à Ixelles : la solution pour immeubles de maître et appartements avec vis-à-vis',
      metaTitle: 'Film pour vitrage à Ixelles, Flagey et Châtelain',
      metaDescription:
        "VitraCare pose des films et teintes pour vitrages à Ixelles : intimité et confort thermique adaptés aux grandes baies vitrées des immeubles de maître.",
      intro:
        "Ixelles est l'une des communes les plus densément peuplées de Bruxelles : immeubles de maître du 19e siècle transformés en appartements, grandes baies vitrées autour des étangs et de Flagey, quartiers animés comme le Châtelain ou Matongé. Cette densité crée un vis-à-vis quasi permanent, entre façades proches et fenêtres qui se font face d'un immeuble à l'autre.",
      sections: [
        {
          heading: 'Le bâti à Ixelles : ce qui compte pour choisir son film',
          paragraphs: [
            "Autour des étangs d'Ixelles, du Châtelain ou de Flagey, le bâti est dominé par de grands immeubles de maître aux larges fenêtres, souvent divisés en appartements. Ces grandes baies, caractéristiques de l'architecture bruxelloise de la fin du 19e siècle, apportent beaucoup de lumière mais exposent aussi fortement les pièces de vie aux regards des immeubles voisins, parfois à quelques mètres seulement de l'autre côté de la rue ou de la cour intérieure.",
          ],
        },
        {
          heading: 'Notre recommandation pour les appartements ixellois',
          paragraphs: [
            "Pour les grandes fenêtres donnant sur rue ou sur cour avec un vis-à-vis direct, le film effet miroir permet de garder une vue dégagée depuis l'intérieur tout en devenant invisible de l'extérieur en journée. Pour les salles de bain ou chambres en rez-de-chaussée, souvent très exposées dans ce type d'immeuble, le film blanc mat garantit une intimité constante, jour et nuit.",
          ],
        },
        {
          heading: 'Un bénéfice souvent négligé : la discrétion face aux regards indiscrets',
          paragraphs: [
            "Dans un quartier aussi dense qu'Ixelles, les grandes baies vitrées exposent l'intérieur du logement à de nombreux regards extérieurs, bien au-delà des voisins directs. Le service belge de prévention [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (SPF Intérieur) recommande explicitement de ne pas laisser d'objets de valeur visibles depuis l'extérieur. Le film pour vitrage permet d'obtenir cette discrétion en continu, sans devoir réorganiser son intérieur au quotidien.",
          ],
        },
        {
          heading: 'VitraCare à Ixelles',
          paragraphs: [
            "Nous menons actuellement des actions de sensibilisation locale à Ixelles, en complément de notre présence dans toute la région bruxelloise. Notre collaborateur intervient dans tous les quartiers de la commune.",
          ],
        },
      ],
      faq: [
        {
          question: 'Le film convient-il aux grandes baies vitrées des immeubles de maître ixellois ?',
          answer: "Oui, c'est l'un des cas d'usage les plus fréquents à Ixelles : ces grandes fenêtres se prêtent très bien au film effet miroir ou blanc mat selon le niveau d'intimité recherché.",
        },
        {
          question: 'Intervenez-vous dans tous les quartiers d\'Ixelles ?',
          answer: "Oui, notre collaborateur intervient dans l'ensemble de la commune, des étangs au Châtelain en passant par Flagey et Matongé.",
        },
        {
          question: 'Le film fonctionne-t-il aussi pour les appartements en copropriété ?',
          answer: "Oui, le film se pose côté intérieur du vitrage et ne modifie pas l'aspect extérieur du bâtiment. Selon les copropriétés, un simple avertissement au syndic peut néanmoins être recommandé avant travaux.",
        },
        {
          question: 'Le film peut-il aider à réduire le risque de cambriolage ?',
          answer: "Il existe deux approches complémentaires. La première, passive : réduire ce qui est visible depuis l'extérieur, un principe recommandé par les services de prévention belges. La seconde, plus directe : notre film anti-effraction, qui ne rend pas la vitre incassable mais retient les éclats de verre en cas de choc, ralentissant fortement une tentative d'effraction.",
        },
      ],
    },
    {
      slug: 'schaerbeek',
      hidden: true,
      name: 'Schaerbeek',
      title: 'Film pour vitrage à Schaerbeek : la solution pour maisons de maître et façades à bow-windows',
      metaTitle: 'Film pour vitrage à Schaerbeek, Terdelt et Square Riga',
      metaDescription:
        "VitraCare pose des films et teintes pour vitrages à Schaerbeek : intimité et confort thermique adaptés aux grandes façades à bow-windows et à la densité de la commune.",
      intro:
        "Schaerbeek est la deuxième commune la plus peuplée de Bruxelles, avec un bâti très varié : maisons de maître Art déco autour du Square Riga ou de Terdelt, façades à bow-windows typiquement bruxelloises, et quartiers plus denses proches de la gare du Nord. Le vis-à-vis y prend des formes différentes selon le quartier, mais reste une préoccupation quasi générale.",
      sections: [
        {
          heading: 'Le bâti à Schaerbeek',
          paragraphs: [
            "Schaerbeek se distingue par la diversité de son bâti : grandes maisons de maître avec bow-windows et vitraux dans les quartiers Terdelt ou Square Riga, rangées de maisons mitoyennes plus modestes dans les quartiers proches du centre. Les bow-windows, très caractéristiques de l'architecture bruxelloise, multiplient les surfaces vitrées exposées à la rue sur plusieurs angles à la fois.",
          ],
        },
        {
          heading: 'Notre recommandation',
          paragraphs: [
            "Pour les bow-windows et grandes façades vitrées donnant sur rue, le film effet miroir permet de conserver une vue dégagée depuis l'intérieur tout en bloquant la vue depuis l'extérieur en journée. Pour les pièces nécessitant une intimité totale à toute heure, comme une salle de bain au rez-de-chaussée, le film blanc mat reste la solution la plus fiable.",
          ],
        },
        {
          heading: 'Un bénéfice souvent négligé : la discrétion face aux regards indiscrets',
          paragraphs: [
            "Les bow-windows, en multipliant les angles de vue vers l'intérieur, exposent particulièrement ce qui est visible depuis la rue. Le service belge de prévention [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (SPF Intérieur) recommande explicitement de ne pas laisser d'objets de valeur visibles depuis l'extérieur. Le film pour vitrage permet d'obtenir cette discrétion en continu, sans devoir réorganiser son intérieur au quotidien.",
          ],
        },
        {
          heading: 'VitraCare à Schaerbeek',
          paragraphs: [
            "Nous menons actuellement des actions de sensibilisation locale à Schaerbeek, en complément de notre présence dans toute la région bruxelloise.",
          ],
        },
      ],
      faq: [
        {
          question: 'Le film convient-il aux bow-windows typiques de Schaerbeek ?',
          answer: "Oui, les bow-windows se prêtent très bien au film pour vitrage : chaque panneau peut être traité individuellement pour un rendu homogène sur toute la façade.",
        },
        {
          question: 'Intervenez-vous dans tous les quartiers de Schaerbeek ?',
          answer: "Oui, notre collaborateur intervient dans l'ensemble de la commune, du Square Riga à Terdelt en passant par les quartiers proches de la gare du Nord.",
        },
        {
          question: 'Le film abîme-t-il les vitraux ou éléments décoratifs anciens ?',
          answer: "Non, le film se pose sur une surface vitrée standard et n'altère pas les éléments décoratifs environnants. Pour un vitrage avec des éléments spécifiques (plomb, gravure), nous en discutons au cas par cas lors de la prise de mesures.",
        },
        {
          question: 'Le film peut-il aider à réduire le risque de cambriolage ?',
          answer: "Il existe deux approches complémentaires. La première, passive : réduire ce qui est visible depuis l'extérieur, un principe recommandé par les services de prévention belges. La seconde, plus directe : notre film anti-effraction, qui ne rend pas la vitre incassable mais retient les éclats de verre en cas de choc, ralentissant fortement une tentative d'effraction.",
        },
      ],
    },
    {
      slug: 'molenbeek-saint-jean',
      name: 'Molenbeek-Saint-Jean',
      hidden: true,
      title: 'Film pour vitrage à Molenbeek-Saint-Jean : la solution pour maisons rénovées le long du canal',
      metaTitle: 'Film pour vitrage à Molenbeek-Saint-Jean',
      metaDescription:
        "VitraCare pose des films et teintes pour vitrages à Molenbeek-Saint-Jean : intimité et confort thermique adaptés aux maisons mitoyennes rénovées de la commune.",
      intro:
        "Molenbeek-Saint-Jean, à l'ouest du canal, connaît depuis plusieurs années une vague de rénovation de ses maisons mitoyennes historiques. De nombreux ménages y agrandissent les ouvertures au rez-de-chaussée pour gagner en lumière, ce qui pose directement la question du vis-à-vis avec la rue.",
      sections: [
        {
          heading: 'Le bâti à Molenbeek-Saint-Jean',
          paragraphs: [
            "La commune est dominée par des maisons mitoyennes aux façades étroites, héritage de son passé industriel et ouvrier. Beaucoup de ces maisons sont aujourd'hui rénovées, avec des ouvertures agrandies au rez-de-chaussée pour les salons et cuisines. Cette évolution, positive pour la luminosité, expose davantage les pièces de vie à la rue, dans des quartiers aux rues parfois étroites.",
          ],
        },
        {
          heading: 'Notre recommandation',
          paragraphs: [
            "Pour les grandes baies vitrées fraîchement posées au rez-de-chaussée, le film effet miroir permet de profiter pleinement de la lumière gagnée sans exposer l'intérieur aux regards de la rue en journée. Pour les pièces nécessitant une intimité à toute heure, le film blanc mat reste l'option la plus fiable.",
          ],
        },
        {
          heading: 'Un bénéfice souvent négligé : la discrétion face aux regards indiscrets',
          paragraphs: [
            "Une grande baie vitrée fraîchement rénovée au rez-de-chaussée, sur une rue parfois étroite, expose immédiatement l'intérieur du logement aux passants. Le service belge de prévention [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (SPF Intérieur) recommande explicitement de ne pas laisser d'objets de valeur visibles depuis l'extérieur. Le film pour vitrage permet d'obtenir cette discrétion en continu, sans devoir réorganiser son intérieur au quotidien.",
          ],
        },
        {
          heading: 'VitraCare à Molenbeek-Saint-Jean',
          paragraphs: [
            "Nous menons actuellement des actions de sensibilisation locale à Molenbeek-Saint-Jean, en complément de notre présence dans toute la région bruxelloise.",
          ],
        },
      ],
      faq: [
        {
          question: 'Le film convient-il à une baie vitrée récemment agrandie au rez-de-chaussée ?',
          answer: "Oui, c'est justement l'un des cas où le film apporte le plus de valeur : garder la lumière gagnée par l'agrandissement sans perdre en intimité.",
        },
        {
          question: 'Intervenez-vous dans tous les quartiers de Molenbeek-Saint-Jean ?',
          answer: "Oui, notre collaborateur intervient dans l'ensemble de la commune, des abords du canal aux quartiers plus résidentiels.",
        },
        {
          question: 'Faut-il refaire le film après des travaux de rénovation ?',
          answer: "Si le vitrage lui-même est remplacé pendant la rénovation, oui, le film doit être reposé sur le nouveau vitrage. S'il s'agit d'un agrandissement de l'ouverture existante, nous adaptons simplement les dimensions lors de la prise de mesures.",
        },
        {
          question: 'Le film peut-il aider à réduire le risque de cambriolage ?',
          answer: "Il existe deux approches complémentaires. La première, passive : réduire ce qui est visible depuis l'extérieur, un principe recommandé par les services de prévention belges. La seconde, plus directe : notre film anti-effraction, qui ne rend pas la vitre incassable mais retient les éclats de verre en cas de choc, ralentissant fortement une tentative d'effraction.",
        },
      ],
    },
    {
      slug: 'etterbeek',
      name: 'Etterbeek',
      hidden: true,
      title: "Film pour vitrage à Etterbeek : la solution pour appartements proches des institutions européennes",
      metaTitle: 'Film pour vitrage à Etterbeek, Jourdan et Mérode',
      metaDescription:
        "VitraCare pose des films et teintes pour vitrages à Etterbeek : intimité adaptée aux immeubles d'appartements denses proches du quartier européen.",
      intro:
        "Etterbeek, voisine directe du quartier européen, se compose en grande partie d'immeubles d'appartements denses, occupés par une population très mobile (fonctionnaires européens, étudiants, locataires de passage). Cette densité et cette rotation créent un vis-à-vis permanent entre appartements voisins.",
      sections: [
        {
          heading: 'Le bâti à Etterbeek',
          paragraphs: [
            "Dans des quartiers comme Jourdan ou Mérode, le bâti est dominé par des immeubles à appartements construits entre la fin du 19e siècle et le milieu du 20e, avec des façades rapprochées et des fenêtres qui se font face d'un immeuble à l'autre. La forte densité locative, liée à la proximité du quartier européen, accentue ce vis-à-vis au quotidien.",
          ],
        },
        {
          heading: 'Notre recommandation',
          paragraphs: [
            "Pour les fenêtres de salon ou de chambre donnant sur un immeuble voisin proche, le film effet miroir permet de garder une vue dégagée depuis l'intérieur tout en devenant invisible de l'extérieur en journée. Pour une intimité garantie à toute heure, notamment en soirée, le film blanc mat reste l'option la plus fiable.",
          ],
        },
        {
          heading: 'Un bénéfice souvent négligé : la discrétion face aux regards indiscrets',
          paragraphs: [
            "Dans un quartier aussi dense qu'Etterbeek, les fenêtres d'appartements voisins se font souvent face à quelques mètres seulement. Le service belge de prévention [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (SPF Intérieur) recommande explicitement de ne pas laisser d'objets de valeur visibles depuis l'extérieur. Le film pour vitrage permet d'obtenir cette discrétion en continu, sans devoir réorganiser son intérieur au quotidien.",
          ],
        },
        {
          heading: 'VitraCare à Etterbeek',
          paragraphs: [
            "Nous menons actuellement des actions de sensibilisation locale à Etterbeek, en complément de notre présence dans toute la région bruxelloise.",
          ],
        },
      ],
      faq: [
        {
          question: "Le film convient-il à un appartement avec vis-à-vis direct sur un immeuble voisin ?",
          answer: "Oui, c'est l'un des cas d'usage les plus fréquents à Etterbeek, vu la proximité entre immeubles dans plusieurs quartiers de la commune.",
        },
        {
          question: 'Intervenez-vous dans tous les quartiers d\'Etterbeek ?',
          answer: "Oui, notre collaborateur intervient dans l'ensemble de la commune, de Jourdan à Mérode.",
        },
        {
          question: 'Le film fonctionne-t-il aussi pour les appartements en location ?',
          answer: "Oui, mais comme pour tout aménagement, l'accord du propriétaire est nécessaire avant la pose. Le film n'endommage pas le vitrage et reste une solution réversible.",
        },
        {
          question: 'Le film peut-il aider à réduire le risque de cambriolage ?',
          answer: "Il existe deux approches complémentaires. La première, passive : réduire ce qui est visible depuis l'extérieur, un principe recommandé par les services de prévention belges. La seconde, plus directe : notre film anti-effraction, qui ne rend pas la vitre incassable mais retient les éclats de verre en cas de choc, ralentissant fortement une tentative d'effraction.",
        },
      ],
    },
    {
      slug: 'woluwe-saint-pierre',
      name: 'Woluwe-Saint-Pierre',
      hidden: true,
      title: 'Film pour vitrage à Woluwe-Saint-Pierre : la solution pour maisons bordées de verdure',
      metaTitle: 'Film pour vitrage à Woluwe-Saint-Pierre et Parc de Woluwe',
      metaDescription:
        "VitraCare pose des films et teintes pour vitrages à Woluwe-Saint-Pierre : confort thermique et intimité pour les maisons avec jardin proches du Parc de Woluwe.",
      intro:
        "Woluwe-Saint-Pierre est l'une des communes les plus verdoyantes de Bruxelles, organisée autour du Parc de Woluwe et de quartiers résidentiels calmes comme Kapelleveld. Les maisons y sont souvent entourées de jardins et de haies, mais le vis-à-vis entre propriétés voisines reste bien réel, notamment en hiver quand la végétation perd ses feuilles.",
      sections: [
        {
          heading: 'Le bâti à Woluwe-Saint-Pierre',
          paragraphs: [
            "Le quartier de la cité-jardin de Kapelleveld, ainsi que les rues autour du Parc de Woluwe, concentrent des maisons individuelles ou semi-mitoyennes construites entre les années 1920 et 1960, avec des jardins et souvent de grandes fenêtres orientées vers ceux-ci. La verdure environnante offre une impression de calme, mais n'empêche pas un vis-à-vis réel entre parcelles voisines, surtout lorsque les haies ou arbres perdent leur feuillage en hiver.",
          ],
        },
        {
          heading: 'Notre recommandation',
          paragraphs: [
            "Pour les grandes fenêtres orientées sud ou ouest, la teinte solaire reste le choix le plus pertinent : elle réduit la chaleur et les UV sans assombrir la pièce ni perdre la vue sur le jardin. Pour les façades plus proches de la rue ou des voisins, le film effet miroir permet de garder une vue dégagée depuis l'intérieur tout en devenant invisible en journée.",
          ],
        },
        {
          heading: 'Un bénéfice souvent négligé : la discrétion face aux regards indiscrets',
          paragraphs: [
            "Même entourée de verdure, une maison reste visible depuis les propriétés voisines une bonne partie de l'année, notamment en hiver. Le service belge de prévention [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (SPF Intérieur) recommande explicitement de ne pas laisser d'objets de valeur visibles depuis l'extérieur. Le film pour vitrage permet d'obtenir cette discrétion en continu, sans devoir réorganiser son intérieur au quotidien.",
          ],
        },
        {
          heading: 'VitraCare à Woluwe-Saint-Pierre',
          paragraphs: [
            "Nous menons actuellement des actions de sensibilisation locale à Woluwe-Saint-Pierre, en complément de notre présence dans toute la région bruxelloise.",
          ],
        },
      ],
      faq: [
        {
          question: 'Le film est-il utile si ma maison est déjà entourée de verdure ?',
          answer: "Oui. La végétation réduit le vis-à-vis une partie de l'année seulement — en hiver, quand les haies et arbres perdent leurs feuilles, l'intimité peut rapidement disparaître.",
        },
        {
          question: 'Intervenez-vous dans tous les quartiers de Woluwe-Saint-Pierre ?',
          answer: "Oui, notre collaborateur intervient dans l'ensemble de la commune, de Kapelleveld aux abords du Parc de Woluwe.",
        },
        {
          question: 'Le film convient-il aux grandes fenêtres orientées sur le jardin ?',
          answer: "Oui, c'est l'un des usages les plus courants : la teinte solaire réduit la chaleur et les UV sans assombrir la pièce ni perdre la vue sur le jardin.",
        },
        {
          question: 'Le film peut-il aider à réduire le risque de cambriolage ?',
          answer: "Il existe deux approches complémentaires. La première, passive : réduire ce qui est visible depuis l'extérieur, un principe recommandé par les services de prévention belges. La seconde, plus directe : notre film anti-effraction, qui ne rend pas la vitre incassable mais retient les éclats de verre en cas de choc, ralentissant fortement une tentative d'effraction.",
        },
      ],
    },
    {
      slug: 'saint-gilles',
      name: 'Saint-Gilles',
      hidden: true,
      title: 'Film pour vitrage à Saint-Gilles : la solution pour maisons Art nouveau et rues étroites',
      metaTitle: 'Film pour vitrage à Saint-Gilles, Barrière et Parvis',
      metaDescription:
        "VitraCare pose des films et teintes pour vitrages à Saint-Gilles : intimité adaptée aux maisons Art nouveau et à la densité des rues étroites de la commune.",
      intro:
        "Saint-Gilles est l'une des communes les plus denses de Bruxelles, connue pour son patrimoine Art nouveau et ses rues étroites autour de la Barrière et du Parvis. De nombreuses maisons de maître y ont été divisées en appartements, avec des fenêtres souvent très proches de la rue ou des immeubles voisins.",
      sections: [
        {
          heading: 'Le bâti à Saint-Gilles',
          paragraphs: [
            "Le bâti saint-gillois mêle de grandes maisons de maître Art nouveau, souvent divisées en plusieurs appartements, et des rues particulièrement étroites, notamment autour de la Barrière et du Parvis. Cette configuration rapproche fortement les façades les unes des autres, et les grandes fenêtres caractéristiques de l'architecture Art nouveau exposent largement l'intérieur des logements à la rue.",
          ],
        },
        {
          heading: 'Notre recommandation',
          paragraphs: [
            "Pour les grandes fenêtres de rez-de-chaussée ou de premier étage proches de la rue, le film effet miroir permet de conserver une vue dégagée depuis l'intérieur tout en bloquant la vue depuis l'extérieur en journée. Pour les studios et petits appartements où l'intimité doit être garantie à toute heure, le film blanc mat reste la solution la plus fiable.",
          ],
        },
        {
          heading: 'Un bénéfice souvent négligé : la discrétion face aux regards indiscrets',
          paragraphs: [
            "Dans des rues aussi étroites que celles de Saint-Gilles, une fenêtre de rez-de-chaussée ou de premier étage est souvent visible depuis le trottoir d'en face ou l'immeuble voisin. Le service belge de prévention [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (SPF Intérieur) recommande explicitement de ne pas laisser d'objets de valeur visibles depuis l'extérieur. Le film pour vitrage permet d'obtenir cette discrétion en continu, sans devoir réorganiser son intérieur au quotidien.",
          ],
        },
        {
          heading: 'VitraCare à Saint-Gilles',
          paragraphs: [
            "Nous menons actuellement des actions de sensibilisation locale à Saint-Gilles, en complément de notre présence dans toute la région bruxelloise.",
          ],
        },
      ],
      faq: [
        {
          question: 'Le film abîme-t-il les grandes fenêtres Art nouveau ?',
          answer: "Non, le film se pose sur une surface vitrée standard et n'altère pas les éléments décoratifs environnants. Pour un vitrage avec des éléments spécifiques (plomb, gravure, vitrail), nous en discutons au cas par cas lors de la prise de mesures.",
        },
        {
          question: 'Intervenez-vous dans tous les quartiers de Saint-Gilles ?',
          answer: "Oui, notre collaborateur intervient dans l'ensemble de la commune, de la Barrière au Parvis.",
        },
        {
          question: 'Le film convient-il à un studio avec une seule grande fenêtre sur rue ?',
          answer: "Oui, c'est justement l'un des cas où le film apporte le plus de valeur : garder la lumière d'une unique grande fenêtre tout en préservant l'intimité.",
        },
        {
          question: 'Le film peut-il aider à réduire le risque de cambriolage ?',
          answer: "Il existe deux approches complémentaires. La première, passive : réduire ce qui est visible depuis l'extérieur, un principe recommandé par les services de prévention belges. La seconde, plus directe : notre film anti-effraction, qui ne rend pas la vitre incassable mais retient les éclats de verre en cas de choc, ralentissant fortement une tentative d'effraction.",
        },
      ],
    },
  ],
  NL: [
    {
      slug: 'uccle',
      name: 'Ukkel',
      title: 'Raamfolie in Ukkel: de oplossing voor huizen met tuin en grote raampartijen',
      metaTitle: 'Raamfolie in Ukkel, Linkebeek en Sint-Genesius-Rode',
      metaDescription:
        'VitraCare plaatst folies en tinten voor beglazing in Ukkel: privacy, thermisch comfort en UV-bescherming, aangepast aan de huizen met tuin en grote raampartijen die kenmerkend zijn voor de gemeente.',
      intro:
        'Ukkel is een van de meest residentiële gemeenten van de Brusselse rand: vrijstaande woningen, tuinen, grote raampartijen aan de tuinzijde. Toch blijft inkijk een reëel probleem, zelfs met een tuin, en kan de zomerhitte een zuidgerichte woonkamer al snel onleefbaar maken. Hier leest u hoe raamfolie op beide lokale realiteiten inspeelt.',
      sections: [
        {
          heading: 'De bebouwing in Ukkel: waar u rekening mee moet houden',
          paragraphs: [
            'In wijken zoals Fort-Jaco, Sint-Job of Kalevoet bestaat de bebouwing in Ukkel vooral uit vrijstaande of halfvrijstaande woningen, vaak gebouwd in het interbellum, met grote raampartijen gericht op de tuin. Deze architectuur is aangenaam, maar brengt twee veelvoorkomende problemen met zich mee: intense hitte in de zomer in zuid- of westgerichte kamers, en inkijk vanuit buurwoningen ondanks de aanwezigheid van een tuin — percelen liggen vaak dicht bij elkaar.',
          ],
        },
        {
          heading: 'Onze aanbeveling voor woningen in Ukkel',
          paragraphs: [
            'Voor grote raampartijen gericht op het zuiden of westen is zonwerende folie doorgaans de beste keuze: ze vermindert warmte en UV-stralen zonder aan transparantie in te boeten of de kamer te verduisteren. Voor de voorgevel, dichter bij de straat of de buren, laat spiegeleffectfolie toe om vanbinnen vrij zicht te behouden terwijl u overdag onzichtbaar wordt van buitenaf.',
          ],
        },
        {
          heading: 'Een vaak onderschat voordeel: discretie tegenover ongewenste blikken',
          paragraphs: [
            'Grote raampartijen op de tuin, typisch voor woningen in Ukkel, stellen ook het interieur bloot aan blikken van buitenaf — niet enkel die van goedbedoelende buren. De Belgische preventiedienst [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (FOD Binnenlandse Zaken) raadt uitdrukkelijk aan om geen waardevolle voorwerpen zichtbaar te laten vanaf buiten. Raamfolie biedt deze discretie permanent, zonder dagelijks uw interieur te moeten herschikken.',
          ],
        },
        {
          heading: 'VitraCare in Ukkel',
          paragraphs: [
            'We voeren momenteel lokale sensibiliseringsacties in Ukkel, als aanvulling op onze aanwezigheid in heel het Brussels gewest. Onze medewerker is actief in alle wijken van de gemeente.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is de folie geschikt voor de grote raampartijen die typisch zijn voor woningen in Ukkel?',
          answer: 'Ja, dit is net een van de meest voorkomende toepassingen van raamfolie. Zonwerende folie is bijzonder geschikt voor grote aan de zon blootgestelde glasoppervlakken, zonder de transparantie te verminderen.',
        },
        {
          question: 'Bent u actief in alle wijken van Ukkel?',
          answer: 'Ja, onze medewerker is actief in de hele gemeente, van Fort-Jaco tot Sint-Job, via Kalevoet en het centrum van Ukkel.',
        },
        {
          question: 'Is de folie geschikt voor een woning met tuin, ook zonder zichtbare inkijk?',
          answer: 'Ja. Zelfs met een tuin blijven buurwoningen of de straat vaak zichtbaar vanuit bepaalde kamers — de folie laat toe deze privacy te behouden zonder overdag de rolluiken te moeten sluiten.',
        },
        {
          question: 'Kan de folie helpen om het risico op inbraak te verminderen?',
          answer: 'Er bestaan twee complementaire aanpakken. De eerste, passief: verminderen wat zichtbaar is vanaf buiten, een principe aanbevolen door de Belgische preventiediensten. De tweede, directer: onze inbraakwerende folie, die het raam niet onbreekbaar maakt maar de glasscherven bij impact vasthoudt, wat een inbraakpoging sterk vertraagt.',
        },
      ],
    },
    {
      slug: 'waterloo',
      name: 'Waterloo',
      title: 'Raamfolie in Waterloo: comfort en privacy voor ruime eigendommen',
      metaTitle: 'Raamfolie in Waterloo, Eigenbrakel en Lasne',
      metaDescription:
        'VitraCare plaatst folies en tinten voor beglazing in Waterloo (Waals-Brabant): privacy, thermisch comfort en UV-bescherming voor villa\'s en grote glasoppervlakken.',
      intro:
        'Waterloo is een residentiële gemeente in Waals-Brabant, bekend om haar ruime villa\'s, grote beboomde eigendommen en de nabijheid van het Zoniënwoud. De woningen zijn er vaak uitgerust met grote raampartijen, veranda\'s of serres — oppervlakken die bijzonder baat hebben bij raamfolie.',
      sections: [
        {
          heading: 'De bebouwing in Waterloo',
          paragraphs: [
            'In tegenstelling tot de dichter bebouwde Brusselse gemeenten kenmerkt Waterloo zich door grotere percelen en meer ruimte tussen de woningen. Inkijk is er minder systematisch, maar grote glasoppervlakken — veranda\'s, schuifpuien, serres — zijn er sterk aanwezig en stellen de leefruimtes in de zomer bloot aan veel hitte.',
          ],
        },
        {
          heading: 'Onze aanbeveling',
          paragraphs: [
            'Voor veranda\'s en grote raampartijen laat zonwerende folie toe deze ruimtes het hele jaar door leefbaar te houden, zonder overdag de rolluiken te moeten sluiten. Voor de voorgevel of woningen dicht bij de straat blijven spiegeleffectfolie of matwitte folie relevant, afhankelijk van de gewenste privacy.',
          ],
        },
        {
          heading: 'Een vaak onderschat voordeel: discretie tegenover ongewenste blikken',
          paragraphs: [
            'Grote eigendommen, soms afgelegener en minder doorgaand verkeer dan in dicht stedelijk gebied, maken ook zichtbaarder wat er via hun grote raampartijen of veranda\'s te zien is. De Belgische preventiedienst [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (FOD Binnenlandse Zaken) raadt uitdrukkelijk aan om geen waardevolle voorwerpen zichtbaar te laten vanaf buiten. Raamfolie biedt deze discretie permanent, zonder dagelijks uw interieur te moeten herschikken.',
          ],
        },
        {
          heading: 'VitraCare in Waterloo',
          paragraphs: [
            'We breiden onze aanwezigheid momenteel uit naar Waterloo, als aanvulling op onze activiteit in het Brussels gewest. Onze medewerker verplaatst zich naar de hele gemeente.',
          ],
        },
      ],
      faq: [
        {
          question: 'Bent u ook actief buiten het Brussels gewest, in Waterloo?',
          answer: 'Ja, we zijn actief in Waterloo en Waals-Brabant, net zoals in de Brusselse rand.',
        },
        {
          question: 'Is de folie geschikt voor veranda\'s en serres, courant in Waterloo?',
          answer: 'Zeker, dit is zelfs een van de toepassingen waar de folie het meeste comfort biedt: een zuidgerichte veranda kan in de zomer al snel onleefbaar worden zonder zonwering.',
        },
        {
          question: 'Moet er inkijk zijn opdat de folie nuttig is?',
          answer: 'Nee. Ook zonder directe inkijk blijft zonwerende folie relevant voor haar effect op warmte en UV-stralen, los van elke privacy-overweging.',
        },
        {
          question: 'Kan de folie helpen om het risico op inbraak te verminderen?',
          answer: 'Er bestaan twee complementaire aanpakken. De eerste, passief: verminderen wat zichtbaar is vanaf buiten, een principe aanbevolen door de Belgische preventiediensten. De tweede, directer: onze inbraakwerende folie, die het raam niet onbreekbaar maakt maar de glasscherven bij impact vasthoudt, wat een inbraakpoging sterk vertraagt.',
        },
      ],
    },
    {
      slug: 'forest',
      name: 'Vorst',
      title: 'Raamfolie in Vorst: de oplossing voor rijwoningen en stedelijke inkijk',
      metaTitle: 'Raamfolie in Vorst, Anderlecht en Sint-Gillis',
      metaDescription:
        'VitraCare plaatst folies en tinten voor beglazing in Vorst: privacy en thermisch comfort aangepast aan de rijwoningen en de stedelijke dichtheid van de gemeente.',
      intro:
        'Vorst is een stedelijkere en dichter bebouwde gemeente dan haar buren, met overwegend rijwoningen en gevels die rechtstreeks op straat uitgeven. Inkijk is er vaak onmiddellijk, of het nu gaat om de buren aan de overkant of voorbijgangers.',
      sections: [
        {
          heading: 'De bebouwing in Vorst',
          paragraphs: [
            'In Vorst bestaan de woningen grotendeels uit rijhuizen, met voorgevels dicht bij het voetpad en ramen die rechtstreeks op straat uitgeven. Deze configuratie, courant in wijken zoals Laag-Vorst of Sint-Denijs, stelt de leefruimtes op het gelijkvloers de hele dag bloot aan de blikken van voorbijgangers.',
          ],
        },
        {
          heading: 'Onze aanbeveling',
          paragraphs: [
            'Voor dit type configuratie is spiegeleffectfolie doorgaans de meest geschikte oplossing: ze blokkeert overdag volledig het zicht vanaf de straat, zonder de gordijnen of rolluiken te moeten sluiten. Voor ruimtes waar privacy op elk moment gegarandeerd moet zijn — badkamer, slaapkamer op het gelijkvloers — blijft matwitte folie de meest betrouwbare optie.',
          ],
        },
        {
          heading: 'Een vaak onderschat voordeel: discretie tegenover ongewenste blikken',
          paragraphs: [
            'In Vorst laat een gelijkvloers dat rechtstreeks op straat uitgeeft elke voorbijganger zien wat er binnen staat — televisie, computer, waardevolle voorwerpen. De Belgische preventiedienst [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (FOD Binnenlandse Zaken) raadt uitdrukkelijk aan om geen waardevolle voorwerpen zichtbaar te laten vanaf buiten. Raamfolie biedt deze discretie permanent, zonder dagelijks uw interieur te moeten herschikken.',
          ],
        },
        {
          heading: 'VitraCare in Vorst',
          paragraphs: [
            'We voeren momenteel lokale sensibiliseringsacties in Vorst, als aanvulling op onze aanwezigheid in de rest van het Brussels gewest.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is de folie doeltreffend voor een rijwoning die rechtstreeks op straat uitgeeft?',
          answer: 'Ja, dit is precies de toepassing waarvoor spiegeleffectfolie het meest gebruikt wordt: u behoudt vrij zicht van binnenuit, terwijl voorbijgangers overdag niet naar binnen kunnen kijken.',
        },
        {
          question: 'Bent u actief in alle wijken van Vorst?',
          answer: 'Ja, onze medewerker is actief in de hele gemeente, van Laag-Vorst tot Sint-Denijs.',
        },
        {
          question: 'Wat gebeurt er \'s avonds, eenmaal de lichten aan zijn?',
          answer: 'Het spiegeleffect werkt enkel overdag. \'s Avonds, als het binnen verlicht is, keert het effect om zoals bij een gewoon raam — een aandachtspunt afhankelijk van de betrokken kamers.',
        },
        {
          question: 'Kan de folie helpen om het risico op inbraak te verminderen?',
          answer: 'Er bestaan twee complementaire aanpakken. De eerste, passief: verminderen wat zichtbaar is vanaf buiten, een principe aanbevolen door de Belgische preventiediensten. De tweede, directer: onze inbraakwerende folie, die het raam niet onbreekbaar maakt maar de glasscherven bij impact vasthoudt, wat een inbraakpoging sterk vertraagt.',
        },
      ],
    },
    {
      slug: 'ixelles',
      hidden: true,
      name: 'Elsene',
      title: 'Raamfolie in Elsene: de oplossing voor herenhuizen en appartementen met inkijk',
      metaTitle: 'Raamfolie in Elsene, Flagey en Kasteleinsplein',
      metaDescription:
        'VitraCare plaatst folies en tinten voor beglazing in Elsene: privacy en thermisch comfort aangepast aan de grote raampartijen van herenhuizen en appartementen nabij de vijvers.',
      intro:
        'Elsene is een van de dichtstbevolkte gemeenten van Brussel: 19e-eeuwse herenhuizen omgebouwd tot appartementen, grote raampartijen rond de vijvers en Flagey, levendige wijken zoals het Kasteleinsplein of Matongé. Deze dichtheid zorgt voor een bijna permanente inkijk, tussen gevels die dicht bij elkaar staan en ramen die elkaar van het ene gebouw naar het andere aankijken.',
      sections: [
        {
          heading: 'De bebouwing in Elsene: waar u rekening mee moet houden',
          paragraphs: [
            'Rond de vijvers van Elsene, het Kasteleinsplein of Flagey bestaat de bebouwing voornamelijk uit grote herenhuizen met brede ramen, vaak opgedeeld in appartementen. Deze grote raampartijen, kenmerkend voor de Brusselse architectuur van het einde van de 19e eeuw, brengen veel licht binnen maar stellen de leefruimtes ook sterk bloot aan de blikken van naburige gebouwen, soms slechts enkele meters verderop aan de overkant van de straat of de binnenplaats.',
          ],
        },
        {
          heading: 'Onze aanbeveling voor appartementen in Elsene',
          paragraphs: [
            'Voor grote ramen met direct zicht op straat of binnenplaats laat spiegeleffectfolie toe om vanbinnen vrij zicht te behouden terwijl u overdag onzichtbaar wordt van buitenaf. Voor badkamers of slaapkamers op het gelijkvloers, vaak erg blootgesteld in dit type gebouw, garandeert matwitte folie permanente privacy, dag en nacht.',
          ],
        },
        {
          heading: 'Een vaak onderschat voordeel: discretie tegenover ongewenste blikken',
          paragraphs: [
            'In een wijk zo dicht als Elsene stellen grote raampartijen het interieur van de woning bloot aan veel blikken van buitenaf, ver voorbij de directe buren. De Belgische preventiedienst [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (FOD Binnenlandse Zaken) raadt uitdrukkelijk aan om geen waardevolle voorwerpen zichtbaar te laten vanaf buiten. Raamfolie biedt deze discretie permanent, zonder dagelijks uw interieur te moeten herschikken.',
          ],
        },
        {
          heading: 'VitraCare in Elsene',
          paragraphs: [
            'We voeren momenteel lokale sensibiliseringsacties in Elsene, als aanvulling op onze aanwezigheid in heel het Brussels gewest. Onze medewerker is actief in alle wijken van de gemeente.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is de folie geschikt voor de grote raampartijen van herenhuizen in Elsene?',
          answer: 'Ja, dit is een van de meest voorkomende toepassingen in Elsene: deze grote ramen lenen zich uitstekend voor spiegeleffectfolie of matwitte folie, naargelang de gewenste privacy.',
        },
        {
          question: 'Bent u actief in alle wijken van Elsene?',
          answer: 'Ja, onze medewerker is actief in de hele gemeente, van de vijvers tot het Kasteleinsplein, via Flagey en Matongé.',
        },
        {
          question: 'Werkt de folie ook voor appartementen in mede-eigendom?',
          answer: 'Ja, de folie wordt langs de binnenzijde van het glas geplaatst en wijzigt het uiterlijk van het gebouw niet. Afhankelijk van de mede-eigendom kan een eenvoudige melding aan de syndicus toch aanbevolen zijn voor de werken.',
        },
        {
          question: 'Kan de folie helpen om het risico op inbraak te verminderen?',
          answer: 'Er bestaan twee complementaire aanpakken. De eerste, passief: verminderen wat zichtbaar is vanaf buiten, een principe aanbevolen door de Belgische preventiediensten. De tweede, directer: onze inbraakwerende folie, die het raam niet onbreekbaar maakt maar de glasscherven bij impact vasthoudt, wat een inbraakpoging sterk vertraagt.',
        },
      ],
    },
    {
      slug: 'schaerbeek',
      hidden: true,
      name: 'Schaarbeek',
      title: 'Raamfolie in Schaarbeek: de oplossing voor herenhuizen en gevels met erkers',
      metaTitle: 'Raamfolie in Schaarbeek, Terdelt en Rigaplein',
      metaDescription:
        'VitraCare plaatst folies en tinten voor beglazing in Schaarbeek: privacy en thermisch comfort aangepast aan de grote erkergevels en de dichtheid van de gemeente.',
      intro:
        'Schaarbeek is de tweede dichtstbevolkte gemeente van Brussel, met een zeer gevarieerde bebouwing: art-decoherenhuizen rond het Rigaplein of Terdelt, typisch Brusselse erkergevels, en dichtere wijken nabij het Noordstation. Inkijk neemt er verschillende vormen aan naargelang de wijk, maar blijft een vrijwel algemene bezorgdheid.',
      sections: [
        {
          heading: 'De bebouwing in Schaarbeek',
          paragraphs: [
            'Schaarbeek onderscheidt zich door de diversiteit van haar bebouwing: grote herenhuizen met erkers en glas-in-loodramen in de wijken Terdelt of Rigaplein, bescheidener rijen rijwoningen in de wijken dichter bij het centrum. De erkers, erg kenmerkend voor de Brusselse architectuur, vermenigvuldigen de aan de straat blootgestelde glasoppervlakken over meerdere hoeken tegelijk.',
          ],
        },
        {
          heading: 'Onze aanbeveling',
          paragraphs: [
            'Voor erkers en grote raampartijen met zicht op straat laat spiegeleffectfolie toe om vanbinnen vrij zicht te behouden terwijl overdag het zicht van buitenaf wordt geblokkeerd. Voor ruimtes die op elk moment volledige privacy vereisen, zoals een badkamer op het gelijkvloers, blijft matwitte folie de meest betrouwbare oplossing.',
          ],
        },
        {
          heading: 'Een vaak onderschat voordeel: discretie tegenover ongewenste blikken',
          paragraphs: [
            'Erkers vermenigvuldigen de kijkhoeken naar binnen en stellen zo in het bijzonder bloot wat zichtbaar is vanaf de straat. De Belgische preventiedienst [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (FOD Binnenlandse Zaken) raadt uitdrukkelijk aan om geen waardevolle voorwerpen zichtbaar te laten vanaf buiten. Raamfolie biedt deze discretie permanent, zonder dagelijks uw interieur te moeten herschikken.',
          ],
        },
        {
          heading: 'VitraCare in Schaarbeek',
          paragraphs: [
            'We voeren momenteel lokale sensibiliseringsacties in Schaarbeek, als aanvulling op onze aanwezigheid in heel het Brussels gewest.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is de folie geschikt voor de typische erkers van Schaarbeek?',
          answer: 'Ja, erkers lenen zich uitstekend voor raamfolie: elk paneel kan afzonderlijk behandeld worden voor een homogeen resultaat over de hele gevel.',
        },
        {
          question: 'Bent u actief in alle wijken van Schaarbeek?',
          answer: 'Ja, onze medewerker is actief in de hele gemeente, van het Rigaplein tot Terdelt, via de wijken nabij het Noordstation.',
        },
        {
          question: 'Beschadigt de folie glas-in-lood of andere decoratieve elementen?',
          answer: 'Nee, de folie wordt op een standaard glasoppervlak geplaatst en tast de omliggende decoratieve elementen niet aan. Voor beglazing met specifieke elementen (lood, gravure) bespreken we dit geval per geval tijdens de opmeting.',
        },
        {
          question: 'Kan de folie helpen om het risico op inbraak te verminderen?',
          answer: 'Er bestaan twee complementaire aanpakken. De eerste, passief: verminderen wat zichtbaar is vanaf buiten, een principe aanbevolen door de Belgische preventiediensten. De tweede, directer: onze inbraakwerende folie, die het raam niet onbreekbaar maakt maar de glasscherven bij impact vasthoudt, wat een inbraakpoging sterk vertraagt.',
        },
      ],
    },
    {
      slug: 'molenbeek-saint-jean',
      name: 'Sint-Jans-Molenbeek',
      hidden: true,
      title: 'Raamfolie in Sint-Jans-Molenbeek: de oplossing voor gerenoveerde huizen langs het kanaal',
      metaTitle: 'Raamfolie in Sint-Jans-Molenbeek',
      metaDescription:
        'VitraCare plaatst folies en tinten voor beglazing in Sint-Jans-Molenbeek: privacy en thermisch comfort aangepast aan de gerenoveerde rijwoningen van de gemeente.',
      intro:
        'Sint-Jans-Molenbeek, ten westen van het kanaal, kent al jaren een renovatiegolf van haar historische rijwoningen. Veel gezinnen vergroten er de gelijkvloerse openingen om meer licht binnen te laten, wat de vraag naar inkijkbescherming vanaf de straat meteen actueel maakt.',
      sections: [
        {
          heading: 'De bebouwing in Sint-Jans-Molenbeek',
          paragraphs: [
            'De gemeente wordt gedomineerd door rijwoningen met smalle gevels, een erfenis van haar industrieel en arbeidersverleden. Veel van deze woningen worden vandaag gerenoveerd, met vergrote openingen op het gelijkvloers voor woonkamer en keuken. Deze evolutie is positief voor de lichtinval, maar stelt de leefruimtes meer bloot aan de straat, in wijken met soms smalle straten.',
          ],
        },
        {
          heading: 'Onze aanbeveling',
          paragraphs: [
            'Voor pas geplaatste grote raampartijen op het gelijkvloers laat spiegeleffectfolie toe om ten volle van het gewonnen licht te genieten zonder het interieur overdag bloot te stellen aan blikken vanaf de straat. Voor ruimtes die op elk moment privacy vereisen, blijft matwitte folie de meest betrouwbare optie.',
          ],
        },
        {
          heading: 'Een vaak onderschat voordeel: discretie tegenover ongewenste blikken',
          paragraphs: [
            'Een pas gerenoveerde grote raampartij op het gelijkvloers, aan een soms smalle straat, stelt het interieur van de woning onmiddellijk bloot aan voorbijgangers. De Belgische preventiedienst [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (FOD Binnenlandse Zaken) raadt uitdrukkelijk aan om geen waardevolle voorwerpen zichtbaar te laten vanaf buiten. Raamfolie biedt deze discretie permanent, zonder dagelijks uw interieur te moeten herschikken.',
          ],
        },
        {
          heading: 'VitraCare in Sint-Jans-Molenbeek',
          paragraphs: [
            'We voeren momenteel lokale sensibiliseringsacties in Sint-Jans-Molenbeek, als aanvulling op onze aanwezigheid in heel het Brussels gewest.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is de folie geschikt voor een recent vergrote raampartij op het gelijkvloers?',
          answer: 'Ja, dit is net een van de gevallen waar de folie het meeste waarde biedt: het gewonnen licht behouden zonder privacy te verliezen.',
        },
        {
          question: 'Bent u actief in alle wijken van Sint-Jans-Molenbeek?',
          answer: 'Ja, onze medewerker is actief in de hele gemeente, van de kanaaloevers tot de meer residentiële wijken.',
        },
        {
          question: 'Moet de folie opnieuw geplaatst worden na renovatiewerken?',
          answer: 'Als de beglazing zelf vervangen wordt tijdens de renovatie, ja, moet de folie opnieuw op het nieuwe glas geplaatst worden. Gaat het om een vergroting van de bestaande opening, dan passen we gewoon de afmetingen aan bij de opmeting.',
        },
        {
          question: 'Kan de folie helpen om het risico op inbraak te verminderen?',
          answer: 'Er bestaan twee complementaire aanpakken. De eerste, passief: verminderen wat zichtbaar is vanaf buiten, een principe aanbevolen door de Belgische preventiediensten. De tweede, directer: onze inbraakwerende folie, die het raam niet onbreekbaar maakt maar de glasscherven bij impact vasthoudt, wat een inbraakpoging sterk vertraagt.',
        },
      ],
    },
    {
      slug: 'etterbeek',
      name: 'Etterbeek',
      hidden: true,
      title: 'Raamfolie in Etterbeek: de oplossing voor appartementen nabij de Europese instellingen',
      metaTitle: 'Raamfolie in Etterbeek, Jourdan en Merode',
      metaDescription:
        'VitraCare plaatst folies en tinten voor beglazing in Etterbeek: privacy aangepast aan de dichte appartementsgebouwen nabij de Europese wijk.',
      intro:
        'Etterbeek, directe buur van de Europese wijk, bestaat grotendeels uit dichte appartementsgebouwen, bewoond door een zeer mobiele bevolking (Europese ambtenaren, studenten, doorreizende huurders). Deze dichtheid en rotatie zorgen voor een permanente inkijk tussen naburige appartementen.',
      sections: [
        {
          heading: 'De bebouwing in Etterbeek',
          paragraphs: [
            'In wijken zoals Jourdan of Merode bestaat de bebouwing voornamelijk uit appartementsgebouwen gebouwd tussen het einde van de 19e eeuw en het midden van de 20e eeuw, met dicht bij elkaar gelegen gevels en ramen die elkaar van het ene gebouw naar het andere aankijken. De hoge huurdichtheid, gelinkt aan de nabijheid van de Europese wijk, versterkt deze dagelijkse inkijk.',
          ],
        },
        {
          heading: 'Onze aanbeveling',
          paragraphs: [
            "Voor woonkamer- of slaapkamerramen met zicht op een nabijgelegen gebouw laat spiegeleffectfolie toe om vanbinnen vrij zicht te behouden terwijl u overdag onzichtbaar wordt van buitenaf. Voor gegarandeerde privacy op elk moment, vooral 's avonds, blijft matwitte folie de meest betrouwbare optie.",
          ],
        },
        {
          heading: 'Een vaak onderschat voordeel: discretie tegenover ongewenste blikken',
          paragraphs: [
            'In een wijk zo dicht als Etterbeek kijken ramen van naburige appartementen elkaar vaak op slechts enkele meters aan. De Belgische preventiedienst [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (FOD Binnenlandse Zaken) raadt uitdrukkelijk aan om geen waardevolle voorwerpen zichtbaar te laten vanaf buiten. Raamfolie biedt deze discretie permanent, zonder dagelijks uw interieur te moeten herschikken.',
          ],
        },
        {
          heading: 'VitraCare in Etterbeek',
          paragraphs: [
            'We voeren momenteel lokale sensibiliseringsacties in Etterbeek, als aanvulling op onze aanwezigheid in heel het Brussels gewest.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is de folie geschikt voor een appartement met direct zicht op een naburig gebouw?',
          answer: 'Ja, dit is een van de meest voorkomende toepassingen in Etterbeek, gezien de nabijheid tussen gebouwen in verschillende wijken van de gemeente.',
        },
        {
          question: 'Bent u actief in alle wijken van Etterbeek?',
          answer: 'Ja, onze medewerker is actief in de hele gemeente, van Jourdan tot Merode.',
        },
        {
          question: 'Werkt de folie ook voor huurappartementen?',
          answer: 'Ja, maar zoals bij elke aanpassing is de toestemming van de eigenaar nodig vóór plaatsing. De folie beschadigt het glas niet en blijft een omkeerbare oplossing.',
        },
        {
          question: 'Kan de folie helpen om het risico op inbraak te verminderen?',
          answer: 'Er bestaan twee complementaire aanpakken. De eerste, passief: verminderen wat zichtbaar is vanaf buiten, een principe aanbevolen door de Belgische preventiediensten. De tweede, directer: onze inbraakwerende folie, die het raam niet onbreekbaar maakt maar de glasscherven bij impact vasthoudt, wat een inbraakpoging sterk vertraagt.',
        },
      ],
    },
    {
      slug: 'woluwe-saint-pierre',
      name: 'Sint-Pieters-Woluwe',
      hidden: true,
      title: 'Raamfolie in Sint-Pieters-Woluwe: de oplossing voor groen omzoomde woningen',
      metaTitle: 'Raamfolie in Sint-Pieters-Woluwe en Woluwepark',
      metaDescription:
        'VitraCare plaatst folies en tinten voor beglazing in Sint-Pieters-Woluwe: thermisch comfort en privacy voor woningen met tuin nabij het Woluwepark.',
      intro:
        'Sint-Pieters-Woluwe is een van de groenste gemeenten van Brussel, georganiseerd rond het Woluwepark en rustige residentiële wijken zoals Kapelleveld. De woningen zijn er vaak omgeven door tuinen en hagen, maar inkijk tussen buurwoningen blijft reëel, vooral in de winter wanneer de begroeiing haar blad verliest.',
      sections: [
        {
          heading: 'De bebouwing in Sint-Pieters-Woluwe',
          paragraphs: [
            'De tuinwijk Kapelleveld, net als de straten rond het Woluwepark, concentreert vrijstaande of halfvrijstaande woningen gebouwd tussen de jaren 1920 en 1960, met tuinen en vaak grote ramen gericht daarop. Het omliggende groen geeft een indruk van rust, maar sluit reële inkijk tussen buurpercelen niet uit, zeker wanneer hagen of bomen in de winter hun blad verliezen.',
          ],
        },
        {
          heading: 'Onze aanbeveling',
          paragraphs: [
            'Voor grote zuid- of westgerichte ramen blijft zonwerende folie de beste keuze: ze vermindert warmte en UV-stralen zonder de kamer te verduisteren of het zicht op de tuin te verliezen. Voor gevels dichter bij de straat of de buren laat spiegeleffectfolie toe om vanbinnen vrij zicht te behouden terwijl u overdag onzichtbaar wordt.',
          ],
        },
        {
          heading: 'Een vaak onderschat voordeel: discretie tegenover ongewenste blikken',
          paragraphs: [
            'Zelfs omgeven door groen blijft een woning een groot deel van het jaar zichtbaar vanuit buurwoningen, vooral in de winter. De Belgische preventiedienst [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (FOD Binnenlandse Zaken) raadt uitdrukkelijk aan om geen waardevolle voorwerpen zichtbaar te laten vanaf buiten. Raamfolie biedt deze discretie permanent, zonder dagelijks uw interieur te moeten herschikken.',
          ],
        },
        {
          heading: 'VitraCare in Sint-Pieters-Woluwe',
          paragraphs: [
            'We voeren momenteel lokale sensibiliseringsacties in Sint-Pieters-Woluwe, als aanvulling op onze aanwezigheid in heel het Brussels gewest.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is de folie nuttig als mijn woning al omgeven is door groen?',
          answer: 'Ja. De begroeiing vermindert inkijk slechts een deel van het jaar — in de winter, wanneer hagen en bomen hun blad verliezen, kan de privacy snel verdwijnen.',
        },
        {
          question: 'Bent u actief in alle wijken van Sint-Pieters-Woluwe?',
          answer: 'Ja, onze medewerker is actief in de hele gemeente, van Kapelleveld tot de omgeving van het Woluwepark.',
        },
        {
          question: 'Is de folie geschikt voor grote ramen gericht op de tuin?',
          answer: 'Ja, dit is een van de meest voorkomende toepassingen: zonwerende folie vermindert warmte en UV-stralen zonder de kamer te verduisteren of het zicht op de tuin te verliezen.',
        },
        {
          question: 'Kan de folie helpen om het risico op inbraak te verminderen?',
          answer: 'Er bestaan twee complementaire aanpakken. De eerste, passief: verminderen wat zichtbaar is vanaf buiten, een principe aanbevolen door de Belgische preventiediensten. De tweede, directer: onze inbraakwerende folie, die het raam niet onbreekbaar maakt maar de glasscherven bij impact vasthoudt, wat een inbraakpoging sterk vertraagt.',
        },
      ],
    },
    {
      slug: 'saint-gilles',
      name: 'Sint-Gillis',
      hidden: true,
      title: 'Raamfolie in Sint-Gillis: de oplossing voor art-nouveauwoningen en smalle straten',
      metaTitle: 'Raamfolie in Sint-Gillis, Barrière en Parvis',
      metaDescription:
        'VitraCare plaatst folies en tinten voor beglazing in Sint-Gillis: privacy aangepast aan de art-nouveauwoningen en de dichtheid van de smalle straten.',
      intro:
        'Sint-Gillis is een van de dichtstbevolkte gemeenten van Brussel, bekend om haar art-nouveau-erfgoed en haar smalle straten rond de Barrière en het Parvis. Veel herenhuizen werden er opgedeeld in appartementen, met ramen die vaak erg dicht bij de straat of buurgebouwen liggen.',
      sections: [
        {
          heading: 'De bebouwing in Sint-Gillis',
          paragraphs: [
            'De bebouwing in Sint-Gillis combineert grote art-nouveau-herenhuizen, vaak opgedeeld in meerdere appartementen, met bijzonder smalle straten, vooral rond de Barrière en het Parvis. Deze configuratie brengt de gevels sterk dicht bij elkaar, en de grote ramen kenmerkend voor de art-nouveau-architectuur stellen het interieur van de woningen sterk bloot aan de straat.',
          ],
        },
        {
          heading: 'Onze aanbeveling',
          paragraphs: [
            'Voor grote ramen op het gelijkvloers of de eerste verdieping dicht bij de straat laat spiegeleffectfolie toe om vanbinnen vrij zicht te behouden terwijl overdag het zicht van buitenaf wordt geblokkeerd. Voor studio\'s en kleine appartementen waar privacy op elk moment gegarandeerd moet zijn, blijft matwitte folie de meest betrouwbare oplossing.',
          ],
        },
        {
          heading: 'Een vaak onderschat voordeel: discretie tegenover ongewenste blikken',
          paragraphs: [
            'In straten zo smal als in Sint-Gillis is een raam op het gelijkvloers of de eerste verdieping vaak zichtbaar vanaf de overkant of het buurpand. De Belgische preventiedienst [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (FOD Binnenlandse Zaken) raadt uitdrukkelijk aan om geen waardevolle voorwerpen zichtbaar te laten vanaf buiten. Raamfolie biedt deze discretie permanent, zonder dagelijks uw interieur te moeten herschikken.',
          ],
        },
        {
          heading: 'VitraCare in Sint-Gillis',
          paragraphs: [
            'We voeren momenteel lokale sensibiliseringsacties in Sint-Gillis, als aanvulling op onze aanwezigheid in heel het Brussels gewest.',
          ],
        },
      ],
      faq: [
        {
          question: 'Beschadigt de folie de grote art-nouveauramen?',
          answer: 'Nee, de folie wordt op een standaard glasoppervlak geplaatst en tast de omliggende decoratieve elementen niet aan. Voor beglazing met specifieke elementen (lood, gravure, glas-in-lood) bespreken we dit geval per geval tijdens de opmeting.',
        },
        {
          question: 'Bent u actief in alle wijken van Sint-Gillis?',
          answer: 'Ja, onze medewerker is actief in de hele gemeente, van de Barrière tot het Parvis.',
        },
        {
          question: 'Is de folie geschikt voor een studio met één groot raam op straat?',
          answer: 'Ja, dit is net een van de gevallen waar de folie het meeste waarde biedt: het licht van één groot raam behouden en tegelijk de privacy bewaren.',
        },
        {
          question: 'Kan de folie helpen om het risico op inbraak te verminderen?',
          answer: 'Er bestaan twee complementaire aanpakken. De eerste, passief: verminderen wat zichtbaar is vanaf buiten, een principe aanbevolen door de Belgische preventiediensten. De tweede, directer: onze inbraakwerende folie, die het raam niet onbreekbaar maakt maar de glasscherven bij impact vasthoudt, wat een inbraakpoging sterk vertraagt.',
        },
      ],
    },
  ],
  EN: [
    {
      slug: 'uccle',
      name: 'Uccle',
      title: 'Window film in Uccle: the solution for houses with gardens and large windows',
      metaTitle: 'Window Film in Uccle, Linkebeek and Rhode-Saint-Genèse',
      metaDescription:
        'VitraCare installs window films and tints in Uccle: privacy, thermal comfort and UV protection, suited to the houses with gardens and large windows typical of the commune.',
      intro:
        "Uccle is one of the most residential communes on the edge of Brussels: detached houses, gardens, large windows facing the garden. Yet being overlooked remains a real issue even with a garden, and summer heat can quickly make a south-facing living room unbearable. Here's how window film addresses both local realities.",
      sections: [
        {
          heading: 'Housing in Uccle: what matters when choosing a film',
          paragraphs: [
            "In neighbourhoods like Fort-Jaco, Saint-Job or Calevoet, Uccle's housing is dominated by detached or semi-detached houses, often built between the wars, with large windows facing the garden. This architecture is pleasant, but creates two common problems: intense summer heat in south- or west-facing rooms, and being overlooked by neighbouring properties despite having a garden — plots are often close to one another.",
          ],
        },
        {
          heading: 'Our recommendation for Uccle homes',
          paragraphs: [
            'For large south- or west-facing windows, solar tint is generally the most relevant choice: it reduces heat and UV without losing transparency or darkening the room. For front façades closer to the street or neighbours, mirror effect film keeps the view clear from inside while becoming invisible from outside during the day.',
          ],
        },
        {
          heading: 'An often-overlooked benefit: staying discreet from prying eyes',
          paragraphs: [
            "Large windows facing the garden, typical of Uccle houses, also expose the inside of the home to outside view — not just from well-meaning neighbours. The Belgian crime prevention service [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (part of the Federal Public Service Home Affairs) explicitly recommends not leaving valuables visible from outside. Window film provides this discretion continuously, without having to rearrange your interior every day.",
          ],
        },
        {
          heading: 'VitraCare in Uccle',
          paragraphs: [
            'We are currently running local outreach in Uccle, alongside our presence across the wider Brussels region. Our collaborator works in every neighbourhood of the commune.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is the film suitable for the large windows typical of Uccle houses?',
          answer: 'Yes, this is actually one of the most common uses of window film. Solar tint is particularly well suited to large sun-exposed glass surfaces, without reducing transparency.',
        },
        {
          question: 'Do you work in every neighbourhood of Uccle?',
          answer: 'Yes, our collaborator covers the whole commune, from Fort-Jaco to Saint-Job, via Calevoet and central Uccle.',
        },
        {
          question: 'Is the film suitable for a house with a garden, even without obvious overlooking?',
          answer: 'Yes. Even with a garden, neighbouring properties or the street often remain visible from certain rooms — the film preserves that privacy without closing the shutters during the day.',
        },
        {
          question: 'Can the film help reduce the risk of burglary?',
          answer: "There are two complementary approaches. The first, passive: reducing what's visible from outside, a principle recommended by Belgian crime prevention services. The second, more direct: our anti-burglary film, which doesn't make a window unbreakable but holds the glass shards together on impact, significantly slowing down a break-in attempt.",
        },
      ],
    },
    {
      slug: 'waterloo',
      name: 'Waterloo',
      title: 'Window film in Waterloo: comfort and privacy for larger properties',
      metaTitle: "Window Film in Waterloo, Braine-l'Alleud and Lasne",
      metaDescription:
        'VitraCare installs window films and tints in Waterloo (Walloon Brabant): privacy, thermal comfort and UV protection for villas and large glass surfaces.',
      intro:
        'Waterloo is a residential commune in Walloon Brabant, known for its spacious villas, large tree-lined properties, and proximity to the Sonian Forest. Homes here are often fitted with large windows, conservatories or glass extensions — surfaces that benefit particularly from window film.',
      sections: [
        {
          heading: 'Housing in Waterloo',
          paragraphs: [
            'Unlike the denser communes of Brussels, Waterloo is characterised by larger plots and more space between houses. Being overlooked is less systematic, but large glass surfaces — conservatories, sliding bay windows, glass extensions — are very common and expose living spaces to a lot of heat in summer.',
          ],
        },
        {
          heading: 'Our recommendation',
          paragraphs: [
            'For conservatories and large windows, solar tint keeps these rooms liveable year-round without having to close the blinds in the middle of the day. For front façades or properties closer to the street, mirror effect film or matte white film remain relevant depending on the level of privacy wanted.',
          ],
        },
        {
          heading: 'An often-overlooked benefit: staying discreet from prying eyes',
          paragraphs: [
            "Larger properties, sometimes more secluded and with less passing traffic than in dense urban areas, also make what's visible through their large windows or conservatories more noticeable to anyone who does pass by. The Belgian crime prevention service [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (part of the Federal Public Service Home Affairs) explicitly recommends not leaving valuables visible from outside. Window film provides this discretion continuously, without having to rearrange your interior every day.",
          ],
        },
        {
          heading: 'VitraCare in Waterloo',
          paragraphs: [
            'We are currently expanding our presence to Waterloo, alongside our activity across the Brussels region. Our collaborator travels throughout the commune.',
          ],
        },
      ],
      faq: [
        {
          question: 'Do you work outside the Brussels region, in Waterloo?',
          answer: 'Yes, we work in Waterloo and Walloon Brabant, just as we do across the Brussels periphery.',
        },
        {
          question: 'Is the film suitable for conservatories and glass extensions, common in Waterloo?',
          answer: 'Absolutely — this is actually one of the uses where the film brings the most comfort: a south-facing conservatory can become barely liveable in summer without solar protection.',
        },
        {
          question: 'Do I need to be overlooked for the film to be useful?',
          answer: 'No. Even without direct overlooking, solar tint remains worthwhile for its effect on heat and UV, independent of any privacy consideration.',
        },
        {
          question: 'Can the film help reduce the risk of burglary?',
          answer: "There are two complementary approaches. The first, passive: reducing what's visible from outside, a principle recommended by Belgian crime prevention services. The second, more direct: our anti-burglary film, which doesn't make a window unbreakable but holds the glass shards together on impact, significantly slowing down a break-in attempt.",
        },
      ],
    },
    {
      slug: 'forest',
      name: 'Forest',
      title: 'Window film in Forest: the solution for terraced houses and urban overlooking',
      metaTitle: 'Window Film in Forest, Anderlecht and Saint-Gilles',
      metaDescription:
        'VitraCare installs window films and tints in Forest: privacy and thermal comfort suited to the terraced houses and urban density of the commune.',
      intro:
        'Forest is a more urban, denser commune than its neighbours, with a majority of terraced houses and façades opening directly onto the street. Being overlooked is often immediate, whether by neighbours across the way or passers-by.',
      sections: [
        {
          heading: 'Housing in Forest',
          paragraphs: [
            'In Forest, most houses are terraced, with front façades close to the pavement and windows opening directly onto the street. This layout, common in areas like Bas de Forest or Saint-Denis, exposes ground-floor living spaces to passers-by\'s view all day long.',
          ],
        },
        {
          heading: 'Our recommendation',
          paragraphs: [
            'For this type of layout, mirror effect film is generally the most suitable solution: it fully blocks the view from the street during the day, without having to close the curtains or shutters. For rooms where privacy needs to be guaranteed at all times — a bathroom, a ground-floor bedroom — matte white film remains the most reliable option.',
          ],
        },
        {
          heading: 'An often-overlooked benefit: staying discreet from prying eyes',
          paragraphs: [
            "In Forest, a ground floor facing directly onto the street lets every passer-by see what's inside — a TV, a computer, valuables. The Belgian crime prevention service [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (part of the Federal Public Service Home Affairs) explicitly recommends not leaving valuables visible from outside. Window film provides this discretion continuously, without having to rearrange your interior every day.",
          ],
        },
        {
          heading: 'VitraCare in Forest',
          paragraphs: [
            'We are currently running local outreach in Forest, alongside our presence across the rest of the Brussels region.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is the film effective for a terraced house facing directly onto the street?',
          answer: "Yes, this is exactly the use case mirror effect film is most used for: you keep a clear view from inside while preventing passers-by from seeing in during the day.",
        },
        {
          question: 'Do you work in every neighbourhood of Forest?',
          answer: 'Yes, our collaborator covers the whole commune, from Bas de Forest to Saint-Denis.',
        },
        {
          question: 'What happens in the evening, once the lights are on?',
          answer: 'The mirror effect only works during the day. In the evening, if the interior is lit, the effect reverses just like with any ordinary window — worth keeping in mind depending on the room.',
        },
        {
          question: 'Can the film help reduce the risk of burglary?',
          answer: "There are two complementary approaches. The first, passive: reducing what's visible from outside, a principle recommended by Belgian crime prevention services. The second, more direct: our anti-burglary film, which doesn't make a window unbreakable but holds the glass shards together on impact, significantly slowing down a break-in attempt.",
        },
      ],
    },
    {
      slug: 'ixelles',
      hidden: true,
      name: 'Ixelles',
      title: 'Window film in Ixelles: the solution for townhouses and apartments with overlooking',
      metaTitle: 'Window Film in Ixelles, Flagey and Chatelain',
      metaDescription:
        'VitraCare installs window films and tints in Ixelles: privacy and thermal comfort suited to the large windows of townhouses and apartments near the ponds.',
      intro:
        "Ixelles is one of the most densely populated communes in Brussels: 19th-century townhouses converted into apartments, large windows around the ponds and Flagey, lively neighbourhoods like Chatelain or Matongé. This density creates near-constant overlooking, with façades close together and windows facing each other from one building to the next.",
      sections: [
        {
          heading: 'Housing in Ixelles: what matters when choosing a film',
          paragraphs: [
            'Around the Ixelles ponds, Chatelain or Flagey, housing is dominated by large townhouses with wide windows, often split into apartments. These large windows, typical of late 19th-century Brussels architecture, bring in plenty of light but also strongly expose living spaces to the view of neighbouring buildings, sometimes just metres away across the street or the inner courtyard.',
          ],
        },
        {
          heading: 'Our recommendation for Ixelles apartments',
          paragraphs: [
            'For large windows facing the street or a courtyard with direct overlooking, mirror effect film keeps the view clear from inside while becoming invisible from outside during the day. For ground-floor bathrooms or bedrooms, often very exposed in this type of building, matte white film guarantees constant privacy, day and night.',
          ],
        },
        {
          heading: 'An often-overlooked benefit: staying discreet from prying eyes',
          paragraphs: [
            "In a neighbourhood as dense as Ixelles, large windows expose the inside of the home to many outside views, well beyond direct neighbours. The Belgian crime prevention service [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (part of the Federal Public Service Home Affairs) explicitly recommends not leaving valuables visible from outside. Window film provides this discretion continuously, without having to rearrange your interior every day.",
          ],
        },
        {
          heading: 'VitraCare in Ixelles',
          paragraphs: [
            'We are currently running local outreach in Ixelles, alongside our presence across the wider Brussels region. Our collaborator works in every neighbourhood of the commune.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is the film suitable for the large windows of Ixelles townhouses?',
          answer: "Yes, this is one of the most common uses in Ixelles: these large windows suit mirror effect or matte white film well, depending on the privacy level wanted.",
        },
        {
          question: 'Do you work in every neighbourhood of Ixelles?',
          answer: 'Yes, our collaborator covers the whole commune, from the ponds to Chatelain, via Flagey and Matongé.',
        },
        {
          question: 'Does the film also work for apartments in co-ownership?',
          answer: "Yes, the film is applied on the inside of the glazing and doesn't change the building's outside appearance. Depending on the co-ownership, a simple notice to the syndic may still be recommended before works.",
        },
        {
          question: 'Can the film help reduce the risk of burglary?',
          answer: "There are two complementary approaches. The first, passive: reducing what's visible from outside, a principle recommended by Belgian crime prevention services. The second, more direct: our anti-burglary film, which doesn't make a window unbreakable but holds the glass shards together on impact, significantly slowing down a break-in attempt.",
        },
      ],
    },
    {
      slug: 'schaerbeek',
      hidden: true,
      name: 'Schaerbeek',
      title: 'Window film in Schaerbeek: the solution for townhouses and bow-window façades',
      metaTitle: 'Window Film in Schaerbeek, Terdelt and Square Riga',
      metaDescription:
        'VitraCare installs window films and tints in Schaerbeek: privacy and thermal comfort suited to the large bow-window façades and density of the commune.',
      intro:
        "Schaerbeek is the second most populous commune in Brussels, with very varied housing: Art Deco townhouses around Square Riga or Terdelt, bow-window façades typical of Brussels, and denser neighbourhoods near Gare du Nord. Overlooking takes different forms depending on the area, but remains an almost universal concern.",
      sections: [
        {
          heading: 'Housing in Schaerbeek',
          paragraphs: [
            'Schaerbeek stands out for the diversity of its housing: large townhouses with bow windows and stained glass in the Terdelt or Square Riga areas, more modest rows of terraced houses closer to the centre. Bow windows, very characteristic of Brussels architecture, multiply the glass surfaces exposed to the street across several angles at once.',
          ],
        },
        {
          heading: 'Our recommendation',
          paragraphs: [
            'For bow windows and large street-facing façades, mirror effect film keeps the view clear from inside while blocking the view from outside during the day. For rooms needing total privacy at all times, such as a ground-floor bathroom, matte white film remains the most reliable solution.',
          ],
        },
        {
          heading: 'An often-overlooked benefit: staying discreet from prying eyes',
          paragraphs: [
            "Bow windows, by multiplying the angles of view inward, particularly expose what's visible from the street. The Belgian crime prevention service [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (part of the Federal Public Service Home Affairs) explicitly recommends not leaving valuables visible from outside. Window film provides this discretion continuously, without having to rearrange your interior every day.",
          ],
        },
        {
          heading: 'VitraCare in Schaerbeek',
          paragraphs: [
            'We are currently running local outreach in Schaerbeek, alongside our presence across the wider Brussels region.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is the film suitable for the bow windows typical of Schaerbeek?',
          answer: 'Yes, bow windows suit window film very well: each panel can be treated individually for a consistent result across the whole façade.',
        },
        {
          question: 'Do you work in every neighbourhood of Schaerbeek?',
          answer: 'Yes, our collaborator covers the whole commune, from Square Riga to Terdelt, via the neighbourhoods near Gare du Nord.',
        },
        {
          question: 'Does the film damage stained glass or other decorative elements?',
          answer: "No, the film is applied to a standard glass surface and doesn't affect surrounding decorative elements. For glazing with specific features (leading, engraving), we discuss it case by case during the measurement visit.",
        },
        {
          question: 'Can the film help reduce the risk of burglary?',
          answer: "There are two complementary approaches. The first, passive: reducing what's visible from outside, a principle recommended by Belgian crime prevention services. The second, more direct: our anti-burglary film, which doesn't make a window unbreakable but holds the glass shards together on impact, significantly slowing down a break-in attempt.",
        },
      ],
    },
    {
      slug: 'molenbeek-saint-jean',
      name: 'Molenbeek-Saint-Jean',
      hidden: true,
      title: 'Window film in Molenbeek-Saint-Jean: the solution for renovated houses along the canal',
      metaTitle: 'Window Film in Molenbeek-Saint-Jean',
      metaDescription:
        'VitraCare installs window films and tints in Molenbeek-Saint-Jean: privacy and thermal comfort suited to the renovated terraced houses of the commune.',
      intro:
        "Molenbeek-Saint-Jean, west of the canal, has seen a wave of renovation of its historic terraced houses for several years. Many households are enlarging ground-floor openings to gain light, which directly raises the question of overlooking from the street.",
      sections: [
        {
          heading: 'Housing in Molenbeek-Saint-Jean',
          paragraphs: [
            "The commune is dominated by terraced houses with narrow façades, a legacy of its industrial and working-class past. Many of these houses are now being renovated, with enlarged ground-floor openings for living rooms and kitchens. This change is good for natural light, but exposes living spaces more to the street, in areas with sometimes narrow roads.",
          ],
        },
        {
          heading: 'Our recommendation',
          paragraphs: [
            'For newly installed large ground-floor windows, mirror effect film lets you fully enjoy the extra light gained without exposing the interior to street view during the day. For rooms needing privacy at all times, matte white film remains the most reliable option.',
          ],
        },
        {
          heading: 'An often-overlooked benefit: staying discreet from prying eyes',
          paragraphs: [
            "A newly renovated large ground-floor window, on a sometimes narrow street, immediately exposes the inside of the home to passers-by. The Belgian crime prevention service [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (part of the Federal Public Service Home Affairs) explicitly recommends not leaving valuables visible from outside. Window film provides this discretion continuously, without having to rearrange your interior every day.",
          ],
        },
        {
          heading: 'VitraCare in Molenbeek-Saint-Jean',
          paragraphs: [
            'We are currently running local outreach in Molenbeek-Saint-Jean, alongside our presence across the wider Brussels region.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is the film suitable for a recently enlarged ground-floor window?',
          answer: "Yes, this is exactly one of the cases where the film adds the most value: keeping the extra light without losing privacy.",
        },
        {
          question: 'Do you work in every neighbourhood of Molenbeek-Saint-Jean?',
          answer: 'Yes, our collaborator covers the whole commune, from the canal banks to the more residential areas.',
        },
        {
          question: 'Does the film need to be reapplied after renovation work?',
          answer: "If the glazing itself is replaced during the renovation, yes, the film needs to be reapplied to the new glass. If it's an enlargement of the existing opening, we simply adjust the dimensions during the measurement visit.",
        },
        {
          question: 'Can the film help reduce the risk of burglary?',
          answer: "There are two complementary approaches. The first, passive: reducing what's visible from outside, a principle recommended by Belgian crime prevention services. The second, more direct: our anti-burglary film, which doesn't make a window unbreakable but holds the glass shards together on impact, significantly slowing down a break-in attempt.",
        },
      ],
    },
    {
      slug: 'etterbeek',
      name: 'Etterbeek',
      hidden: true,
      title: 'Window film in Etterbeek: the solution for apartments near the European institutions',
      metaTitle: 'Window Film in Etterbeek, Jourdan and Merode',
      metaDescription:
        'VitraCare installs window films and tints in Etterbeek: privacy suited to the dense apartment buildings near the European quarter.',
      intro:
        "Etterbeek, a direct neighbour of the European quarter, is largely made up of dense apartment buildings, occupied by a highly mobile population (EU officials, students, short-term tenants). This density and turnover create near-constant overlooking between neighbouring apartments.",
      sections: [
        {
          heading: 'Housing in Etterbeek',
          paragraphs: [
            'In areas like Jourdan or Merode, housing is dominated by apartment buildings built between the late 19th and mid-20th centuries, with façades close together and windows facing each other from one building to the next. The high rental density, linked to the proximity of the European quarter, sharpens this day-to-day overlooking.',
          ],
        },
        {
          heading: 'Our recommendation',
          paragraphs: [
            'For living-room or bedroom windows facing a nearby building, mirror effect film keeps the view clear from inside while becoming invisible from outside during the day. For privacy guaranteed at all times, especially in the evening, matte white film remains the most reliable option.',
          ],
        },
        {
          heading: 'An often-overlooked benefit: staying discreet from prying eyes',
          paragraphs: [
            "In a neighbourhood as dense as Etterbeek, windows of neighbouring apartments often face each other just metres apart. The Belgian crime prevention service [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (part of the Federal Public Service Home Affairs) explicitly recommends not leaving valuables visible from outside. Window film provides this discretion continuously, without having to rearrange your interior every day.",
          ],
        },
        {
          heading: 'VitraCare in Etterbeek',
          paragraphs: [
            'We are currently running local outreach in Etterbeek, alongside our presence across the wider Brussels region.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is the film suitable for an apartment with direct overlooking from a neighbouring building?',
          answer: 'Yes, this is one of the most common uses in Etterbeek, given how close buildings are in several areas of the commune.',
        },
        {
          question: 'Do you work in every neighbourhood of Etterbeek?',
          answer: 'Yes, our collaborator covers the whole commune, from Jourdan to Merode.',
        },
        {
          question: 'Does the film also work for rented apartments?',
          answer: "Yes, but as with any fitting, the landlord's agreement is needed before installation. The film doesn't damage the glazing and remains a reversible solution.",
        },
        {
          question: 'Can the film help reduce the risk of burglary?',
          answer: "There are two complementary approaches. The first, passive: reducing what's visible from outside, a principle recommended by Belgian crime prevention services. The second, more direct: our anti-burglary film, which doesn't make a window unbreakable but holds the glass shards together on impact, significantly slowing down a break-in attempt.",
        },
      ],
    },
    {
      slug: 'woluwe-saint-pierre',
      name: 'Woluwe-Saint-Pierre',
      hidden: true,
      title: 'Window film in Woluwe-Saint-Pierre: the solution for homes bordered by greenery',
      metaTitle: 'Window Film in Woluwe-Saint-Pierre and Woluwe Park',
      metaDescription:
        'VitraCare installs window films and tints in Woluwe-Saint-Pierre: thermal comfort and privacy for homes with gardens near Woluwe Park.',
      intro:
        'Woluwe-Saint-Pierre is one of the greenest communes in Brussels, built around Woluwe Park and quiet residential areas like Kapelleveld. Homes here are often surrounded by gardens and hedges, but overlooking between neighbouring properties remains real, especially in winter when vegetation loses its leaves.',
      sections: [
        {
          heading: 'Housing in Woluwe-Saint-Pierre',
          paragraphs: [
            'The Kapelleveld garden-city area, as well as the streets around Woluwe Park, feature detached or semi-detached houses built between the 1920s and 1960s, with gardens and often large windows facing them. The surrounding greenery gives an impression of calm, but doesn\'t rule out real overlooking between neighbouring plots, especially when hedges or trees lose their leaves in winter.',
          ],
        },
        {
          heading: 'Our recommendation',
          paragraphs: [
            'For large south- or west-facing windows, solar tint remains the most relevant choice: it reduces heat and UV without darkening the room or losing the view of the garden. For façades closer to the street or neighbours, mirror effect film keeps the view clear from inside while becoming invisible during the day.',
          ],
        },
        {
          heading: 'An often-overlooked benefit: staying discreet from prying eyes',
          paragraphs: [
            "Even surrounded by greenery, a house remains visible from neighbouring properties for a good part of the year, especially in winter. The Belgian crime prevention service [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (part of the Federal Public Service Home Affairs) explicitly recommends not leaving valuables visible from outside. Window film provides this discretion continuously, without having to rearrange your interior every day.",
          ],
        },
        {
          heading: 'VitraCare in Woluwe-Saint-Pierre',
          paragraphs: [
            'We are currently running local outreach in Woluwe-Saint-Pierre, alongside our presence across the wider Brussels region.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is the film useful if my house is already surrounded by greenery?',
          answer: 'Yes. Vegetation reduces overlooking for only part of the year — in winter, when hedges and trees lose their leaves, privacy can quickly disappear.',
        },
        {
          question: 'Do you work in every neighbourhood of Woluwe-Saint-Pierre?',
          answer: 'Yes, our collaborator covers the whole commune, from Kapelleveld to the area around Woluwe Park.',
        },
        {
          question: 'Is the film suitable for large windows facing the garden?',
          answer: 'Yes, this is one of the most common uses: solar tint reduces heat and UV without darkening the room or losing the view of the garden.',
        },
        {
          question: 'Can the film help reduce the risk of burglary?',
          answer: "There are two complementary approaches. The first, passive: reducing what's visible from outside, a principle recommended by Belgian crime prevention services. The second, more direct: our anti-burglary film, which doesn't make a window unbreakable but holds the glass shards together on impact, significantly slowing down a break-in attempt.",
        },
      ],
    },
    {
      slug: 'saint-gilles',
      name: 'Saint-Gilles',
      hidden: true,
      title: 'Window film in Saint-Gilles: the solution for Art Nouveau houses and narrow streets',
      metaTitle: 'Window Film in Saint-Gilles, Barrière and Parvis',
      metaDescription:
        'VitraCare installs window films and tints in Saint-Gilles: privacy suited to the Art Nouveau houses and narrow-street density of the commune.',
      intro:
        'Saint-Gilles is one of the densest communes in Brussels, known for its Art Nouveau heritage and narrow streets around Barrière and Parvis. Many townhouses have been split into apartments, with windows often very close to the street or neighbouring buildings.',
      sections: [
        {
          heading: 'Housing in Saint-Gilles',
          paragraphs: [
            'Housing in Saint-Gilles mixes large Art Nouveau townhouses, often split into several apartments, with particularly narrow streets, especially around Barrière and Parvis. This layout brings façades close together, and the large windows characteristic of Art Nouveau architecture expose the inside of homes to the street.',
          ],
        },
        {
          heading: 'Our recommendation',
          paragraphs: [
            'For large ground-floor or first-floor windows close to the street, mirror effect film keeps the view clear from inside while blocking the view from outside during the day. For studios and small apartments where privacy needs to be guaranteed at all times, matte white film remains the most reliable solution.',
          ],
        },
        {
          heading: 'An often-overlooked benefit: staying discreet from prying eyes',
          paragraphs: [
            "In streets as narrow as those in Saint-Gilles, a ground-floor or first-floor window is often visible from across the street or a neighbouring building. The Belgian crime prevention service [BeSafe](https://www.besafe.be/fr/vol-fraude/prevention-cambriolage) (part of the Federal Public Service Home Affairs) explicitly recommends not leaving valuables visible from outside. Window film provides this discretion continuously, without having to rearrange your interior every day.",
          ],
        },
        {
          heading: 'VitraCare in Saint-Gilles',
          paragraphs: [
            'We are currently running local outreach in Saint-Gilles, alongside our presence across the wider Brussels region.',
          ],
        },
      ],
      faq: [
        {
          question: 'Does the film damage large Art Nouveau windows?',
          answer: "No, the film is applied to a standard glass surface and doesn't affect surrounding decorative elements. For glazing with specific features (leading, engraving, stained glass), we discuss it case by case during the measurement visit.",
        },
        {
          question: 'Do you work in every neighbourhood of Saint-Gilles?',
          answer: 'Yes, our collaborator covers the whole commune, from Barrière to Parvis.',
        },
        {
          question: 'Is the film suitable for a studio with a single large street-facing window?',
          answer: 'Yes, this is exactly one of the cases where the film adds the most value: keeping the light from one large window while preserving privacy.',
        },
        {
          question: 'Can the film help reduce the risk of burglary?',
          answer: "There are two complementary approaches. The first, passive: reducing what's visible from outside, a principle recommended by Belgian crime prevention services. The second, more direct: our anti-burglary film, which doesn't make a window unbreakable but holds the glass shards together on impact, significantly slowing down a break-in attempt.",
        },
      ],
    },
  ],
};
