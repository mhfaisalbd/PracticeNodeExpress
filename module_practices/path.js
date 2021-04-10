const path = require('path');

const filePath = '/fruits.txt';

console.log(path.basename(filePath));

console.log(path.basename(filePath, path.extname(filePath)));

console.log(path.extname(filePath));

console.log(path.dirname(filePath));

let newPath = path.join(process.cwd(), 'Node', filePath);

console.log(newPath);