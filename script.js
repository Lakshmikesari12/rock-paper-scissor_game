// function playGame(userChoice) {
//     const choices = ['rock', 'paper', 'scissors'];
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];

//     let result = '';

//     if (userChoice === computerChoice) {
//         result = "It's a draw! 🤝";
//     } else if (
//         (userChoice === 'rock' && computerChoice === 'scissors') ||
//         (userChoice === 'paper' && computerChoice === 'rock') ||
//         (userChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         result = 'You win! 🎉';
//     } else {
//         result = 'You lose! 😞';
//     }

//     document.getElementById('userChoice').textContent = `You chose: ${userChoice}`;
//     document.getElementById('computerChoice').textContent = `Computer chose: ${computerChoice}`;
//     document.getElementById('outcome').textContent = result;
// }

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const handSymbols = {
        rock: "✊",
        paper: "🤚",
        scissors: "✌️"
    };

    document.getElementById("userChoice").textContent = userChoice;
    document.getElementById("userHand").textContent = handSymbols[userChoice];

    document.getElementById("computerChoice").textContent = computerChoice;
    document.getElementById("computerHand").textContent = handSymbols[computerChoice];

    if (userChoice === computerChoice) {
        document.getElementById("outcome").textContent = "It's a tie!🤝";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        document.getElementById("outcome").textContent = "You win!🎉";
    } else {
        document.getElementById("outcome").textContent = "You lose!😞";
    }
}