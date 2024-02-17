import fs from 'node:fs';
import path from 'node:path';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
  console.warn(`Source dir ${sourceDir} doesn't exists!`);
  console.log('Exiting...');
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmSync(destinationDir, { recursive: true });
  console.log(`${destinationDir} was deleted, as already existing!`);
}

fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }

  if (fileNames.length) {
    fileNames.forEach((fileName, index) => {
      const sourceFilePath = path.join(sourceDir, fileName);
      const destinationFilePath = path.join(
        destinationDir,
        `${index}-${fileName}`
      );

      const readStream = fs.createReadStream(sourceFilePath);
      const writeStream = fs.createWriteStream(destinationFilePath);

      readStream.pipe(writeStream);

      writeStream.on('finish', () => console.log(`${fileName} was copied`));
    });
  }
});
