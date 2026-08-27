export type Lang = 'FR' | 'NL' | 'EN';

export const translations = {
  FR: {
    nav: { home: 'Accueil', services: 'Services', pricing: 'Produit', realisations: 'Réalisations', about: 'Avis', contact: 'Contact' },
    hero: { title1: 'Libérons tout le', title2: 'potentiel de', title3: 'vos Vitrages', subtitle: 'Et gagnez plus en', quote: 'DEVIS', getQuote: 'OBTENIR UN DEVIS' },
    words: ['intimité', 'sécurité', 'préservation', 'isolation'],
    features: {
      title: 'La lumière entre, rien d\'autre',
      f1_title: 'Retrouvez votre\nintimité',
      f1_desc: 'Le film bloque les regards extérieurs tout en laissant passer la lumière, pour une intimité ajustable pièce par pièce selon l\'opacité choisie.',
      f2_title: 'Protégez votre\nfamille',
      f2_desc: 'Le film renforce vos vitrages et retient le verre en cas de bris, retardant les intrusions pour gagner de précieuses secondes quand elles comptent.',
      f3_title: 'Préservez vos\nbiens',
      f3_desc: 'Le film filtre plus de 99 % des rayons UV pour protéger vos sols, vos meubles et vos œuvres de la décoloration, et préserver l\'éclat de votre intérieur.',
      f4_title: 'Une température\nmaîtrisée',
      f4_desc: 'Le film bloque jusqu\'à 80 % de la chaleur solaire infrarouge pour un intérieur plus frais en été, mieux isolé en hiver et confortable toute l\'année.'
    },
    protection: {
      title: 'Une protection\ninvisible pour\nvotre maison.',
      subtitle: 'Films pour vitrages sur mesure.'
    },
    slider: { before: 'AVANT', after: 'APRÈS' },
    realisations: {
      title: 'Nos réalisations',
      ctaTitle: 'Un projet similaire en tête ?',
      ctaSubtitle: 'Demandez votre devis gratuit sous 24h, ou contactez-nous directement pour en discuter.'
    },
    teintes: {
      title: 'Nos teintes',
      miroir_title: 'Teint effet miroir',
      miroir_desc: 'Film miroir sans tain pour une intimité totale. Bloque 99% des UV et réduit considérablement la chaleur.',
      solaire_title: 'Teinte solaire',
      solaire_desc: 'Réduction de la chaleur et des UV pour un confort optimal en intérieur.',
      mat_title: 'Teint blanc mat',
      mat_desc: 'Film blanc mat pour une intimité élégante et un style épuré sur vos vitrages.',
      swipeHint: '← Glissez pour voir les 3 teintes →'
    },
    reviews: {
      title: 'Avis',
      r1: 'Le salon plein sud est enfin vivable en été !',
      r2: 'Impossible de savoir si nous sommes là de l\'extérieur. C\'est exactement ce qu\'on voulait.',
      r3: 'Nous vivons enfin rideaux ouverts, sans nous sentir observés.',
      r4: 'Nos toiles ne craignent plus le soleil. Un vrai soulagement !',
      more: 'EN SAVOIR PLUS',
      swipeHint: '← Glissez pour voir tous les avis →'
    },
    strip: {
      f1_title: 'Sur mesure', f1_desc: 'étudié fenêtre\npar fenêtre',
      f2_title: 'Film garanti', f2_desc: 'Jusqu\'à 10 ans\npar le fabricant',
      f3_title: 'Pose garantie', f3_desc: 'Jusqu\'à 1 an\npar VitraCare',
      f4_title: 'Devis sous 24h', f4_desc: 'Contacter un expert\nsans engagement'
    },
    map: {
      title: 'Partout à Bruxelles\net en périphérie',
      subtitle: 'Nous développons un service de haute qualité\npartout à Bruxelles et ses alentours',
      locations: ['Centre', 'Ixelles', 'Uccle', 'Woluwe', 'Evere', 'Auderghem', 'Etterbeek', 'Forest', 'Waterloo', 'Linkebeek', 'Kraainem', 'Et partout\nautour'],
      swipeHint: '← Glissez pour voir toutes les communes →'
    },
    devis: {
      title: 'Obtenez votre devis',
      subtitle: 'Découvrez le potentiel de vos vitrages : plus d\'intimité, moins de chaleur, et une protection durable pour votre intérieur.',
      reassurance: 'Devis 100% gratuit et sans engagement — réponse sous 24h',
      success: 'Message envoyé ! Nous vous recontacterons dans les 24 heures.',
      form_name: 'Nom / Prénom',
      form_address: 'Adresse',
      form_zip: 'Code postal',
      form_email: 'Email',
      form_phone: 'Téléphone',
      form_message: 'Expliquez-nous votre demande',
      form_message_placeholder: 'Nombre de fenêtres, film souhaité, problème actuellement rencontré...',
      form_photos: 'Ajouter des photos (optionnel)',
      form_privacy1: 'J\'ai lu et j\'accepte votre ',
      form_privacy2: 'politique de confidentialité',
      info_text: 'Remplissez vos coordonnées et nous vous recontacterons dans les 24h.',
      form_error: 'Une erreur est survenue. Réessayez, ou appelez-nous directement au 0489 60 70 74.',
      photos_too_large: 'Les photos sont encore trop volumineuses une fois compressées. Réduisez le nombre de photos.',
      required_note: '* Champs obligatoires',
      required_error: 'Merci de remplir les champs obligatoires (*).',
      compressing: 'Traitement des photos...',
      remove_photo: 'Retirer la photo'
    },
    contactPage: {
      title: 'Contactez-nous',
      subtitle: 'Une question ? Envoyez-nous un message ou contactez-nous directement.',
      phone: 'Téléphone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      form_name: 'Nom / Prénom',
      form_email: 'Email',
      form_message: 'Votre message',
      submit: 'Envoyer le message',
      success: 'Message envoyé ! Nous vous répondons rapidement.',
      form_error: 'Une erreur est survenue. Réessayez, ou appelez-nous directement au 0489 60 70 74.',
      required_note: '* Champs obligatoires',
      required_error: 'Merci de remplir les champs obligatoires (*).'
    },
    back: 'Retour au site',
    blog: {
      title: 'Blog',
      subtitle: 'Conseils et informations sur les films et teintes pour vitrages.',
      readMore: 'Lire l\'article',
      backToBlog: 'Retour au blog',
      ctaTitle: 'Un projet de film pour vitrages ?',
      byline: 'Par l\'équipe VitraCare',
      minRead: 'min de lecture',
      faqTitle: 'Questions fréquentes',
      relatedTitle: 'Articles similaires',
      share: 'Partager',
      shareWhatsapp: 'WhatsApp',
      shareEmail: 'E-mail',
      copyLink: 'Copier le lien',
      linkCopied: 'Lien copié !'
    },
    footer: {
      faq: 'FAQ', terms: 'Conditions générales', legal: 'Mentions légales', privacy: 'Politique confidentialité', blog: 'Blog',
      copyright: '© 2026 VitraCare. Tous droits réservés.'
    },
    popup: {
      title: 'Une question sur vos vitrages ?',
      subtitle: 'Discutez directement avec nous sur WhatsApp, ou demandez votre devis gratuit — sans engagement.',
      whatsapp: 'Discuter sur WhatsApp'
    }
  },
  NL: {
    nav: { home: 'Startpagina', services: 'Diensten', pricing: 'Product', realisations: 'Realisaties', about: 'Beoordelingen', contact: 'Contact' },
    hero: { title1: 'Ontketen het volledige', title2: 'potentieel van', title3: 'uw beglazing', subtitle: 'En win meer aan', quote: 'OFFERTE', getQuote: 'EEN OFFERTE AANVRAGEN' },
    words: ['privacy', 'veiligheid', 'behoud', 'isolatie'],
    features: {
      title: 'Het licht komt binnen, verder niets',
      f1_title: 'Vind uw\nprivacy terug',
      f1_desc: 'De folie blokkeert blikken van buitenaf en laat tegelijkertijd licht door, voor instelbare privacy per kamer.',
      f2_title: 'Bescherm uw\nfamilie',
      f2_desc: 'De folie versterkt uw ramen en houdt het glas vast bij breuk, waardoor indringers worden vertraagd.',
      f3_title: 'Behoud uw\neigendommen',
      f3_desc: 'De folie filtert meer dan 99% van de UV-stralen om uw vloeren en meubels te beschermen tegen vervaging.',
      f4_title: 'Een beheerste\ntemperatuur',
      f4_desc: 'De folie blokkeert tot 80% van de zonnewarmte voor een koeler interieur in de zomer en beter geïsoleerd in de winter.'
    },
    protection: {
      title: 'Een onzichtbare\nbescherming voor\nuw huis.',
      subtitle: 'Raamfolie op maat.'
    },
    slider: { before: 'VOOR', after: 'NA' },
    realisations: {
      title: 'Onze realisaties',
      ctaTitle: 'Een gelijkaardig project in gedachten?',
      ctaSubtitle: 'Vraag uw gratis offerte aan binnen 24u, of neem rechtstreeks contact met ons op.'
    },
    teintes: {
      title: 'Onze folies',
      miroir_title: 'Spiegeleffect folie',
      miroir_desc: 'Spiegelfolie zonder tain voor volledige privacy. Blokkeert 99% van de UV-stralen en vermindert de warmte aanzienlijk.',
      solaire_title: 'Zonwerende folie',
      solaire_desc: 'Vermindering van warmte en UV voor optimaal comfort binnenshuis.',
      mat_title: 'Matwitte folie',
      mat_desc: 'Matwitte folie voor een elegante privacy en een strakke stijl op uw beglazing.',
      swipeHint: '← Schuif om de 3 tinten te zien →'
    },
    reviews: {
      title: 'Beoordelingen',
      r1: 'De woonkamer op het zuiden is eindelijk leefbaar in de zomer!',
      r2: 'Onmogelijk om van buitenaf te zien of we er zijn. Precies wat we wilden.',
      r3: 'We leven eindelijk met open gordijnen, zonder ons bekeken te voelen.',
      r4: 'Onze doeken zijn niet meer bang voor de zon. Een hele opluchting!',
      more: 'LEES MEER',
      swipeHint: '← Schuif om alle beoordelingen te zien →'
    },
    strip: {
      f1_title: 'Op maat', f1_desc: 'raam voor\nraam bestudeerd',
      f2_title: 'Gegarandeerde folie', f2_desc: 'Tot 10 jaar\ndoor de fabrikant',
      f3_title: 'Installatie gegarandeerd', f3_desc: 'Tot 1 jaar\ndoor VitraCare',
      f4_title: 'Offerte binnen 24u', f4_desc: 'Neem vrijblijvend\ncontact op met een expert'
    },
    map: {
      title: 'Overal in Brussel\nen de rand',
      subtitle: 'Wij ontwikkelen een hoogwaardige service\noveral in Brussel en omgeving',
      locations: ['Centrum', 'Elsene', 'Ukkel', 'Woluwe', 'Evere', 'Oudergem', 'Etterbeek', 'Vorst', 'Waterloo', 'Linkebeek', 'Kraainem', 'En overal\nrondom'],
      swipeHint: '← Schuif om alle gemeenten te zien →'
    },
    devis: {
      title: 'Ontvang uw offerte',
      subtitle: 'Ontdek het potentieel van uw ramen: meer privacy, minder warmte en duurzame bescherming voor uw interieur.',
      reassurance: 'Offerte 100% gratis en vrijblijvend — antwoord binnen 24u',
      success: 'Bericht verzonden! We nemen binnen 24 uur contact met u op.',
      form_name: 'Naam / Voornaam',
      form_address: 'Adres',
      form_zip: 'Postcode',
      form_email: 'E-mail',
      form_phone: 'Telefoon',
      form_message: 'Vertel ons over uw project',
      form_message_placeholder: 'Aantal ramen, gewenste folie, huidig probleem...',
      form_photos: 'Foto\'s toevoegen (optioneel)',
      form_privacy1: 'Ik heb uw ',
      form_privacy2: 'privacybeleid gelezen en ga ermee akkoord',
      info_text: 'Vul uw gegevens in en wij nemen binnen 24 uur contact met u op.',
      form_error: 'Er is een fout opgetreden. Probeer opnieuw, of bel ons rechtstreeks op 0489 60 70 74.',
      photos_too_large: 'De foto\'s zijn nog steeds te groot na compressie. Verminder het aantal foto\'s.',
      required_note: '* Verplichte velden',
      required_error: 'Vul de verplichte velden in (*).',
      compressing: 'Foto\'s worden verwerkt...',
      remove_photo: 'Foto verwijderen'
    },
    contactPage: {
      title: 'Contacteer ons',
      subtitle: 'Een vraag? Stuur ons een bericht of neem rechtstreeks contact op.',
      phone: 'Telefoon',
      whatsapp: 'WhatsApp',
      email: 'E-mail',
      form_name: 'Naam / Voornaam',
      form_email: 'E-mail',
      form_message: 'Uw bericht',
      submit: 'Bericht verzenden',
      success: 'Bericht verzonden! We reageren snel.',
      form_error: 'Er is een fout opgetreden. Probeer opnieuw, of bel ons rechtstreeks op 0489 60 70 74.',
      required_note: '* Verplichte velden',
      required_error: 'Vul de verplichte velden in (*).'
    },
    back: 'Terug naar de site',
    blog: {
      title: 'Blog',
      subtitle: 'Tips en informatie over folies en tinten voor beglazing.',
      readMore: 'Lees het artikel',
      backToBlog: 'Terug naar blog',
      ctaTitle: 'Een project voor raamfolie?',
      byline: 'Door het VitraCare-team',
      minRead: 'min. leestijd',
      faqTitle: 'Veelgestelde vragen',
      relatedTitle: 'Gerelateerde artikelen',
      share: 'Delen',
      shareWhatsapp: 'WhatsApp',
      shareEmail: 'E-mail',
      copyLink: 'Link kopiëren',
      linkCopied: 'Link gekopieerd!'
    },
    footer: {
      faq: 'FAQ', terms: 'Algemene voorwaarden', legal: 'Wettelijke vermeldingen', privacy: 'Privacybeleid', blog: 'Blog',
      copyright: '© 2026 VitraCare. Alle rechten voorbehouden.'
    },
    popup: {
      title: 'Een vraag over uw beglazing?',
      subtitle: 'Praat rechtstreeks met ons via WhatsApp, of vraag uw gratis offerte aan — vrijblijvend.',
      whatsapp: 'Chat via WhatsApp'
    }
  },
  EN: {
    nav: { home: 'Home', services: 'Services', pricing: 'Product', realisations: 'Our work', about: 'Reviews', contact: 'Contact' },
    hero: { title1: 'Unlock the full', title2: 'potential of', title3: 'your Windows', subtitle: 'And gain more', quote: 'QUOTE', getQuote: 'GET A QUOTE' },
    words: ['privacy', 'security', 'preservation', 'insulation'],
    features: {
      title: 'Light comes in, nothing else',
      f1_title: 'Regain your\nprivacy',
      f1_desc: 'The film blocks outside views while letting light through, for adjustable privacy room by room.',
      f2_title: 'Protect your\nfamily',
      f2_desc: 'The film strengthens your windows and holds the glass in case of breakage, delaying intrusions.',
      f3_title: 'Preserve your\nbelongings',
      f3_desc: 'The film filters more than 99% of UV rays to protect your floors, furniture and artwork from fading.',
      f4_title: 'A controlled\ntemperature',
      f4_desc: 'The film blocks up to 80% of infrared solar heat for a cooler interior in summer and better insulated in winter.'
    },
    protection: {
      title: 'Invisible protection\nfor your\nhome.',
      subtitle: 'Custom window films.'
    },
    slider: { before: 'BEFORE', after: 'AFTER' },
    realisations: {
      title: 'Our work',
      ctaTitle: 'Have a similar project in mind?',
      ctaSubtitle: 'Request your free quote within 24h, or contact us directly to discuss it.'
    },
    teintes: {
      title: 'Our tints',
      miroir_title: 'Mirror effect film',
      miroir_desc: 'One-way mirror film for total privacy. Blocks 99% of UV and significantly reduces heat.',
      solaire_title: 'Solar tint',
      solaire_desc: 'Reduces heat and UV for optimal indoor comfort.',
      mat_title: 'Matte white film',
      mat_desc: 'Matte white film for elegant privacy and a clean, refined look on your windows.',
      swipeHint: '← Swipe to see all 3 tints →'
    },
    reviews: {
      title: 'Reviews',
      r1: 'The south-facing living room is finally livable in summer!',
      r2: 'Impossible to know if we are there from the outside. Exactly what we wanted.',
      r3: 'We finally live with curtains open, without feeling watched.',
      r4: 'Our canvases no longer fear the sun. A real relief!',
      more: 'LEARN MORE',
      swipeHint: '← Swipe to see all reviews →'
    },
    strip: {
      f1_title: 'Custom made', f1_desc: 'studied window\nby window',
      f2_title: 'Guaranteed film', f2_desc: 'Up to 10 years\nby the manufacturer',
      f3_title: 'Guaranteed installation', f3_desc: 'Up to 1 year\nby VitraCare',
      f4_title: 'Quote within 24h', f4_desc: 'Contact an expert\nwithout obligation'
    },
    map: {
      title: 'Everywhere in Brussels\nand surroundings',
      subtitle: 'We develop a high quality service\neverywhere in Brussels and surroundings',
      locations: ['Center', 'Ixelles', 'Uccle', 'Woluwe', 'Evere', 'Auderghem', 'Etterbeek', 'Forest', 'Waterloo', 'Linkebeek', 'Kraainem', 'And everywhere\naround'],
      swipeHint: '← Swipe to see all the communes →'
    },
    devis: {
      title: 'Get your quote',
      subtitle: 'Discover the potential of your windows: more privacy, less heat, and lasting protection for your interior.',
      reassurance: '100% free quote, no obligation — reply within 24h',
      success: 'Message sent! We will contact you within 24 hours.',
      form_name: 'Name / Surname',
      form_address: 'Address',
      form_zip: 'Postal code',
      form_email: 'Email',
      form_phone: 'Phone',
      form_message: 'Tell us about your project',
      form_message_placeholder: 'Number of windows, desired film, current issue...',
      form_photos: 'Add photos (optional)',
      form_privacy1: 'I have read and accept your ',
      form_privacy2: 'privacy policy',
      info_text: 'Fill in your details and we will contact you within 24 hours.',
      form_error: 'Something went wrong. Please try again, or call us directly on 0489 60 70 74.',
      photos_too_large: 'The photos are still too large after compression. Reduce the number of photos.',
      required_note: '* Required fields',
      required_error: 'Please fill in the required fields (*).',
      compressing: 'Processing photos...',
      remove_photo: 'Remove photo'
    },
    contactPage: {
      title: 'Contact us',
      subtitle: 'Have a question? Send us a message or reach out directly.',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      form_name: 'Name / Surname',
      form_email: 'Email',
      form_message: 'Your message',
      submit: 'Send message',
      success: 'Message sent! We will reply shortly.',
      form_error: 'Something went wrong. Please try again, or call us directly on 0489 60 70 74.',
      required_note: '* Required fields',
      required_error: 'Please fill in the required fields (*).'
    },
    back: 'Back to site',
    blog: {
      title: 'Blog',
      subtitle: 'Tips and information about window films and tints.',
      readMore: 'Read the article',
      backToBlog: 'Back to blog',
      ctaTitle: 'Have a window film project?',
      byline: 'By the VitraCare Team',
      minRead: 'min read',
      faqTitle: 'Frequently Asked Questions',
      relatedTitle: 'Related Articles',
      share: 'Share',
      shareWhatsapp: 'WhatsApp',
      shareEmail: 'Email',
      copyLink: 'Copy link',
      linkCopied: 'Link copied!'
    },
    footer: {
      faq: 'FAQ', terms: 'Terms and conditions', legal: 'Legal notice', privacy: 'Privacy policy', blog: 'Blog',
      copyright: '© 2026 VitraCare. All rights reserved.'
    },
    popup: {
      title: 'A question about your windows?',
      subtitle: 'Chat with us directly on WhatsApp, or request your free quote — no obligation.',
      whatsapp: 'Chat on WhatsApp'
    }
  }
};
