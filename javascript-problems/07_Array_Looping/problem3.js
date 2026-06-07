/*

Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.

Input:
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:
'TomTimTinTik'

*/

var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = '';

for (let name of names) {
  result += name;
}

console.log(result);