const mainHTML = document.querySelector("main");
const firstBtn = document.querySelector(".firstBtn");
const nextPageBtn = document.querySelector(".nextPageBtn");
const previousPageBtn = document.querySelector(".previousPageBtn");

firstBtn.addEventListener("click", function () {
  fetch(`https://swapi.dev/api/planets/?page=1`)
    .then((res) => res.json())
    .then((data) => createTable(data));
  firstBtn.style.visibility = "hidden";
  previousPageBtn.style.visibility = "hidden";
  nextPageBtn.style.visibility = "visible";
});

nextPageBtn.addEventListener("click", function () {
  fetch(`https://swapi.dev/api/planets/?page=2`)
    .then((res) => res.json())
    .then((data) => createTable(data));
  firstBtn.style.visibility = "hidden";
  nextPageBtn.style.visibility = "hidden";
  previousPageBtn.style.visibility = "visible";
});

previousPageBtn.addEventListener("click", function () {
  fetch(`https://swapi.dev/api/planets/?page=1`)
    .then((res) => res.json())
    .then((data) => createTable(data));
  previousPageBtn.style.visibility = "hidden";
  nextPageBtn.style.visibility = "visible";
});

const createTable = (data) => {
  mainHTML.innerHTML = "";
  let element = document.createElement("table");
  element.classList.add("table");
  element.innerHTML = "<table border=1px>";
  element.innerHTML += `
    <th style="border: 1px solid black;">Planet Name</th>
    <th style="border: 1px solid black;">Population</th>
    <th style="border: 1px solid black;">Climate</th>
    <th style="border: 1px solid black;">Gravity</th>`;

  data.results.forEach(
    (planet) =>
      (element.innerHTML += `<tr style="border: 1px solid black;">
                <td style="border: 1px solid black;">${planet.name}</td>
                <td style="border: 1px solid black;">${planet.population}</td>
                <td style="border: 1px solid black;">${planet.climate}</td>
                <td style="border: 1px solid black;">${planet.gravity}</td>
             </tr>`)
  );
  element.innerHTML += `</table>`;
  document.body.appendChild(element);
  element.style.border = "1px solid black";

  mainHTML.appendChild(element);
};
