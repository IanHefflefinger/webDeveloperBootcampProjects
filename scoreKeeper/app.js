// select elements on page
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("#input");
var displayScore = document.querySelector("#displayScore");

// user scores
var p1Score = 0;
var p2Score = 0;

// game function variables
var gameOver = false;
var winningScore = 5; // 5 is temp placeholder

// change winning score
numInput.addEventListener("change", function() {
  displayScore.textContent = this.value;
  winningScore = Number(this.value);
  resetGame();
});

// increment p1 score if gameover is false and winning score has not been reached
p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

// increment p2 score if gameover is false and winning score has not been reached
p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

// reset game and all its components
resetButton.addEventListener("click", function() {
  resetGame();
});

// reset game function
function resetGame() {
    // reset scores
    p1Score = 0;
    p2Score = 0;
    // reset displays
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    // reset status of game
    gameOver = false;
};