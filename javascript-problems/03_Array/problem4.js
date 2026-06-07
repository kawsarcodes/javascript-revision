/*
4. Checking if it's an Array

    - Create different variables, each containing either an array or a non-array value
    - Use isArray to check if each variable is an array
    - Print a message to the console indicating whether each variable is an array or not

*/

let arr = [1, 2, 3];
let str = "Hello";
let num = 25;
let obj = { name: "John" };

console.log(Array.isArray(arr));
console.log(Array.isArray(str));
console.log(Array.isArray(num));
console.log(Array.isArray(obj));