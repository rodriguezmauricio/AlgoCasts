// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//HEADER: SOLUTION 2
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//HEADER: SOLUTION 2
// function reverse(str) {
//   const strArr = str.split("");
//   const newArr = [];

//   for (let letter of strArr) {
//     newArr.unshift(letter);
//   }
//   return newArr.join("");
// }

//HEADER: SOLUTION 3
// function reverse(str) {
//   const strArr = str.split("");
//   let reversedStr = "";

//   for (let letter of strArr) {
//     reversedStr = letter + reversedStr;
//   }
//   return reversedStr;
// }

//HEADER: SOLUTION 4
function reverse(str) {
  return str.split("").reduce((reversed, added) => added + reversed, "");
}

console.log(reverse("sad"));

module.exports = reverse;
