// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let mainHeading = document.getElementById("mainHeading");
mainHeading.innerText = "Text Changed";

let paragraphFirstDiv = mainHeading.nextElementSibling;
paragraphFirstDiv.innerText = "Text Changed Again";

let paragraphSecondDiv = document.querySelector(".second");
paragraphSecondDiv.innerText = "Text Changed";

let textSecondDiv = document.querySelector("text");
textSecondDiv.innerText = "Text Has Changed";

let allDivs = document.querySelectorAll("div");
let lastDiv = allDivs[2];

let headerOneLastDiv = lastDiv.firstElementChild;
headerOneLastDiv.innerText = "This Has Changed Aswell";

let headerThreeLastDiv = lastDiv.lastElementChild;
headerThreeLastDiv.innerText = "Changed Text";
