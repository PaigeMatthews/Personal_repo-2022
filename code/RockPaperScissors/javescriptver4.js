const game = document.getElementById("game"); //getting elements from html to display the game and scores
const playerScore = document.getElementById("player-score");
const houseScore = document.getElementById("house-score");
const result = document.getElementById("result");

let playerPoints = 0;
let housePoints = 0; //making counters for house and player

//getting username
function getUName(){
  let name = prompt("Please enter your name:");
  document.getElementById("uname").innerHTML = name;
  }

game.addEventListener("click", playRound); //game starts on button click

function playRound(event) {
  let playerSelection = event.target.id;
  let houseSelection = housePlay();
  let outcome = getOutcome(playerSelection, houseSelection);

  result.innerHTML =  "Player played "+ playerSelection + ", the house played " + houseSelection + ". " + outcome; //displaying the outcome to the screen

  if (outcome === ("You Win!")) { //adding points to the counters
    playerPoints++;
    playerScore.innerHTML = playerPoints;
  } else if (outcome === ("You Lose!")) {
    housePoints++;
    houseScore.innerHTML = housePoints;
  }
}

function housePlay() {
  let options = ["rock", "paper", "scissors"]; //house generating a choice using a random number selector (Math function)
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getOutcome(player, house, name) { //stating how the scoring system works
  if (player === house) {
    return "It's a tie!";
  } else if (
    (player === "rock" && house === "scissors") ||
    (player === "paper" && house === "rock") ||
    (player === "scissors" && house === "paper")
  ) {
    return ("You Win!");
  } else {
    return ("You Lose!");
  }
}
