const fs = require('fs');

try {
  fs.writeFileSync('./firstSync.txt', 'Hello from node.js');
  console.log('File was writen!');
  fs.appendFileSync('./firstSync.txt', '\nOne more line');
  console.log('Append text to the firstSync.txt file');
  fs.renameSync('./firstSync.txt', './renamedFirstSync.txt');
  console.log('File was renamed!');
} catch (err) {
  console.log(err);
}
