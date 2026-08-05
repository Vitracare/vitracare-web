const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(
  /<div className="w-full lg:w-1\/2 flex justify-center relative min-h-\[300px\] lg:min-h-\[500px\]">\s*<\/div>/,
  \`<div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[300px] lg:min-h-[500px]">
            <img src="https://i.postimg.cc/zf9TH9tf/Bx.png" alt="Bruxelles" className="w-full h-auto max-w-[500px] object-contain drop-shadow-2xl mix-blend-multiply" referrerPolicy="no-referrer" />
          </div>\`
);
fs.writeFileSync('src/App.tsx', code);
