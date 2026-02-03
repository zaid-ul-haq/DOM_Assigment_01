// Change Text Using JavaScript
let heading = document.getElementById("heading");
heading.innerText = "Welcome to JavaScript DOM";

// Change Paragraph Text on Button Click
let changeText = function () {
  document.getElementById("para").innerText = "Paragraph text changed!";
};

// Change Background Color on Button Click
let changeBackground = function () {
  document.body.style.backgroundColor = "#3E7CB1";
};

// Show Alert Message on Button Click
let showAlert = function () {
  alert("DOM is Working Properly!");
};

// Update Text Using Input Field
let updateText = function () {
  let inputValue = document.getElementById("input").value;
  document.getElementById("paragraph-1").innerText = inputValue;
};
