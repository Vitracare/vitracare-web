const fs = require('fs');
const { PNG } = require('pngjs');

function erode(imgData, width, height, radius) {
  let newData = Buffer.from(imgData);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (width * y + x) << 2;
      let minA = imgData[idx + 3];
      // check neighbors
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (dx*dx + dy*dy <= radius*radius) {
            let nx = x + dx;
            let ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              let nIdx = (width * ny + nx) << 2;
              let a = imgData[nIdx + 3];
              if (a < minA) minA = a;
            } else {
              minA = 0;
            }
          }
        }
      }
      newData[idx + 3] = minA;
    }
  }
  return newData;
}

fs.createReadStream('yeux.png')
  .pipe(new PNG())
  .on('parsed', function() {
    this.data = erode(this.data, this.width, this.height, 4);
    this.pack().pipe(fs.createWriteStream('yeux_eroded4.png'))
      .on('finish', () => console.log('eroded 4'));
  });
