var playerOnePoint = document.querySelector("#playerOnePoint")
var playerTwoPoint = document.querySelector("#playerTwoPoint")
var playerOnePointButton = document.querySelector("#playerOnePointButton")
var playerTwoPointButton = document.querySelector("#playerTwoPointButton")
var resetButton = document.querySelector("#resetButton")
var input = document.querySelector("input")
var inputShow = document.querySelector("#inputShow")

var p1PointDisplay = 0;
var p2PointDisplay = 0;

var winningScore = 5;
var gameOver = false;

playerOnePointButton.addEventListener("click", function() {
  if (!gameOver) {
    p1PointDisplay++;
    playerOnePoint.textContent = p1PointDisplay;
    if (p1PointDisplay === winningScore) {
      gameOver = !gameOver;
      playerOnePoint.classList.add("win");
    }
  }
});

playerTwoPointButton.addEventListener("click", function() {
  if (!gameOver) {
    p2PointDisplay++;
    playerTwoPoint.textContent = p2PointDisplay;
    if (p2PointDisplay === winningScore) {
      gameOver = !gameOver;
      playerTwoPoint.classList.add("win");
    }
  }
});

resetButton.addEventListener("click", function() {
  BReset()
})

input.addEventListener("change", function() {
  winningScore = Number(input.value);
  inputShow.textContent = Number(input.value);
  BReset()
})

var BReset = () => {
  p1PointDisplay = 0;
  p2PointDisplay = 0;
  gameOver = false;
  playerOnePoint.textContent = p1PointDisplay;
  playerTwoPoint.textContent = p2PointDisplay;
  playerOnePoint.classList.remove("win");
  playerTwoPoint.classList.remove("win");
}
