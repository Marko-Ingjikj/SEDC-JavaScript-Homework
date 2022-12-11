let yearOfBirth = prompt("Enter your year of birth");
yearOfBirth = Number(yearOfBirth);

if ((Number = isNaN(yearOfBirth))) {
  alert("Please enter a valid year");
}

let zodiacSignCalculator = (yearOfBirth - 4) % 12;

if (zodiacSignCalculator == 0) {
  alert("You are a Rat");
} else if (zodiacSignCalculator == 1) {
  alert("You are a Ox");
} else if (zodiacSignCalculator == 2) {
  alert("You are a Tiger");
} else if (zodiacSignCalculator == 3) {
  alert("You are a Rabbit");
} else if (zodiacSignCalculator == 4) {
  alert("You are a Dragon");
} else if (zodiacSignCalculator == 5) {
  alert("You are a Snake");
} else if (zodiacSignCalculator == 6) {
  alert("You are a Horse");
} else if (zodiacSignCalculator == 7) {
  alert("You are a Goat");
} else if (zodiacSignCalculator == 8) {
  alert("You are a Monkey");
} else if (zodiacSignCalculator == 9) {
  alert("You are a Rooster");
} else if (zodiacSignCalculator == 10) {
  alert("You are a Dog");
} else if (zodiacSignCalculator == 11) {
  alert("You are a Pig");
}
