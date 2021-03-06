// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1: string, s2: string): number {
  const string1: string[] = s1.split('')
  const string2: string[] = s2.split('')
  const s1Count = getCharList(string1)
  const s2Count = getCharList(string2)
  let total = 0

  for (const prop in s1Count) {
    if (s2Count.hasOwnProperty(prop)) {
      if(s2Count[prop] < s1Count[prop]) {
        total += s2Count[prop]
      } else {
        total += s1Count[prop]
      }
    }
  }

  return total
}

function getCharList(word: string[]): object {
const wordCount = {}

for (let i = 0; i < word.length; i ++) {
  if (wordCount.hasOwnProperty(word[i])) {
    wordCount[word[i]]++
  } else {
    wordCount[word[i]] = 1
  }
}

  return wordCount

}

console.log(commonCharacterCount('aabcc', 'adcaa'));