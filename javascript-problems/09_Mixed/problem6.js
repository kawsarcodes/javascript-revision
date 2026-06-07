/*

Task-6:
Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];

*/

const heights2 = [167, 190, 120, 165, 137];

function findLowest(numbers) {
  let lowest = numbers[0];

  for (let num of numbers) {
    if (num < lowest) {
      lowest = num;
    }
  }

  return lowest;
}

console.log(findLowest(heights2));