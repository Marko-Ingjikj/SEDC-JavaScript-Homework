/*Write a loop in javascript that goes from 1-20 that will print each number in the console
 and add "number is even" after every even number and add "number is odd" after every odd number */

function returnEvenOrOdd(min, max) {
  for (let i = min; i <= max; i++) {
    if (i % 2 == 0) console.log(`${i} is even`);
    else console.log(`${i} is odd`);
  }
}
returnEvenOrOdd(1, 20);
