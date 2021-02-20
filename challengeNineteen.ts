// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be avoidObstacles(inputArray) = 4.

function avoidObstacles(inputArray: number[]): any {
  const sortedArr: number[] = inputArray.sort((a, b) => a - b)
  const largestVal = inputArray[inputArray.length - 1]
  console.log(largestVal)

  for (let i = 1; i <= largestVal + 1; i ++) {
    if (inputArray.every(el => el % i !== 0)) {
      return i
    }
  }

  return sortedArr
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));