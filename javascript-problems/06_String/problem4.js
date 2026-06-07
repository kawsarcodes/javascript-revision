/*
Problem-4: If a given string has either x, replace x by y. 
If the given string has X, replace it by Y.
*/

function replaceXWithY(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            result += 'y';
        } else if (str[i] === 'X') {
            result += 'Y';
        } else {
            result += str[i];
        }
    }
    
    return result;
}

// Using replaceAll (modern approach)
function replaceXWithY2(str) {
    return str.replaceAll('x', 'y').replaceAll('X', 'Y');
}

// Using regex with global flag
function replaceXWithY3(str) {
    return str.replace(/x/g, 'y').replace(/X/g, 'Y');
}

// Single regex solution
function replaceXWithY4(str) {
    return str.replace(/x/gi, function(match) {
        return match === 'x' ? 'y' : 'Y';
    });
}

// Test cases
console.log(replaceXWithY("xerox")); // "yeroy"
console.log(replaceXWithY("X-ray Xylophone")); // "Y-ray Yylophone"
console.log(replaceXWithY("extra context")); // "eytra contery"
console.log(replaceXWithY2("xerox")); // "yeroy"
console.log(replaceXWithY3("X-ray Xylophone")); // "Y-ray Yylophone"
console.log(replaceXWithY4("Xerox xerox")); // "Yeroy yeroy"