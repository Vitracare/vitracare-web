const http = require('https');
const { PNG } = require('pngjs');

http.get('https://i.postimg.cc/5twPjRXW/Logo.png', (res) => {
  res.pipe(new PNG())
    .on('parsed', function() {
      let r = this.data[this.width * this.height * 2], g = this.data[this.width * this.height * 2 + 1], b = this.data[this.width * this.height * 2 + 2];
      console.log('Center pixel roughly:', r, g, b);
    });
});
