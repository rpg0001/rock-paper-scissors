
function computerPlay() {
    // randomly returns either rock, paper or scissors
    const n = Math.floor(Math.random() * 3);
    const options = ["Rock", "Paper", "Scissors"];
    return options[n];
}

function playRound(playerSelection, computerSelection) {
    const ps = playerSelection.toLowerCase();
    const cs = computerSelection.toLowerCase();

    let result = '';

    if (ps == cs) {
        result = "Draw!";
    } else if ((ps == "rock" && cs == "scissors") ||
                (ps == "scissors" && cs == "paper") ||
                (ps == "paper" && cs == "rock")) {
        result = "You win!"; 
    } else if ((cs == "rock" && ps == "scissors") ||
                (cs == "scissors" && ps == "paper") ||
                (cs == "paper" && ps == "rock")) {
        result = "You lose!";
    } else {
        result = "wtf";
    }

    return result;
}

let comp = computerPlay();
console.log(comp);
console.log(playRound("rock", comp));