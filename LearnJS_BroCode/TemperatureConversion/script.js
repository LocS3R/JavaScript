let temperatureValue = document.getElementById("temperatureValue");
const btnSubmit = document.getElementById("btnSubmit");
const result = document.getElementById("result");
btnSubmit.addEventListener("click", function () {
  if (temperatureValue.value !== "") {
    const conversionOptions = document.querySelector(
      "input[name='conversion']:checked",
    );
    let res;
    let tmp = 0.0;
    if (conversionOptions.id === "celsius") {
      tmp = Number(temperatureValue.value);
      tmp = (tmp * 9) / 5 + 32;
      res = tmp.toFixed(1) + " F";
    } else {
      tmp = Number(temperatureValue.value);
      tmp = (tmp - 32) * (5 / 9);
      res = tmp.toFixed(1) + " C";
    }
    result.textContent = res;
  } else {
    alert("Please enter a number");
  }
});
