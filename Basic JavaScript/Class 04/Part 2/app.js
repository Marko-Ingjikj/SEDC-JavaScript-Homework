/* Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
 If one of the numbers of the array is invalid show an error message instead of a result. */

let arrayOfNumbers = [1, 2, 3, 4, 5];
let arrayOfNumberAndStrings = [1, "SEDC", 2, "G4", 3];

function validateNumber(num) {
  if ((Number = isNaN(num))) {
    return `There was an error during the function`;
  }
}

function sumOfNumbers(array) {
  let sum = 0;
  for (let num of array) {
    if (validateNumber(num)) return `There was an error during the function`;
    sum += num;
  }
  return sum;
}

console.log(sumOfNumbers(arrayOfNumbers));
console.log(sumOfNumbers(arrayOfNumberAndStrings));
