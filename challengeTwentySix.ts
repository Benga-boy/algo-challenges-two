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


export function depositProfit(deposit: number, rate: number, threshold: number): number {
  let count = 0
  let dep = deposit

  while (dep < threshold) {
    dep = dep * (rate / 100 + 1)
    count ++
  }

  return count
}

console.log(depositProfit(100, 20, 170))

function commonCharacterCount(s1: string, s2: string): number {
  let result = 0

  s2.split('').forEach(val => {
    if (s1.split('').includes(val)) {
      result = result + 1
    }
  })

  return result
}

console.log(commonCharacterCount('aabcc', 'adcaa'));

function isLucky(n: number): boolean {
  const convertToString = n.toString().split('')
  let firstTotal = 0
  let secondTotal = 0
  const firstHalf = convertToString.slice(0, convertToString.length / 2)
  const secondHalf = convertToString.slice(convertToString.length / 2)

  firstHalf.forEach(num => firstTotal += parseInt(num))
  secondHalf.forEach(num => secondTotal += parseInt(num))
  
  return firstTotal === secondTotal
}

console.log(isLucky(1230));
console.log(isLucky(239017));