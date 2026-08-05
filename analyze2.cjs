const fs = require('fs');
const { PNG } = require('pngjs');

fs.createReadStream('logo2.png')
  .pipe(new PNG())
  .on('parsed', function() {
    let bgR = this.data[0], bgG = this.data[1], bgB = this.data[2], bgA = this.data[3];
    console.log('Background:', bgR, bgG, bgB, bgA);
    
    let columns = [];
    for (let x = 0; x < this.width; x++) {
      let isForeground = false;
      for (let y = 0; y < this.height; y++) {
        let idx = (this.width * y + x) << 2;
        let r = this.data[idx], g = this.data[idx+1], b = this.data[idx+2], a = this.data[idx+3];
        if (Math.abs(r-bgR) > 5 || Math.abs(g-bgG) > 5 || Math.abs(b-bgB) > 5 || Math.abs(a-bgA) > 5) {
          isForeground = true;
          break;
        }
      }
      columns.push(isForeground);
    }
    let objects = [];
    let curr = null;
    for (let x = 0; x < this.width; x++) {
      if (columns[x]) {
        if (!curr) curr = { start: x, end: x };
        else curr.end = x;
      } else {
        if (curr) {
          objects.push(curr);
          curr = null;
        }
      }
    }
    if (curr) objects.push(curr);
    console.log(objects);
  });
