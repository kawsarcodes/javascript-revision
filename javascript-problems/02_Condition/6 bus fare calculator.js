/*
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 65;
let isStudent = false;
let fare = 800;

if (age < 10) {
  fare = 0;
} else if (isStudent) {
  fare = fare * 0.5;
} else if (age >= 60) {
  fare = fare * 0.85;
} else {
  fare = 800;
}

console.log("Ticket Fare:", fare, "tk");
