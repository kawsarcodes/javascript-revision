/*
3. Checking Array Membership with 'includes'

    - Create an array of books containing different books
    - Use the includes method to check if the array contains a JavaScript book
    - Print a message to the console indicating whether the element is present in the array or not

*/

let books = ["English Grammar", "Mathematics", "JavaScript Basics", "Physics"];

if (books.includes("JavaScript Basics")) {
  console.log("The JavaScript book is present in the array.");
} else {
  console.log("The JavaScript book is not present in the array.");
}