// DOCUMENT OBJECT MODEL

let redDiv = document.getElementById("red");
let greenDiv = document.getElementById("green");
let yellowDiv = document.getElementById("yellow");

redDiv.onclick = () => console.log("red");
greenDiv.onclick = () => console.log("green");
yellowDiv.onclick = () => console.log("yellow");

const squares = document.querySelectorAll(".colorSquare");
// forEach loop
const timesClicked = { red: 0, green: 0, yellow: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});

function clearScores() {
  timesClicked.red = 0;
  timesClicked.green = 0;
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  squares.forEach((square) => {
    square.innerText = "";
  });
}

const clearGameBtn = document.getElementById("clear-game");
clearGameBtn.onclick = () => clearScores();
