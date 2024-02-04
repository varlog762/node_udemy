// function fib(position) {
//   if (position === 0 || position === 1) {
//     return position;
//   }

//   let prevPrev = 0;
//   let prev = 1;
//   let result;

//   for (let i = 1; i < position; i++) {
//     result = prevPrev + prev;
//     prevPrev = prev;
//     prev = result;
//   }

//   return result;
// }

// console.log(fib(11));

const fs = require('fs');

console.log('Start');

function promFib(position) {
  return new Promise((resolve, reject) => {
    if (position === 0 || position === 1) {
      return position;
    }

    let prevPrev = 0;
    let prev = 1;
    let result;

    for (let i = 1; i < position; i++) {
      result = prevPrev + prev;
      prevPrev = prev;
      prev = result;
    }

    result > 100 ? resolve(result) : reject('Error 121');
  });
}

promFib(1000)
  .then(res => res + '')
  .then(res => res.split(''))
  .then(res => console.log(res))
  .catch(err => console.log(err));

promFib(10)
  .then(res => console.log(res))
  .catch(err => console.log(err));

console.log('End');

console.log(module, '\n', exports, '\n', require);
