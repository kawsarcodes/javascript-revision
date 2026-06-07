/*

Task-7:
Find the friend with the smallest name.

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(friends) {
  let smallest = friends[0];

  for (let name of friends) {
    if (name.length < smallest.length) {
      smallest = name;
    }
  }

  return smallest;
}

console.log(smallestName(names));