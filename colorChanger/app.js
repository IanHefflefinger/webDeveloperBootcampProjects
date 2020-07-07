// this section written by myself
// document.getElementById("theButton").addEventListener("click", changeBackground);

// function changeBackground() {
//   if (document.body.style.backgroundColor !== "purple") {
//     document.body.style.backgroundColor = "purple";
//   } else {
//     document.body.style.backgroundColor = "white";
//   }
// }

// this section is a codealong
// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function() {
//   if (isPurple) {
//     document.body.style.backgroundColor = "white";
//     isPurple = false;
//   } else {
//     document.body.style.backgroundColor = "purple";
//     isPurple = true;
//   }
// })

// better way
var button = document.querySelector("#theButton");

button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
})