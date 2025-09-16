 
// 5-to_integer.js
const args = process.argv;
const num = parseInt(args[2], 10); // convert first argument to integer

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
