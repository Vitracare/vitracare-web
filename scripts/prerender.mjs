import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

const prefixes = { FR: '', NL: '/nl', EN: '/en' };
const hreflangCodes = { FR: 'fr', NL: 'nl', EN: 'en' };
const langs = ['FR', 'NL', 'EN'];
const homeLabels = { FR: 'Accueil', NL: 'Home', EN: 'Home' };

const pages = [
  {
    path: '/',
    meta: {
      FR: {
        title: 'VitraCare — Films et teintes pour vitrages à Bruxelles',
        description:
          "VitraCare pose des films et teintes pour vitrages sur mesure à Bruxelles et sa périphérie : intimité, confort thermique et protection UV. Devis gratuit sous 24h.",
      },
      NL: {
        title: 'VitraCare — Folies en tinten voor beglazing in Brussel',
        description:
          'VitraCare plaatst folies en tinten op maat voor beglazing in Brussel en omgeving: privacy, thermisch comfort en UV-bescherming. Gratis offerte binnen 24u.',
      },
      EN: {
        title: 'VitraCare — Window Films and Tints in Brussels',
        description:
          'VitraCare installs custom window films and tints for homes in Brussels and the surrounding area: privacy, thermal comfort and UV protection. Free quote within 24h.',
      },
    },
  },
  {
    path: '/devis',
    meta: {
      FR: {
        title: 'Demander un devis gratuit — VitraCare',
        description:
          'Obtenez votre devis gratuit et sans engagement pour la pose de films et teintes sur vitrages à Bruxelles et sa périphérie. Réponse sous 24h.',
      },
      NL: {
        title: 'Gratis offerte aanvragen — VitraCare',
        description:
          'Vraag uw gratis en vrijblijvende offerte aan voor het plaatsen van folies en tinten op beglazing in Brussel en omgeving. Antwoord binnen 24u.',
      },
      EN: {
        title: 'Request a Free Quote — VitraCare',
        description:
          'Get your free, no-obligation quote for window film and tint installation in Brussels and the surrounding area. Response within 24h.',
      },
    },
  },
  {
    path: '/realisations',
    meta: {
      FR: {
        title: 'Nos réalisations — VitraCare',
        description:
          'Découvrez nos chantiers de pose de films et teintes pour vitrages réalisés à Bruxelles et dans sa périphérie.',
      },
      NL: {
        title: 'Onze realisaties — VitraCare',
        description:
          'Ontdek onze projecten voor het plaatsen van folies en tinten op beglazing, uitgevoerd in Brussel en omgeving.',
      },
      EN: {
        title: 'Our Work — VitraCare',
        description:
          'Discover our window film and tint installation projects completed in Brussels and the surrounding area.',
      },
    },
  },
  {
    path: '/contact',
    meta: {
      FR: {
        title: 'Contact — VitraCare',
        description:
          'Contactez VitraCare pour toute question sur la pose de films et teintes pour vitrages à Bruxelles et sa périphérie.',
      },
      NL: {
        title: 'Contact — VitraCare',
        description:
          'Neem contact op met VitraCare voor al uw vragen over het plaatsen van folies en tinten op beglazing in Brussel en omgeving.',
      },
      EN: {
        title: 'Contact — VitraCare',
        description:
          'Contact VitraCare for any questions about window film and tint installation in Brussels and the surrounding area.',
      },
    },
  },
  {
    path: '/faq',
    meta: {
      FR: {
        title: 'FAQ — VitraCare',
        description:
          'Toutes les réponses à vos questions sur les films et teintes pour vitrages : pose, entretien, garantie, prix.',
      },
      NL: {
        title: 'Veelgestelde vragen — VitraCare',
        description:
          'Alle antwoorden op uw vragen over folies en tinten voor beglazing: plaatsing, onderhoud, garantie, prijs.',
      },
      EN: {
        title: 'FAQ — VitraCare',
        description:
          'All the answers to your questions about window films and tints: installation, maintenance, warranty, pricing.',
      },
    },
  },
  {
    path: '/blog',
    meta: {
      FR: { title: 'Blog — VitraCare', description: 'Conseils et actualités sur les films et teintes pour vitrages à Bruxelles.' },
      NL: { title: 'Blog — VitraCare', description: 'Tips en informatie over folies en tinten voor beglazing.' },
      EN: { title: 'Blog — VitraCare', description: 'Tips and information about window films and tints.' },
    },
  },
  {
    path: '/mentions-legales',
    meta: {
      FR: { title: 'Mentions légales — VitraCare', description: 'Mentions légales du site vitracare.be.' },
      NL: { title: 'Wettelijke vermeldingen — VitraCare', description: 'Wettelijke vermeldingen van de website vitracare.be.' },
      EN: { title: 'Legal Notice — VitraCare', description: 'Legal notice for the website vitracare.be.' },
    },
  },
  {
    path: '/politique-confidentialite',
    meta: {
      FR: {
        title: 'Politique confidentialité — VitraCare',
        description: 'Politique de confidentialité et protection des données personnelles de VitraCare.',
      },
      NL: {
        title: 'Privacybeleid — VitraCare',
        description: 'Privacybeleid en bescherming van persoonsgegevens van VitraCare.',
      },
      EN: {
        title: 'Privacy Policy — VitraCare',
        description: "VitraCare's privacy policy and personal data protection.",
      },
    },
  },
  {
    path: '/conditions-generales',
    meta: {
      FR: { title: 'Conditions générales — VitraCare', description: 'Conditions générales de mise en relation VitraCare.' },
      NL: { title: 'Algemene voorwaarden — VitraCare', description: 'Algemene voorwaarden voor bemiddeling van VitraCare.' },
      EN: { title: 'Terms and Conditions — VitraCare', description: "VitraCare's general terms and conditions for introduction services." },
    },
  },
];

