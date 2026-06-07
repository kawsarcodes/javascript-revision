/*
Problem-1: Count how many times a string has the letter `a`
*/

function countLetterA(str) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            count++;
        }
    }
    
    return count;
}

// Alternative using split and filter
function countLetterA2(str) {
    return str.split('').filter(char => char === 'a').length;
}

// Test cases
console.log(countLetterA("JavaScript is amazing")); // 3
console.log(countLetterA("Banana")); // 3
console.log(countLetterA("Apple")); // 0
console.log(countLetterA2("JavaScript is amazing")); // 3