// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//HEADER: Solution 1
// function capitalize(str) {
//   let arrStr = str.split(" ");

//   const newArr = arrStr.map((word) => {
//     return word[0].toUpperCase().concat(word.slice(1));
//   });

//   return newArr.join(" ");
// }

function capitalize(str) {
  let result = "";

  let splitted = str.split("");

  for (let char in splitted) {
    if (result === "") {
      result = splitted[char].toUpperCase();
    } else if (splitted[char - 1] === " ") {
      result += splitted[char].toUpperCase();
    } else {
      result += splitted[char];
    }
  }

  return result;
}

console.log(capitalize("a big fucking ass"));

module.exports = capitalize;
