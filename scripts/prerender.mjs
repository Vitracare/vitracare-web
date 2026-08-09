import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'VitraCare — Films et teintes pour vitrages à Bruxelles',
    description:
      "VitraCare pose des films et teintes pour vitrages sur mesure à Bruxelles et sa périphérie : intimité, confort thermique et protection UV. Devis gratuit sous 24h.",
  },
  {
    path: '/devis',
    file: 'devis/index.html',
    title: 'Demander un devis gratuit — VitraCare',
    description:
      'Obtenez votre devis gratuit et sans engagement pour la pose de films et teintes sur vitrages à Bruxelles et sa périphérie. Réponse sous 24h.',
  },
  {
    path: '/realisations',
    file: 'realisations/index.html',
    title: 'Nos réalisations — VitraCare',
    description:
      'Découvrez nos chantiers de pose de films et teintes pour vitrages réalisés à Bruxelles et dans sa périphérie.',
  },
  {
    path: '/contact',
    file: 'contact/index.html',
    title: 'Contact — VitraCare',
    description:
      'Contactez VitraCare pour toute question sur la pose de films et teintes pour vitrages à Bruxelles et sa périphérie.',
  },
  {
    path: '/faq',
    file: 'faq/index.html',
    title: 'FAQ — VitraCare',
    description:
      'Toutes les réponses à vos questions sur les films et teintes pour vitrages : pose, entretien, garantie, prix.',
  },
  {
    path: '/blog',
    file: 'blog/index.html',
    title: 'Blog — VitraCare',
    description: 'Conseils et actualités sur les films et teintes pour vitrages à Bruxelles.',
  },
  {
    path: '/blog/quel-film-choisir-vitrages',
    file: 'blog/quel-film-choisir-vitrages/index.html',
    title: 'Quel film choisir pour vos vitrages ? — VitraCare',
    description:
      'Film miroir, teinte solaire ou blanc mat : découvrez les différences, avantages et usages de chaque film pour vitrages, et lequel convient le mieux à votre maison.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Film effet miroir, teinte solaire ou blanc mat : quel film choisir pour vos vitrages ?',
      description:
        'Film miroir, teinte solaire ou blanc mat : découvrez les différences, avantages et usages de chaque film pour vitrages, et lequel convient le mieux à votre maison.',
      datePublished: '2026-08-06',
      dateModified: '2026-08-09',
      author: { '@type': 'Organization', name: 'VitraCare' },
      publisher: { '@type': 'Organization', name: 'VitraCare', url: 'https://vitracare.be/' },
      mainEntityOfPage: 'https://vitracare.be/blog/quel-film-choisir-vitrages',
      url: 'https://vitracare.be/blog/quel-film-choisir-vitrages',
      inLanguage: 'fr-BE',
    },
  },
  {
    path: '/mentions-legales',
    file: 'mentions-legales/index.html',
    title: 'Mentions légales — VitraCare',
    description: 'Mentions légales du site vitracare.be.',
  },
  {
    path: '/politique-confidentialite',
    file: 'politique-confidentialite/index.html',
    title: 'Politique confidentialité — VitraCare',
    description: "Politique de confidentialité et protection des données personnelles de VitraCare.",
  },
  {
    path: '/conditions-generales',
    file: 'conditions-generales/index.html',
    title: 'Conditions générales — VitraCare',
    description: 'Conditions générales de mise en relation VitraCare.',
  },
];

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function main() {
  const { render } = await import(join(root, 'dist-server', 'entry-server.js'));
  const template = await readFile(join(distDir, 'index.html'), 'utf-8');

  for (const route of routes) {
    const appHtml = render(route.path);
    const canonical = `https://vitracare.be${route.path === '/' ? '/' : route.path}`;
    const title = escapeHtml(route.title);
    const description = escapeHtml(route.description);

    let html = template
      .replace(/<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`)
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />`)
      .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
      .replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${description}" />`,
      )
      .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonical}" />`)
      .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${title}" />`)
      .replace(
        /<meta name="twitter:description" content=".*?" \/>/,
        `<meta name="twitter:description" content="${description}" />`,
      );

    if (route.schema) {
      const schemaScript = `<script type="application/ld+json">${JSON.stringify(route.schema)}</script>\n  </head>`;
      html = html.replace('</head>', schemaScript);
    }

    const outPath = join(distDir, route.file);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf-8');
    console.log(`Prerendered ${route.path} -> dist/${route.file}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
