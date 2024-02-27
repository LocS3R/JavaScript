const btnRoll = document.getElementById("btnRoll");

const imagePath = "./assets/images/dice/";

function rolleDice() {
  const userInput = document.getElementById("numberOfDice").value;
  // console.log(userInput);
  const showListDice = document.querySelector(".dice-roller__body");
  // showListDice.textContent = userInput;
  const showListDiceImage = document.querySelector(".dice-roller__footer");
  // showListDiceImage.innerHTML = `<img src="${linkImage}"/>`;

  let values = [];
  let dices = [];
  let n = parseInt(userInput);
  while (n--) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    values.push(randomNumber);
    const linkImage = `${imagePath}Dice-${randomNumber}.png`;
    dices.push(`<img src="${linkImage}"/>`);
  }
  showListDice.textContent = `dice: ${values.join(", ")}`;
  showListDiceImage.innerHTML = dices.join("");
}

btnRoll.addEventListener("click", rolleDice);
