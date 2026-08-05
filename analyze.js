const { Jimp } = require('jimp');
async function analyze() {
  const image = await Jimp.read('logo.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  let columns = [];
  for (let x = 0; x < width; x++) {
    let hasPixel = false;
    for (let y = 0; y < height; y++) {
      const color = image.getPixelColor(x, y);
      const alpha = (color & 0xff);
      if (alpha > 10) {
        hasPixel = true;
        break;
      }
    }
    columns.push(hasPixel);
  }
  let objects = [];
  let currentObj = null;
  for (let x = 0; x < width; x++) {
    if (columns[x]) {
      if (!currentObj) {
        currentObj = { start: x, end: x };
      } else {
        currentObj.end = x;
      }
    } else {
      if (currentObj) {
        objects.push(currentObj);
        currentObj = null;
      }
    }
  }
  if (currentObj) objects.push(currentObj);
  console.log(objects);
}
analyze().catch(console.error);
