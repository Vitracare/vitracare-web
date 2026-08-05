const fs = require('fs');
const { PNG } = require('pngjs');

fs.createReadStream('bx.png')
  .pipe(new PNG())
  .on('parsed', function() {
    let width = this.width;
    let height = this.height;
    let data = this.data;
    
    // threshold for white
    const isWhite = (idx) => data[idx] > 240 && data[idx+1] > 240 && data[idx+2] > 240;
    
    let visited = new Uint8Array(width * height);
    let queue = [];
    
    // Add all edge pixels
    for (let x = 0; x < width; x++) {
      queue.push([x, 0]);
      queue.push([x, height - 1]);
    }
    for (let y = 0; y < height; y++) {
      queue.push([0, y]);
      queue.push([width - 1, y]);
    }
    
    let qIdx = 0;
    while (qIdx < queue.length) {
      let [x, y] = queue[qIdx++];
      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      
      let p = y * width + x;
      if (visited[p]) continue;
      visited[p] = 1;
      
      let idx = p << 2;
      if (isWhite(idx)) {
        // Make transparent
        data[idx+3] = 0;
        
        queue.push([x+1, y]);
        queue.push([x-1, y]);
        queue.push([x, y+1]);
        queue.push([x, y-1]);
      }
    }
    
    this.pack().pipe(fs.createWriteStream('public/bx_transparent_outside.png'))
      .on('finish', () => console.log('Done processing bx.png'));
  });
