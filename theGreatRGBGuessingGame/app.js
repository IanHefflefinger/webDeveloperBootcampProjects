// verified connected
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  modeButtonListeners();
  setupSquares();
  reset();
};

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to clicked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  };
};

function modeButtonListeners() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      // remove from both
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      // add back to only the one in question
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; 
      reset();
    });
  };
};

function reset() {
  // generate new colors
  colors = generateRandomcolors(numSquares);
  // pick new random color from array
  pickedColor = pickColor();
  // change display color to match picked color
  colorDisplay.textContent = pickedColor;
  // remove span message
  messageDisplay.textContent = "";
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  // set reset button text back to normal
  resetButton.textContent = "New Colors";
};

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each squares color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  // pick random number
  var randomNumber = Math.floor(Math.random() * colors.length);
  // return color from array using random number
  return colors[randomNumber];
}

function generateRandomcolors(num) {
  // make array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  };
  // return array with colors
  return arr;
}

function randomColor() {
  // generate random number between 0 - 255 for each color
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}