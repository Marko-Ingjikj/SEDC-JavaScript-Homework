/*Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it */

let arrayOfNumber = [1, 2, 3, 5, 6, 7, 8, 9, 20];

function sumOfMinAndMax(array) {
  let min = array[0];
  let max = array[0];
  for (num of array) {
    if (min > num) min = num;

    if (max < num) max = num;
  }
  let sum = min + max;
  return sum;
}

console.log(sumOfMinAndMax(arrayOfNumber));
