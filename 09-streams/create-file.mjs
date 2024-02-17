import fs from 'fs';
import path from 'path';

// How to run program: node createFile.mjs <fileNme> <linesQty>
if (!process.argv[2] || !process.argv[3]) {
  console.log('Filename & lines qty must be supplied as arguments');
  process.exit(0);
}

const filename = process.argv[2];
const lineQty = process.argv[3];

if (isNaN(lineQty)) {
  console.log('Lines qty must be a number');
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files', filename));

for (let i = 1; i <= lineQty; i++) {
  writeStream.write(
    `This is a line number ${i} in the automatically generated file\n`
  );
}

writeStream.end(() => {
  console.log(`Automatically generated file ${filename} was created`);
});
