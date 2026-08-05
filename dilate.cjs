const fs = require('fs');
const { PNG } = require('pngjs');

function dilate(imgData, width, height, radius) {
  let newData = Buffer.from(imgData);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let idx = (width * y + x) << 2;
      let maxR = imgData[idx];
      let maxG = imgData[idx+1];
      let maxB = imgData[idx+2];
      
      // check neighbors
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (dx*dx + dy*dy <= radius*radius) {
            let nx = x + dx;
            let ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              let nIdx = (width * ny + nx) << 2;
              let r = imgData[nIdx];
              let g = imgData[nIdx+1];
              let b = imgData[nIdx+2];
              let intensity = (r+g+b);
              let maxIntensity = (maxR+maxG+maxB);
              if (intensity > maxIntensity) {
                maxR = r; maxG = g; maxB = b;
              }
            } else {
              maxR = 255; maxG = 255; maxB = 255;
            }
          }
        }
      }
      newData[idx] = maxR;
      newData[idx+1] = maxG;
      newData[idx+2] = maxB;
    }
  }
  return newData;
}

fs.createReadStream('yeux.png')
  .pipe(new PNG())
  .on('parsed', function() {
    this.data = dilate(this.data, this.width, this.height, 4);
    this.pack().pipe(fs.createWriteStream('public/yeux_thinner4.png'))
      .on('finish', () => console.log('thinner 4'));
  });
