/*
Problem-3: Check whether a string contains all the vowels a, e, i, o, u
*/

function containsAllVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    
    for (let vowel of vowels) {
        if (!lowerStr.includes(vowel)) {
            return false;
        }
    }
    
    return true;
}

// Alternative using Set
function containsAllVowels2(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const lowerStr = str.toLowerCase();
    
    for (let char of lowerStr) {
        vowels.delete(char);
    }
    
    return vowels.size === 0;
}

// Alternative using every method
function containsAllVowels3(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    
    return vowels.every(vowel => lowerStr.includes(vowel));
}

// Test cases
console.log(containsAllVowels("Education")); // true
console.log(containsAllVowels("A quick brown fox jumps over the lazy dog")); // true
console.log(containsAllVowels("Hello World")); // false
console.log(containsAllVowels("AEIOU")); // true
console.log(containsAllVowels2("Education")); // true
console.log(containsAllVowels3("Education")); // true