 
// 7-multi_c.js
const args = process.argv;
const x = parseInt(args[2], 10);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < Math.abs(x)) { // absolute value ensures negative numbers print correctly
    console.log("C is fun");
    i++;
  }
}
