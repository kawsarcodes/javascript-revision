/*
Problem-1: Access the `golden rod` color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

Output: '#daa520'
*/

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"]); 

// Solution 2: Using variable
const colorKey = "golden rod";
console.log(colors[colorKey]); 

// Solution 3: If you want to store it in a variable
const goldenRodColor = colors["golden rod"];
console.log(goldenRodColor); 
