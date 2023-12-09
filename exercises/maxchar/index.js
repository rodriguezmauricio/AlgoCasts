// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//HEADER: Solution 1
// function maxChar(str) {
//   const arrStr = str.split("");
//   const objStr = {};
//   for (let char of arrStr) {
//     if (!objStr[char]) {
//       objStr[char] = 1;
//     } else {
//       objStr[char] += 1;
//     }
//   }

//   const objKeys = Object.keys(objStr);
//   const objValues = Object.values(objStr);
//   const maxValue = Math.max(...Object.values(objStr));

//   return objKeys[objValues.indexOf(maxValue)];
// }

//HEADER: Solution 2
function maxChar(str) {
  const arrStr = str.split("");
  const objStr = {};
  let max = 0;
  let maxChar = "";

  for (let char of arrStr) {
    objStr[char] = objStr[char] + 1 || 1;
  }

  for (let char in objStr) {
    if (objStr[char] > max) {
      max = objStr[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar("abcccccccd"));
module.exports = maxChar;
