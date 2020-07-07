var userAnswer = prompt("Are we there yet?");

while (userAnswer.indexOf("yes") === -1) {
  var userAnswer = prompt("Are we there yet?");
}

alert("yay, we are here");