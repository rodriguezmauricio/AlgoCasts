// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let nString = n.toString();

  if (n < 0) {
    let reversedNum = nString.split("").splice(1).reverse().join("");
    return Number(reversedNum) * -1;
  } else {
    return Number(nString.split("").reverse().join(""));
  }
}

console.log(reverseInt(50));
console.log(reverseInt(-50));

module.exports = reverseInt;
