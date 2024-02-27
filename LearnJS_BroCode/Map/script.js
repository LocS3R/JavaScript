console.log("This is map()");

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

function square(value) {
  return Math.pow(value, 2);
}

console.log(squares);