const blogArticles = [
{
  path: '/blog/quel-film-choisir-vitrages',
  meta: {
    FR: {
      title: 'Quel film choisir pour vos vitrages ? — VitraCare',
      description:
        'Film miroir, teinte solaire ou blanc mat : découvrez les différences, avantages et usages de chaque film pour vitrages, et lequel convient le mieux à votre maison.',
      headline: 'Film effet miroir, teinte solaire ou blanc mat : quel film choisir pour vos vitrages ?',
      datePublished: '2026-08-06',
      dateModified: '2026-08-09',
    },
    NL: {
      title: 'Welke folie kiezen voor uw beglazing? — VitraCare',
      description:
        'Spiegelfolie, zonwerende folie of matwitte folie: ontdek de verschillen, voordelen en toepassingen van elke folie, en welke het beste bij uw huis past.',
      headline: 'Spiegeleffect, zonwerende folie of matwit: welke folie kiezen voor uw beglazing?',
      datePublished: '2026-08-06',
      dateModified: '2026-08-09',
    },
    EN: {
      title: 'Which Window Film Should You Choose? — VitraCare',
      description:
        'Mirror film, solar tint or matte white: discover the differences, benefits and uses of each window film, and which one best suits your home.',
      headline: 'Mirror effect, solar tint or matte white: which film should you choose for your windows?',
      datePublished: '2026-08-06',
      dateModified: '2026-08-09',
    },
  },
},
{
  path: '/blog/film-vitrage-economies-climatisation',
  meta: {
    FR: {
      title: 'Film pour vitrage vs climatisation : quelle économie ? — VitraCare',
      description:
        "Ventilateur, climatiseur ou film pour vitrage : quelle solution réduit vraiment la chaleur chez vous ? Voici ce que montrent les études, chiffres et sources à l'appui.",
      headline: 'Film pour vitrage ou climatisation : quelle solution refroidit vraiment votre intérieur sans faire exploser la facture ?',
      datePublished: '2026-08-19',
      dateModified: '2026-08-19',
    },
    NL: {
      title: 'Raamfolie vs airco: welke besparing? — VitraCare',
      description:
        'Ventilator, airco of raamfolie: wat vermindert de hitte bij u thuis echt? Dit tonen studies, met cijfers en bronnen.',
      headline: 'Raamfolie of airco: welke oplossing koelt uw interieur écht af zonder de energiefactuur te doen ontploffen?',
      datePublished: '2026-08-19',
      dateModified: '2026-08-19',
    },
    EN: {
      title: 'Window Film vs AC: Which Saves More Energy? — VitraCare',
      description:
        "Fan, air conditioner, or window film: what actually reduces heat at home? Here's what studies show, with figures and sources.",
      headline: 'Window film or air conditioning: which solution actually cools your home without blowing up your energy bill?',
      datePublished: '2026-08-19',
      dateModified: '2026-08-19',
    },
  },
},
{
  path: '/blog/intimite-vis-a-vis-film-vitrage',
  meta: {
    FR: {
      title: 'Film pour vitrage et intimité : la solution au vis-à-vis — VitraCare',
      description:
        "Rez-de-chaussée, vis-à-vis entre voisins, bureaux exposés à la rue : comment profiter de la lumière naturelle sans être vu depuis l'extérieur ? Voici comment le film pour vitrage change la donne.",
      headline: 'Vis-à-vis, rez-de-chaussée, bureaux : comment garder son intimité sans vivre volets fermés ?',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
    },
    NL: {
      title: 'Raamfolie en privacy: de oplossing tegen inkijk — VitraCare',
      description:
        'Gelijkvloers, inkijk tussen buren, kantoren aan de straatkant: hoe geniet u van natuurlijk licht zonder van buitenaf gezien te worden? Raamfolie verandert de zaak.',
      headline: 'Inkijk, gelijkvloers, kantoren: hoe bewaart u uw privacy zonder altijd de rolluiken te sluiten?',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
    },
    EN: {
      title: 'Window Film for Privacy: The Fix for Being Overlooked — VitraCare',
      description:
        "Ground floor rooms, neighbours facing your windows, offices exposed to the street: how do you enjoy natural light without being seen from outside? Here's how window film changes the equation.",
      headline: 'Overlooked from outside, ground floor, offices: how do you keep your privacy without living behind closed shutters?',
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
    },
  },
},
];

