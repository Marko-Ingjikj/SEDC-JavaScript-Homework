//  DOG YEARS TO HUMAN YEARS
function convertDogToHumanYears(dogYears) {
  let result = dogYears * 7;
  return result;
}

let firstDogAge = convertDogToHumanYears(4);
console.log(firstDogAge);

let secondDogAge = convertDogToHumanYears(1);
console.log(secondDogAge);

let thirdDogAge = convertDogToHumanYears(9);
console.log(thirdDogAge);

//  HUMAN YEARS TO DOG YEARS
function convertHumanToDogYears(humanYears) {
  let result = humanYears / 7;
  return result;
}

let firstHumanAge = convertHumanToDogYears(100);
console.log(firstHumanAge);

let secondHumanAge = convertHumanToDogYears(10);
console.log(secondHumanAge);

let thirdHumanAge = convertHumanToDogYears(35);
console.log(thirdHumanAge);
