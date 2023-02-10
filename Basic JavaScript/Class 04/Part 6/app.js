/* Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"] */

let firstName = ["Bob", "Jill", "John", "Mark"];
let lastName = ["Gregory", "Wurtz", "Smith", "Philips"];

function printFirstAndLastNames(firstName, lastName) {
  let number = 1;
  let fullName = [];
  for (let i = 0; i < firstName.length; i++) {
    fullName.push(`${number}. ${firstName[i]} ${lastName[i]}`);
    number++;
  }
  return fullName;
}

console.log(printFirstAndLastNames(firstName, lastName));
