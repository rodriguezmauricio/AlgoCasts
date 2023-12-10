// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//HEADER: solution 1
// function vowels(str) {
//   const strArr = str.split("");
//   let vowelsArr = [];

//   for (let char of strArr) {
//     if (
//       char.toLowerCase() === "a" ||
//       char.toLowerCase() === "e" ||
//       char.toLowerCase() === "i" ||
//       char.toLowerCase() === "o" ||
//       char.toLowerCase() === "u"
//     ) {
//       vowelsArr.push(char);
//     }
//   }
//   return vowelsArr.length;
// }

//HEADER: solution 2
// function vowels(str) {
//   const strArr = str.split("");
//   let count = 0;

//   for (let char of strArr) {
//     if (
//       char.toLowerCase() === "a" ||
//       char.toLowerCase() === "e" ||
//       char.toLowerCase() === "i" ||
//       char.toLowerCase() === "o" ||
//       char.toLowerCase() === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

function vowels(str) {
  const strVowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (strVowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(vowels("Hi There!"));

module.exports = vowels;
