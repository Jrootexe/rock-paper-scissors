//create function to get random result from computer

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

// Create function to get results of playerSelection and computerSelection in the game

let record = []; 

function playRound(playerSelection, computerSelection){ 
    if (playerSelection === "rock" && computerSelection === "paper") {
        record.push("Lose");
        return("You Lose! Paper beats Rock!");

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        record.push("Lose");
        return("You Lose! Scissors beat Paper!");

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        record.push("Lose");
        return("You Lose! Rock beats Scissors!");

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        record.push("Win");
        return("You Win! Rock beats Scissors!");

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        record.push("Win");
        return("You Win! Paper beats Rock!");

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        record.push("Win");
        return("You Win! Scissors beat Paper!");

    } else if (playerSelection === "rock" && computerSelection === "rock") {
        record.push("Draw");
        return("It's a draw! Rock can't beat Rock!");

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        record.push("Draw");
        return("It's a draw! Paper can't beat Paper!");

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        record.push("Draw");
        return("It's a draw! Scissors can't beat Scissors!");
    }
}

let computerSelection = getComputerChoice().toLowerCase();

// playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

// console.log(playRound(playerSelection, computerSelection));

//create function to play five rounds of the game and determine who the winner is

function game(){
    let playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    
    let computerSelection = getComputerChoice().toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    
    computerSelection = getComputerChoice().toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    
    computerSelection = getComputerChoice().toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    
    computerSelection = getComputerChoice().toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    
    computerSelection = getComputerChoice().toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

    return(record);
}