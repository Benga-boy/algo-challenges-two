"use strict";
// Given a character, check if it represents an odd digit, an even digit or not a digit at all.
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterParity = void 0;
// Example
// For symbol = '5', the output should be characterParity(symbol) = "odd";
// For symbol = '8', the output should be characterParity(symbol) = "even";
// For symbol = 'q', the output should be characterParity(symbol) = "not a digit".
function characterParity(symbol) {
    if (isNaN(parseInt(symbol))) {
        return 'not a digit';
    }
    const result = parseInt(symbol) % 2 === 0 ? 'even' : 'odd';
    return result;
}
exports.characterParity = characterParity;
console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
function commonCharacterCount(s1, s2) {
    let result = 0;
    s2.split('').forEach(val => {
        if (s1.split('').includes(val)) {
            result = result + 1;
        }
    });
    return result;
}
console.log(commonCharacterCount('aabcc', 'adcaa'));
