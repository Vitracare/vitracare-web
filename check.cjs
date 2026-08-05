const fs = require('fs');
const { PNG } = require('pngjs');

function count(file) {
  let c = 0;
  const data = fs.readFileSync(file);
  const png = PNG.sync.read(data);
  for (let i = 0; i < png.data.length; i+=4) {
    if (png.data[i+3] > 128) c++;
  }
  console.log(file, c);
}

count('yeux.png');
count('public/yeux_eroded2.png');
count('public/yeux_eroded3.png');
count('public/yeux_eroded4.png');