function decodeEntities(str) {
  return str
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripTags(str) {
  return decodeEntities(str.replace(/<[^>]+>/g, '')).trim();
}

// Blog articles author their Q&A-style content as a heading ending in "?"
// (h2 section titles, or h3 questions nested under the "FAQ" h2) followed by
// one or more paragraphs — the same pattern readers already see on the page.
// Rather than duplicating that content by hand into a separate FAQ schema,
// we derive FAQPage JSON-LD straight from the rendered HTML: any heading/
// paragraph pair matching that shape becomes a Question/Answer entry. New
// FAQ items added to blogContent.ts pick this up automatically.
function extractFaqSchema(appHtml) {
  const faqPattern = /<h[23][^>]*>([^<]*\?)<\/h[23]>((?:<p[^>]*>.*?<\/p>)+)/g;
  const items = [];
  let match;
  while ((match = faqPattern.exec(appHtml)) !== null) {
    const question = stripTags(match[1]);
    const answerParagraphs = match[2].match(/<p[^>]*>.*?<\/p>/g) || [];
    const answer = answerParagraphs.map((p) => stripTags(p)).join(' ');
    if (question && answer) items.push({ question, answer });
  }
  if (items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

// Sitewide business info, one authentic translation per language rather than
// leaving the JSON-LD in French on /nl and /en while the visible page is
// correctly translated — reuses wording already established elsewhere in the
// site's own copy (map section, homepage meta description) instead of
// inventing new phrasing.
const businessCopy = {
  FR: {
    description:
      'VitraCare pose des films et teintes pour vitrages sur mesure à Bruxelles et sa périphérie : intimité, confort thermique et protection UV. Devis gratuit sous 24h.',
    city: 'Bruxelles',
    area: 'Périphérie bruxelloise',
    serviceType: 'Pose de films et teintes pour vitrages',
  },
  NL: {
    description:
      'VitraCare plaatst folies en tinten op maat voor beglazing in Brussel en omgeving: privacy, thermisch comfort en UV-bescherming. Gratis offerte binnen 24u.',
    city: 'Brussel',
    area: 'Brusselse rand',
    serviceType: 'Plaatsing van folies en tinten voor beglazing',
  },
  EN: {
    description:
      'VitraCare installs custom window films and tints for homes in Brussels and the surrounding area: privacy, thermal comfort and UV protection. Free quote within 24h.',
    city: 'Brussels',
    area: 'Brussels surroundings',
    serviceType: 'Window film and tint installation',
  },
};

function buildBusinessSchema(lang, prefix) {
  const copy = businessCopy[lang];
  const inLanguage = `${hreflangCodes[lang]}-BE`;
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://vitracare.be/#business',
    name: 'VitraCare',
    url: `https://vitracare.be${prefix || '/'}`,
    inLanguage,
    description: copy.description,
    telephone: '+32489607074',
    email: 'contact@vitracare.be',
    areaServed: [
      { '@type': 'City', name: copy.city },
      { '@type': 'AdministrativeArea', name: copy.area },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+32489607074',
      contactType: 'customer service',
      areaServed: 'BE',
      availableLanguage: ['fr', 'nl', 'en'],
    },
    // Confirmed via the business's own Google share link — a real Google Business
    // Profile exists (Knowledge Graph id g/11zdd0rsnv), previously invisible from the
    // site itself. Reviews stay on Google; no customer names are reproduced here.
    sameAs: ['https://share.google/c3Bih4FWySHUhjkAZ'],
  };
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: copy.serviceType,
    inLanguage,
    provider: { '@id': 'https://vitracare.be/#business' },
    areaServed: [
      { '@type': 'City', name: copy.city },
      { '@type': 'AdministrativeArea', name: copy.area },
    ],
    url: `https://vitracare.be${fullPath(prefix, '/devis')}`,
  };
  return [localBusiness, service];
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function fullPath(prefix, path) {
  return path === '/' ? prefix || '/' : `${prefix}${path}`;
}

function buildRoutes() {
  const routes = [];

  for (const page of pages) {
    for (const lang of langs) {
      const prefix = prefixes[lang];
      const routePath = fullPath(prefix, page.path);
      const fileRel = routePath === '/' ? 'index.html' : `${routePath.replace(/^\//, '')}/index.html`;
      routes.push({
        routePath,
        file: fileRel,
        canonicalPath: page.path,
        lang,
        title: page.meta[lang].title,
        description: page.meta[lang].description,
      });
    }
  }

  for (const blogArticle of blogArticles) {
    for (const lang of langs) {
      const prefix = prefixes[lang];
      const routePath = fullPath(prefix, blogArticle.path);
      const fileRel = `${routePath.replace(/^\//, '')}/index.html`;
      const m = blogArticle.meta[lang];
      routes.push({
        routePath,
        file: fileRel,
        canonicalPath: blogArticle.path,
        lang,
        title: m.title,
        description: m.description,
        schema: [
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: m.headline,
            description: m.description,
            image: ['https://vitracare.be/icon-512.png'],
            datePublished: m.datePublished,
            dateModified: m.dateModified,
            author: { '@type': 'Organization', name: 'VitraCare' },
            publisher: { '@type': 'Organization', name: 'VitraCare', url: 'https://vitracare.be/' },
            mainEntityOfPage: `https://vitracare.be${routePath}`,
            url: `https://vitracare.be${routePath}`,
            inLanguage: `${hreflangCodes[lang]}-BE`,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: homeLabels[lang], item: `https://vitracare.be${fullPath(prefix, '/')}` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://vitracare.be${fullPath(prefix, '/blog')}` },
              { '@type': 'ListItem', position: 3, name: m.title.replace(' — VitraCare', ''), item: `https://vitracare.be${routePath}` },
            ],
          },
        ],
      });
    }
  }

  return routes;
}

