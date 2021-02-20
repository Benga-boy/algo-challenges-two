// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

// Example

// For symbol = '5', the output should be characterParity(symbol) = "odd";
// For symbol = '8', the output should be characterParity(symbol) = "even";
// For symbol = 'q', the output should be characterParity(symbol) = "not a digit".

export function characterParity(symbol: string): string {
  if (isNaN(parseInt(symbol))) {
    return 'not a digit'
  }

  const result = parseInt(symbol) % 2 === 0 ? 'even' : 'odd'

  return result
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))


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

