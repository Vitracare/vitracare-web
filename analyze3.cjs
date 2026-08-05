const http = require('https');
const { PNG } = require('pngjs');

http.get('https://i.postimg.cc/5twPjRXW/Logo.png', (res) => {
  res.pipe(new PNG())
    .on('parsed', function() {
      let bgR = this.data[0], bgG = this.data[1], bgB = this.data[2], bgA = this.data[3];
      console.log('Background:', bgR, bgG, bgB, bgA);
    });
});
