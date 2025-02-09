// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//HEADER: solution 1
// function fib(n) {
//   const fibArr = [0, 1];

//   //edge case
//   if (n < 2) {
//     return fibArr[n];
//   }

//   //general case if n > 2
//   for (let i = 1; i <= n; i++) {
//     fibArr.push(fibArr[i] + fibArr[i - 1]);
//   }

//   return fibArr[n];
// }

function fib(n) {
  //edge case
  if (n < 2) {
    return n;
  }

  //general case if n > 2
  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  return (...args) => {
    const cache = {};

    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

fib = memoize(fib);

console.log(fib(5));

module.exports = fib;
