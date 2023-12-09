// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunk = [];
//   let innerChunk = [];

//   for (let i = 0; i < array.length; i++) {
//     if (innerChunk.length < size) {
//       innerChunk.push(array[i]);
//     } else {
//       chunk.push(innerChunk);
//       innerChunk = [array[i]];
//     }
//   }

//   if (innerChunk.length > 0) {
//     chunk.push(innerChunk);
//   }

//   return chunk;
// }

function chunk(array, size) {
  let finalChunk = [];
  let arrCopy = [...array];
  let innerChunk = [];

  for (let piece of arrCopy) {
    innerChunk.push(piece);

    if (innerChunk.length === size) {
      finalChunk.push(innerChunk);
      innerChunk = [];
    }
  }

  if (innerChunk.length > 0) {
    finalChunk.push(innerChunk);
  }

  return finalChunk;
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2));

module.exports = chunk;
