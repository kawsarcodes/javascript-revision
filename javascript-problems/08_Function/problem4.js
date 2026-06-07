/*

Task-4  
Write a function called count_zero() which will take a binary string 
as parameter and count how many 0’s are there in that string.

*/

function count_zero(binaryString) {
  let count = 0;

  for (let char of binaryString) {
    if (char === '0') {
      count++;
    }
  }

  return count;
}

console.log(count_zero("1010010010"));