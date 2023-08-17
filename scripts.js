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
        return("You Lose! Paper beats Rock!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You Lose! Scissors beat Paper!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You Lose! Rock beats Scissors!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You Win! Paper beats Rock!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You Win! Scissors beat Paper!");
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return("It's a draw! Rock can't beat Rock!");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return("It's a draw! Paper can't beat Paper!");
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return("It's a draw! Scissors can't beat Scissors!")
    }
}

const computerSelection = getComputerChoice().toLowerCase();

// playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

// console.log(playRound(playerSelection, computerSelection));

function game(){
    let playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

    console.log(playRound(playerSelection, computerSelection));
}