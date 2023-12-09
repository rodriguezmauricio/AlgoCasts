// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//HEADER: solution 1
// function palindrome(str) {
//   const reversedStr = str.split("").reverse().join("");
//   return str === reversedStr
//   return str === reversedStr ? true : false;
// }

//HEADER: solution 2
function palindrome(str) {
  const arrStr = str.split("");
  return arrStr.every((char, index) => {
    return char === arrStr.at(-index - 1);
  });
}

console.log(palindrome("abba"));
console.log(palindrome("abbbaa"));

module.exports = palindrome;
