


// randomly returns either rock, paper or scissors
function computerPlay() {
    const n = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissors"];
    return options[n];
}

// takes player and computer's choices and returns the result
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
        playerScore++; 
    } else if ((cs == "rock" && ps == "scissors") ||
                (cs == "scissors" && ps == "paper") ||
                (cs == "paper" && ps == "rock")) {
        result = "you lose! " + cs + " beats " + ps + "!"; ;
        computerScore++; 
    } else {
        result = "something went wrong :(";
    }

    return result;
}

// runs the game 5 times
// for console version!
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = window.prompt("enter your choice: ", "");

        console.log("computer chooses: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

function displayResults(computerSelection, result) {
    const results = document.querySelector("#results");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.textContent = "computer chooses: " + computerSelection;
    p2.textContent = "round result: " + result;
    results.textContent = "";
    results.appendChild(p1);
    results.appendChild(p2);
}

function displayScore() {
    const score = document.querySelector("#score");
    score.textContent = "Player score: " + playerScore + " | Computer score: " + computerScore;
}

function manageScore() {
    displayScore();
    if (playerScore >= 5) {
        alert("You win!");
        playerScore = 0;
        computerScore = 0;
        displayScore();
    } else if (computerScore >= 5) {
        alert("Computer wins!");
        playerScore = 0;
        computerScore = 0;
        displayScore();
    }
}


// for the UI version! click button to play :)
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const result = playRound(button.id, computerSelection);
        displayResults(computerSelection, result);
        manageScore();
    });
});





