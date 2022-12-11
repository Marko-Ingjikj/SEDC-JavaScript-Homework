let phonePrice = 119.95;
let numberOfPhones = prompt("How many phones would you like to buy");

numberOfPhones = Number(numberOfPhones);

let fullPrice =
  numberOfPhones * phonePrice + ((numberOfPhones * phonePrice) / 100) * 5;
console.log(fullPrice);
