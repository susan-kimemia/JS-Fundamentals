// 9-add.js
const args = process.argv;

function add(a, b) {
  return a + b;
}

const a = parseInt(args[2], 10);
const b = parseInt(args[3], 10);

console.log(add(a, b));
 
