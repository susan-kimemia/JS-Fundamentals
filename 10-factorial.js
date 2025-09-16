// 10-factorial.js
const args = process.argv;
const n = parseInt(args[2], 10);

function factorial(x) {
  if (isNaN(x) || x <= 0) return 1; // factorial of NaN or non-positive number is 1
  return x * factorial(x - 1);
}

console.log(factorial(n));
 
