const today = new Date();

const arrDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const day = arrDays[today.getDay() - 1];

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let time = "";
let pora = "";

console.log(`Today is: ${day}`);

if (hours > 12) {
  hours = hours - 12;
  pora = "PM";
  time = `${hours} ${pora}:${minutes} ${seconds}`;
} else {
  if (hours < 12) {
    pora = "AM";
    time = `${hours} ${pora}:${minutes} ${seconds}`;
  } else {
    if (minutes === 0) {
    }
  }
}
