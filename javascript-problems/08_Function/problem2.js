/*

Task-2
Take a number if the number is odd multiply it by 2 and return the result. 
If the number is even divide it by two and return the result.

*/

function processNumber(num) {
  if (num % 2 !== 0) {
    return num * 2;
  } else {
    return num / 2;
  }
}

console.log(processNumber(7));
console.log(processNumber(8));