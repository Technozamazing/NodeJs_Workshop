const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const target = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;

function askGuess() {
  rl.question("Guess a number between 1 and 100: ", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
      askGuess();
    } else if (guess > target) {
      console.log("Too high! Try again.");
      askGuess();
    } else if (guess < target) {
      console.log("Too low! Try again.");
      askGuess();
    } else {
      console.log(`🎉 Correct! You guessed it in ${attempts} tries.`);
      rl.close();
    }
  });
}

console.log("🔢 Welcome to the Number Guessing Game!");
askGuess();