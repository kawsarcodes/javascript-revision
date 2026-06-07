/*

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

*/

/*

Subtask-2:

Display sum of all the even numbers from 51 to 85.

*/

// ----- Subtask-1 -----
let sumOdd = 0;

for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    sumOdd += i;
  }
}

console.log("Sum of odd numbers:", sumOdd);


// ----- Subtask-2 -----
let sumEven = 0;

for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}

console.log("Sum of even numbers:", sumEven);