// 7-multi_c.js
const args = process.argv;
const x = parseInt(args[2], 10);

if (isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}
 
