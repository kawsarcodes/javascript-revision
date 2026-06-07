/*
Problem-2: Count how many times a string has the letter `a` or `A`
*/

function countLetterAOrA(str) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }
    
    return count;
}

// Alternative using regex
function countLetterAOrA2(str) {
    const matches = str.match(/[aA]/g);
    return matches ? matches.length : 0;
}

// Alternative using toLowerCase
function countLetterAOrA3(str) {
    let count = 0;
    const lowerStr = str.toLowerCase();
    
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === 'a') {
            count++;
        }
    }
    
    return count;
}

// Test cases
console.log(countLetterAOrA("JavaScript is Awesome")); // 3
console.log(countLetterAOrA("Banana")); // 3
console.log(countLetterAOrA("Apple")); // 1
console.log(countLetterAOrA2("JavaScript is Awesome")); // 3
console.log(countLetterAOrA3("JavaScript is Awesome")); // 3