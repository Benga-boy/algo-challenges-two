// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be checkPalindrome(inputString) = false;
// For inputString = "a", the output should be checkPalindrome(inputString) = true.

function checkPalindrome(inputString: string): boolean {
  return inputString.toLowerCase() === inputString.toLowerCase().split('').reverse().join('')
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));


function companyBotStrategy(trainingData: number[][]): any {

let result: number[] = []

trainingData.forEach((num, i) => num.forEach((n, i) => num[i + 1] > 0 ? result.push(num[0]) : n))
if (result.length > 0) {
  return result.reduce((acc, num) => (acc + num)) / result.length
} else {
  return 0
}
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));


function confirmEnding(str: string, target: string) {
  return str.substr(target.length - 1) === target
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));


function sumOfTwo(a: number[], b: number[], v: number): boolean {
  const nums: number[] = []

  b.forEach(num => a.forEach(n => nums.push(num + n)))

  return nums.includes(v)

}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));

function properNounCorrection(noun: string): string {
  return noun.substring(0, 1).toUpperCase() + noun.substring(1).toLowerCase()
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));