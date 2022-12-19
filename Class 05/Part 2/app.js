/* Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11) */

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let content = document.getElementById("content");
let sum = document.getElementById("sum");

function printGrades(arrayOfNumbers) {
  let sumOfNumbers = 0;
  content.innerHTML = "";

  let liContent = "";

  for (let num of arrayOfNumbers) {
    liContent += `<li>${num}</li>`;
    sumOfNumbers += num;
  }
  content.innerHTML += `<ul>${liContent}</ul>`;
  sum.innerHTML += `${sumOfNumbers}`;
}

printGrades(arrayOfNumbers);
