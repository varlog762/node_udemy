const fs = require('fs');

function timeStamp() {
  return performance.now().toFixed(2);
}

console.log('Programm start');

setTimeout(() => console.log('Timeout 1', timeStamp()), 0);
setTimeout(() => console.log('Timeout 2', timeStamp()), 10);

fs.writeFile('./test.txt', 'Hello world!', () =>
  console.log('File writen', timeStamp())
);

Promise.resolve().then(() => console.log('Promise 1', timeStamp()));

process.nextTick(() => console.log('Next tick 1', timeStamp()));

setImmediate(() => console.log('Immediate 1', timeStamp()));

console.log('Programm end');
