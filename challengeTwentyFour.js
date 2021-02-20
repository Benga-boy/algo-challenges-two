"use strict";
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
Object.defineProperty(exports, "__esModule", { value: true });
exports.centuryFromYear = void 0;
// Example
// For year = 1905, the output should be centuryFromYear(year) = 20;
// For year = 1700, the output should be centuryFromYear(year) = 17.
function centuryFromYear(year) {
    const century = year / 100;
    if (year % 100 === 0) {
        return century;
    }
    return Math.floor(year / 100) + 1;
}
exports.centuryFromYear = centuryFromYear;
console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
