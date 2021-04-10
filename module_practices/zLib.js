const zlib = require('zlib');
const fs = require('fs');

fs.createReadStream('fruits.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('fruits.txt.gz'));