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
      metaTitle: 'Film pour vitrage à Uccle — VitraCare',
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
            "Nous menons actuellement des actions de sensibilisation locale à Uccle, en complément de notre présence dans toute la région bruxelloise. Notre installateur partenaire intervient dans tous les quartiers de la commune.",
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
          answer: "Oui, notre installateur partenaire intervient dans l'ensemble de la commune, du Fort-Jaco à Saint-Job en passant par Calevoet et le centre d'Uccle.",
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
      metaTitle: 'Film pour vitrage à Waterloo — VitraCare',
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
            "Nous étendons actuellement notre présence à Waterloo, en complément de notre activité dans la région bruxelloise. Notre installateur partenaire se déplace dans toute la commune.",
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
      metaTitle: 'Film pour vitrage à Forest — VitraCare',
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
          answer: "Oui, notre installateur partenaire intervient dans l'ensemble de la commune, du Bas de Forest à Saint-Denis.",
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
  ],
  NL: [
    {
      slug: 'uccle',
      name: 'Ukkel',
      title: 'Raamfolie in Ukkel: de oplossing voor huizen met tuin en grote raampartijen',
      metaTitle: 'Raamfolie in Ukkel — VitraCare',
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
            'We voeren momenteel lokale sensibiliseringsacties in Ukkel, als aanvulling op onze aanwezigheid in heel het Brussels gewest. Onze partnerinstallateur is actief in alle wijken van de gemeente.',
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
          answer: 'Ja, onze partnerinstallateur is actief in de hele gemeente, van Fort-Jaco tot Sint-Job, via Kalevoet en het centrum van Ukkel.',
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
      metaTitle: 'Raamfolie in Waterloo — VitraCare',
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
            'We breiden onze aanwezigheid momenteel uit naar Waterloo, als aanvulling op onze activiteit in het Brussels gewest. Onze partnerinstallateur verplaatst zich naar de hele gemeente.',
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
      metaTitle: 'Raamfolie in Vorst — VitraCare',
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
          answer: 'Ja, onze partnerinstallateur is actief in de hele gemeente, van Laag-Vorst tot Sint-Denijs.',
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
  ],
  EN: [
    {
      slug: 'uccle',
      name: 'Uccle',
      title: 'Window film in Uccle: the solution for houses with gardens and large windows',
      metaTitle: 'Window Film in Uccle — VitraCare',
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
            'We are currently running local outreach in Uccle, alongside our presence across the wider Brussels region. Our partner installer works in every neighbourhood of the commune.',
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
          answer: 'Yes, our partner installer covers the whole commune, from Fort-Jaco to Saint-Job, via Calevoet and central Uccle.',
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
      metaTitle: 'Window Film in Waterloo — VitraCare',
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
            'We are currently expanding our presence to Waterloo, alongside our activity across the Brussels region. Our partner installer travels throughout the commune.',
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
      metaTitle: 'Window Film in Forest — VitraCare',
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
          answer: 'Yes, our partner installer covers the whole commune, from Bas de Forest to Saint-Denis.',
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
  ],
};
