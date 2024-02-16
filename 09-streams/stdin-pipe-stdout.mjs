import stream, { Transform } from 'node:stream';
import fs from 'node:fs';

const upperCaseStream = new Transform({
  transform(chunk, encoding, callback) {
    const upperCased = chunk.toString().toUpperCase();
    callback(null, upperCased);
  },
});

const reverseStream = new Transform({
  transform(chunk, encoding, callback) {
    const arrayOfChar = chunk.toString().split('');
    const lastChar = arrayOfChar.pop();
    const reversed = arrayOfChar.reverse().concat(lastChar).join('');
    callback(null, reversed);
  },
});

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// // Pipe to file
// const filePath = './files/stdin-dump.txt';

// const writeStreeam = fs.createWriteStream(filePath);

// process.stdin.pipe(writeStreeam);

// // Pipe to std.out
// process.stdin.pipe(process.stdout);
