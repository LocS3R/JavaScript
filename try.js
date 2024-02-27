let n = 5;
let maxtrix = [];

for (let i = 0; i < n; i++) {
  maxtrix.push([]);
  for (let j = 0; j < n; j++) {
    if (i % 2 === 0) maxtrix[i].push(0);
    else maxtrix[i].push(1);
  }
}

console.log(maxtrix[1][0]);

console.log(2 ** 3);

console.log("---get first name, last name");
const myName = "Nguyen Dai Loc";
const indexOfFirstSpace = myName.indexOf(" ");
const indexOfLastSpace = myName.lastIndexOf(" ");

const firstName = myName.slice(0, indexOfFirstSpace + 1);

console.log(`My first name is ${firstName}`);

const lastName = myName.slice(indexOfLastSpace + 1);

console.log(`My last name is ${lastName}`);

let hours = 24;
hours = hours % 12 || 12;
console.log(hours);

let testnumber = 0 || 0 || 1 || 4;
console.log(testnumber);

console.log(Date.now());
