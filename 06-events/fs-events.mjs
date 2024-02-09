import EventEmitter from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();

const filePath = './first.txt';

fileEmitter.on('writeComplete', () => {
  console.log('File was writen!');
  fs.appendFile(filePath, '\nOne more line', () => {
    fileEmitter.emit('appendComplete');
  });
});

fileEmitter.on('appendComplete', () => {
  console.log('Append text to the firstSync.txt file');
  fs.rename(filePath, './renamedFirstSync.txt', () =>
    fileEmitter.emit('renameComplete')
  );
});

fileEmitter.on('renameComplete', () => console.log('File was renamed!'));

fs.writeFile(filePath, 'Hello from node.js', () => {
  fileEmitter.emit('writeComplete');
});
