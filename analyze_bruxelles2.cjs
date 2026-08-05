const fs = require('fs');
const { PNG } = require('pngjs');

fs.createReadStream('bruxelles.png')
  .pipe(new PNG())
  .on('parsed', function() {
    let diff = 0;
    for (let i = 0; i < this.data.length; i += 4) {
      if (Math.abs(this.data[i] - 253) > 20 || Math.abs(this.data[i+1] - 254) > 20) {
        diff++;
      }
    }
    console.log('Pixels different from center:', diff, '/', this.width * this.height);
  });
