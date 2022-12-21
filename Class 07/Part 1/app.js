/* Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1) */

let button = document.querySelector("button");
let rows;
let columns;

button.addEventListener("click", function () {
  rows = document.getElementById("rows").value;
  columns = document.getElementById("columns").value;
  rows = Number(rows);
  columns = Number(columns);

  for (let r = 0; r < rows; r++) {
   let row = document.getElementById("table").insertRow(r);
    for (let c = 0; c < columns; c++) {
      let column = row.insertCell(c);
      column.innerHTML = `Row- ${r + 1} Column ${c + 1}`;
    }
  }
});

// button.addEventListener("click", function () {
//   rows = document.querySelector("#rows").value;
//   rows = Number(rows);
//   columns = document.querySelector("#columns").value;
//   columns = Number(columns);
//   let x = document.querySelector("table");
//   for (let r = 0; r < rows; r++) {
//     x.insertRow(r);
//     for (let c = 0; c < columns; c++) {
//       let y = x.insertCell(c);
//       y.innerHTML = "Row-" + r + " Column-" + c;
//     }
//   }
// });
