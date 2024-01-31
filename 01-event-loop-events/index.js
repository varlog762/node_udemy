const fs = require('fs');
const dns = require('dns');

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log('Programm start');

//Close events
fs.writeFile('./test.txt', 'Hello world!', () => info('File written'));

//Promises
Promise.resolve().then(() => info('Promise 1'));

//Next tick
process.nextTick(() => info('Next tick 1'));

//setImmediate (Check)
setImmediate(() => info('Immediate 1'));

//Timeouts
setTimeout(() => info('Timeout 1'), 0);
setTimeout(() => {
  process.nextTick(() => info('Next tick 2'));
  info('Timeout 2');
}, 100);

//Intervals
let intervalCount = 0;
const myInterval = setInterval(() => {
  info(`Interval ${(intervalCount += 1)}`);
  if (intervalCount > 1) {
    clearInterval(myInterval);
  }
}, 50);

if (intervalCount > 1) {
  clearInterval(myInterval);
}

//I/O events
dns.lookup('localhost', (err, address, family) => {
  info('DNS 1 localhost');
  Promise.resolve().then(() => info('Promise 2'));
  process.nextTick(() => info('Next tick 3'));
});

console.log('Programm end');
