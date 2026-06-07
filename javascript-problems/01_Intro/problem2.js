/*

Task-2

Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04

*/

let math = 75.25;
let biology = 65;
let chemistry = 80;
let physics = 35.45;
let bangla = 99.50;

let total = math + biology + chemistry + physics + bangla;
let average = total / 5;

console.log(average.toFixed(2));