async function main() {
  const { render } = await import(join(root, 'dist-server', 'entry-server.js'));
  const template = await readFile(join(distDir, 'index.html'), 'utf-8');
  const routes = buildRoutes();

  for (const route of routes) {
    const appHtml = render(route.routePath);
    const canonical = `https://vitracare.be${fullPath(prefixes[route.lang], route.canonicalPath)}`;
    const title = escapeHtml(route.title);
    const description = escapeHtml(route.description);

    const hreflangLinks = langs
      .map((l) => {
        const href = `https://vitracare.be${fullPath(prefixes[l], route.canonicalPath)}`;
        return `<link rel="alternate" hreflang="${hreflangCodes[l]}" href="${href}" />`;
      })
      .join('\n    ');
    const xDefault = `https://vitracare.be${fullPath(prefixes.FR, route.canonicalPath)}`;
    const hreflangBlock = `${hreflangLinks}\n    <link rel="alternate" hreflang="x-default" href="${xDefault}" />`;

    let html = template
      .replace(/<html lang="fr"/, `<html lang="${hreflangCodes[route.lang]}"`)
      .replace(/<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`)
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />\n    ${hreflangBlock}`)
      .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
      .replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${description}" />`,
      )
      .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonical}" />`)
      .replace(/<meta property="og:locale" content=".*?" \/>/, `<meta property="og:locale" content="${hreflangCodes[route.lang]}_BE" />`)
      .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${title}" />`)
      .replace(
        /<meta name="twitter:description" content=".*?" \/>/,
        `<meta name="twitter:description" content="${description}" />`,
      );

    // Every page gets the localized LocalBusiness + Service pair (this used to be a
    // single French-only block hardcoded in index.html, served as-is even on /nl and
    // /en). FAQ extraction now runs on every route, not just blog articles, so a page
    // like /faq — real question-headed Q&A content, no article wrapper — picks up
    // FAQPage automatically the same way the blog does.
    const businessSchema = buildBusinessSchema(route.lang, prefixes[route.lang]);
    const faqSchema = extractFaqSchema(appHtml);
    const schemas = [...businessSchema, ...(route.schema || []), ...(faqSchema ? [faqSchema] : [])];
    const schemaScripts = schemas
      .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join('\n  ');
    html = html.replace('</head>', `${schemaScripts}\n  </head>`);

    const outPath = join(distDir, route.file);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf-8');
    console.log(`Prerendered [${route.lang}] ${route.routePath} -> dist/${route.file}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
