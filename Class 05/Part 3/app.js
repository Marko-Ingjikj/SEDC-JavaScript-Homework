/*Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML */

let recipe = prompt("What is the name of the recipe you want to see?");
document.getElementById("recipe").innerHTML = recipe;

let numberOfIngredients = prompt(
  "How many ingredients do we need for the recipe"
);
numberOfIngredients = Number(numberOfIngredients);

let ingredients = document.getElementById("ingredients");

function printIngredients() {
  ingredients.innerHTML = "";

  let liContent = "";

  for (let i = 0; i < numberOfIngredients; i++) {
    let ingredient = prompt("What is the name of the ingredient");
    liContent += `<li>${ingredient}</li>`;
  }
  ingredients.innerHTML += `<ul>${liContent}</ul>`;
}

printIngredients();
