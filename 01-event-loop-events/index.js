console.log('Programm start');

setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 10);

Promise.resolve().then(() => console.log('Promise 1'));

console.log('Programm end');
