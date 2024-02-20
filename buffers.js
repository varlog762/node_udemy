const { Buffer } = require('buffer');

const emptyBuffer = Buffer.alloc(42);
console.log(emptyBuffer);
const filledBuffer = Buffer.alloc(42, 1);
console.log(filledBuffer);
const fastBuffer = Buffer.allocUnsafe(42, 1);
console.log(fastBuffer);
const bufferFromString = Buffer.from('javascript');
console.log(bufferFromString);
const bufferFronStringLatin1 = Buffer.from('javascript', 'latin1');
console.log(bufferFronStringLatin1);
const bufferFromArray = Buffer.from([1, 2, 3]);
console.log(bufferFromArray);
