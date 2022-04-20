
function computerPlay() {
    // randomly returns either rock, paper or scissors
    const n = Math.floor(Math.random() * 3);
    const options = ["Rock", "Paper", "Scissors"];
    return options[n];
}

console.log(computerPlay());