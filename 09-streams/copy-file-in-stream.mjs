import fs from 'node:fs';
import path from 'node:path';

const fileName = './files/fifth.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(
  path.join('./copies', path.basename(fileName))
);

readStream.pipe(writeStream);

readStream.on('end', () => {
  console.log('Read stream ended');
});
writeStream.on('finish', () => {
  console.log('File was copied');
});
writeStream.on('close', () => {
  console.log('Write stream closed');
});
