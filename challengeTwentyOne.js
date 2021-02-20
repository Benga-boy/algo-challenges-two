"use strict";
// Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.
// The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.
// As pixel's value is an integer, all fractions should be rounded down.
function boxBlur(image) {
    const result = image.flat().reduce((acc, num) => acc + num);
    return [[Math.floor(result / image.flat().length)]];
}
console.log(boxBlur([[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]]));
console.log(boxBlur([[1, 1, 1, 1], [1, 7, 2, 1], [1, 1, 1, 1], [4, 4, 4, 4]]));
