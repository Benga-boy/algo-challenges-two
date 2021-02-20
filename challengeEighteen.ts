// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Example

// For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

function arrayReplace(a: number[], b: number, c: number): any {
  return a.map((num: number) => num === b ? c : num)
}

console.log(arrayReplace([1, 2, 1], 1, 3));