const path = require('path');

const filePath = '/Users/greg/Projects/travelToJapan/index.html';
const textFilePath = '/Users/greg/1.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); //false

console.log(path.basename(filePath)); // index.html
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // /Users/greg/Projects/travelToJapan
console.log(path.dirname(directoryPath)); // ./node

console.log(path.resolve(relativePath));
// /Users/greg/Projects/node_udemy/07-path/node/movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(directoryPath)); // ''

console.log(path.parse(filePath));
/*
{
  root: '/',
  dir: '/Users/greg/Projects/travelToJapan',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}
*/

const parsedPath = path.parse(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
// /Users/greg/Projects/travelToJapan/renamed-index.mjs
