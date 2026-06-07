/*

Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed.

Input:
const statement = 'I am a hard working person'

Output:
'person working hard a am I'

*/

const statement = 'I am a hard working person';
let words = statement.split(' ');
let reversedWords = [];

for (let i = words.length - 1; i >= 0; i--) {
  reversedWords.push(words[i]);
}

console.log(reversedWords.join(' '));