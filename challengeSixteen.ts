// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3.

// For inputArray = [2, 9, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 8.

function arrayMaximalAdjacentDifference(inputArray: number[]): any {
  const newArr: number[] = []

  inputArray.forEach((num: number, i: number) => newArr.push(num - inputArray[i + 1]))


  return Math.max(...newArr.filter(num => Boolean(num) !== false))
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 5, 7, 9]))


