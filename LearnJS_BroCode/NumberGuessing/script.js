const minNum = 1;
const maxNum = 100;
const answers = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answers);

let running = true;
let userGuess;

while (running) {
  userGuess = prompt("Guess a number between 1 and 100");
  userGuess = parseInt(userGuess);

  if (isNaN(userGuess)) {
    alert("Please enter a number");
  } else if (userGuess < minNum || userGuess > maxNum) {
    alert("Please enter a number between 1 and 100");
  } else if (userGuess === answers) {
    alert("You got it!");
    running = false;
  } else if (userGuess > answers) {
    alert("Too high");
  } else if (userGuess < answers) {
    alert("Too low");
  }
}
