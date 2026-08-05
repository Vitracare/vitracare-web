const http = require('https');
const { PNG } = require('pngjs');

http.get('https://i.postimg.cc/zf9TH9tf/Bx.png', (res) => {
  res.pipe(new PNG())
    .on('parsed', function() {
      console.log('Top-left pixel:', this.data[0], this.data[1], this.data[2], this.data[3]);
    });
});
