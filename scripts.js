function getComputerChoice(){
    let x = Math.floor((Math.random() * 100) + 1);

    if (x <= 33) {
        return("Rock");
    } else if (x >= 34 && x <= 66) {
        return("Paper");
    } else {
        return("Scissors");
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper") {
        return("You Lose! Paper beats rock!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You Lose! Scissors beat Paper!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You Lose! Rock beats Scissors!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You Win! Paper beats Rock!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You Win! Scissors beat Rock!");
    }
}

const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase()