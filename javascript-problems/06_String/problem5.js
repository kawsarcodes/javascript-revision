/*
Problem-5: Capitalize Every first Letter of each word in a String
*/

function capitalizeFirstLetter(str) {
    const words = str.split(' ');
    const capitalizedWords = [];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            const capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
            capitalizedWords.push(capitalized);
        } else {
            capitalizedWords.push(word);
        }
    }
    
    return capitalizedWords.join(' ');
}

// Using map method
function capitalizeFirstLetter2(str) {
    return str.split(' ').map(word => {
        if (word.length === 0) return word;
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Using regex
function capitalizeFirstLetter3(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Alternative: capitalize first letter, rest as is (no lowercasing)
function capitalizeFirstLetterOnly(str) {
    return str.split(' ').map(word => {
        if (word.length === 0) return word;
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

// Test cases
console.log(capitalizeFirstLetter("hello world")); // "Hello World"
console.log(capitalizeFirstLetter("javascript is awesome")); // "Javascript Is Awesome"
console.log(capitalizeFirstLetter("cAPItalIZE Me")); // "Capitalize Me"
console.log(capitalizeFirstLetter2("hello world")); // "Hello World"
console.log(capitalizeFirstLetter3("hello world")); // "Hello World"
console.log(capitalizeFirstLetterOnly("javaScript is AMAZING")); // "JavaScript Is AMAZING"