// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//HEADER: Solution 1
// function anagrams(stringA, stringB) {
//   return (
//     stringA.toLowerCase().split("").sort().join("") ===
//     stringB.toLowerCase().split("").sort().join("")
//   );
// }

function anagrams(stringA, stringB) {
  const objA = createObjectFromString(stringA);
  const objB = createObjectFromString(stringB);

  for (let char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }

  return true;
}

function createObjectFromString(str) {
  const arrStr = str.split("");
  const obj = {};

  for (let char of arrStr) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }

  return obj;
}

console.log(anagrams("salad", "dalas"));

module.exports = anagrams;
