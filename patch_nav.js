const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// The hero section seems to be the very first top element which usually starts around line 245
// <div className="relative min-h-screen w-full overflow-hidden">
code = code.replace(
  /<div className="relative min-h-screen w-full overflow-hidden">/,
  '<div id="accueil" className="relative min-h-screen w-full overflow-hidden">'
);

// We need to find the nav links and change the href of "Accueil" to "#accueil"
// It looks like:
// <a href="#" className="font-bold relative pb-1" style={{ color: textColor }}>
//   {t.nav.home}
// <a href="#" className="hover:opacity-80 transition-opacity">{t.nav.home}</a>

code = code.replace(
  /<a href="#" className="font-bold relative pb-1" style={{ color: textColor }}>\s*\{t\.nav\.home\}\s*<span/g,
  '<a href="#accueil" className="font-bold relative pb-1" style={{ color: textColor }}>\n            {t.nav.home}\n            <span'
);

code = code.replace(
  /<a href="#" className="hover:opacity-80 transition-opacity">\{t\.nav\.home\}<\/a>/g,
  '<a href="#accueil" className="hover:opacity-80 transition-opacity">{t.nav.home}</a>'
);

fs.writeFileSync('src/App.tsx', code);
