// Notifie Bing (et les autres moteurs participant à IndexNow — pas Google, qui n'y
// participe pas) que les pages du site ont changé, au lieu d'attendre leur prochain
// passage de crawl. À lancer manuellement après un déploiement avec du contenu
// nouveau ou modifié : `npm run indexnow`. Ne fait rien d'automatique au build,
// pour ne pas spammer l'API à chaque build local de test.
import { readFileSync } from 'node:fs';

const HOST = 'vitracare.be';
const KEY = 'de0d2fcf040da6109559af190ee583e3';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf-8');
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error('Aucune URL trouvée dans public/sitemap.xml — abandon.');
  process.exit(1);
}

console.log(`Envoi de ${urlList.length} URLs à IndexNow...`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log(`Réponse IndexNow : ${res.status} ${res.statusText}`);
if (res.status !== 200 && res.status !== 202) {
  const body = await res.text().catch(() => '');
  console.error(body);
  process.exit(1);
}
