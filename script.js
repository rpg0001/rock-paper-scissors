
function computerPlay() {
    // randomly returns either rock, paper or scissors
    const n = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissors"];
    return options[n];
}

function playRound(playerSelection, computerSelection) {
    const ps = playerSelection.toLowerCase();
    const cs = computerSelection.toLowerCase();

    let result = '';

    if (ps == cs) {
        result = "draw!";
    } else if ((ps == "rock" && cs == "scissors") ||
                (ps == "scissors" && cs == "paper") ||
                (ps == "paper" && cs == "rock")) {
        result = "you win! " + ps + " beats " + cs + "!"; 
    } else if ((cs == "rock" && ps == "scissors") ||
                (cs == "scissors" && ps == "paper") ||
                (cs == "paper" && ps == "rock")) {
        result = "you lose! " + cs + " beats " + ps + "!"; ;
    } else {
        result = "wtf";
    }

    return result;
}

let comp = computerPlay();
console.log("computer chooses: " + comp);
console.log(playRound("rock", comp));