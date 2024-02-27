const number = document.getElementById("counter-number");

const actions = document.querySelectorAll(".counter-actions button");
let count = 0;
actions.forEach((action) => {
  action.addEventListener("click", function () {
    if (action.getAttribute("id") === "btnReset") {
      count = 0;
    } else if (action.getAttribute("id") === "btnIncrease") {
      count++;
    } else if (action.getAttribute("id") === "btnDescrease") {
      count--;
    }
    number.textContent = count;
  });
});
