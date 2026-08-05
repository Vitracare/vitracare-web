const fs = require('fs');
const { PNG } = require('pngjs');

const data = fs.readFileSync('yeux.png');
const png = PNG.sync.read(data);
console.log('Top left pixel:', png.data[0], png.data[1], png.data[2], png.data[3]);
