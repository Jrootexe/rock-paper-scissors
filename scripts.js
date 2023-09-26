
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

//

let record = [];

function playRound(playerSelection, computerSelection){ 
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        record.push("Lose");
        return("<p>You Lose! Paper beats Rock!");

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        record.push("Lose");
        return("<p>You Lose! Scissors beat Paper!");

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        record.push("Lose");
        return("<p>You Lose! Rock beats Scissors!");

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        record.push("Win");
        return("<p>You Win! Rock beats Scissors!");

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        record.push("Win");
        return("<p>You Win! Paper beats Rock!");

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        record.push("Win");
        return("<p>You Win! Scissors beat Paper!");

    } else if (playerSelection === "rock" && computerSelection === "rock") {
        record.push("Draw");
        return("<p>It's a draw! Rock can't beat Rock!");

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        record.push("Draw");
        return("<p>It's a draw! Paper can't beat Paper!");

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        record.push("Draw");
        return("<p>It's a draw! Scissors can't beat Scissors!");
    }
}

let computerSelection = getComputerChoice().toLowerCase();

//

const buttons = document.querySelectorAll('button');
let count = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('results').innerHTML += playRound(button.id, getComputerChoice().toLowerCase());
        count++;
        console.log(count)
        if (count % 5 === 0) {
            document.getElementById('results').innerHTML += countResults();
            record.splice(0, 5);
        } else {
            //do nothing
        }
    });
});

function countResults(){
    const winCount = "Win";

    let wCount = record.filter(x => x == winCount).length

    const loseCount = "Lose";

    let lCount = record.filter(x => x == loseCount).length

    if (wCount > lCount) {
        return (`<h3>Congratulations! You are the winner!</h3>`);
    } else if (wCount < lCount) {
        return (`<h3>That's too bad. You lost.</h3>`);
    } else if (wCount === lCount) {
        return (`<h3>You're evenly matched! It's a draw!</h3>`);
    }
}
//

function game(){
    record.splice(0, 5)
    
    playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    
    computerSelection = getComputerChoice().toLowerCase();

    console.log(playRound(playerSelection, computerSelection));

 /* playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    
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

    console.log(playRound(playerSelection, computerSelection)); */

    const winCount = "Win";

    let wCount = record.filter(x => x == winCount).length

    const loseCount = "Lose";

    let lCount = record.filter(x => x == loseCount).length

    if (wCount > lCount) {
        return (`Congratulations! You are the winner!`);
    } else if (wCount < lCount) {
        return (`That's too bad. You lost.`);
    } else if (wCount === lCount) {
        return (`You're evenly matched! It's a draw!`);
    }
}