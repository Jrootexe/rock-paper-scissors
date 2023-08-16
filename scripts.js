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