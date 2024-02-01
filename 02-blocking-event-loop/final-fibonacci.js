function fib(position) {
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

  return result;
}

console.log(fib(11));
