// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Example

// chunkyMonkey(["a", "b", "c", "d"], 2) should return [ ["a", "b"], ["c", "d"] ].
// chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [ [0, 1, 2, 3], [4, 5]].

function chunkyMonkey(arr: any[], size: number): any[][] {
  const chunkedArr: number[][] = []

  // loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1]

    // Check if there is a last and if last length is equal to the chunk length
    if (!last || last.length === size) {
      chunkedArr.push([val])
    } else {
      last.push(val)
    }
  })

  return chunkedArr
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));