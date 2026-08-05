const http = require('https');
const { PNG } = require('pngjs');

http.get('https://i.postimg.cc/90YzLScS/Mesure.png', (res) => {
  res.pipe(new PNG())
    .on('parsed', function() {
      console.log('Top-left pixel:', this.data[0], this.data[1], this.data[2], this.data[3]);
      // find a non-bg pixel
      for (let i = 0; i < this.data.length; i += 4) {
        if (Math.abs(this.data[i] - this.data[0]) > 20) {
          console.log('Foreground roughly:', this.data[i], this.data[i+1], this.data[i+2], this.data[i+3]);
          break;
        }
      }
    });
});
