const fs = require('fs');
const { PNG } = require('pngjs');

const data = fs.readFileSync('yeux.png');
const png = PNG.sync.read(data);
for (let i = 0; i < png.data.length; i+=4) {
  let avg = (png.data[i] + png.data[i+1] + png.data[i+2]) / 3;
  if (avg < 200) {
    console.log(png.data[i], png.data[i+1], png.data[i+2]);
    break;
  }
}
