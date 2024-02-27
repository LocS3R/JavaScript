let username;

const btnSubmit = document.getElementById("submitBtn");
const myName = document.getElementById("myName");

btnSubmit.addEventListener("click", function () {
  username = myName.value;
  console.log(username);
});
