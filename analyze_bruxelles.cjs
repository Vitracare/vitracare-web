const fs = require('fs');
const { PNG } = require('pngjs');

fs.createReadStream('bruxelles.png')
  .pipe(new PNG())
  .on('parsed', function() {
    console.log('Size:', this.width, 'x', this.height);
    // Let's check some pixels in the middle
    let idx = (this.width * (this.height >> 1) + (this.width >> 1)) << 2;
    console.log('Center pixel:', this.data[idx], this.data[idx+1], this.data[idx+2]);
  });
