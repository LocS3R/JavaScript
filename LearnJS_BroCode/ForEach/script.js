console.log("this is forEach()");

let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => console.log(number * 2));
numbers.forEach(double);
numbers.forEach(display);

function double(value, index, array) {
  array[index] = value * 2;
}

function display(value) {
  console.log(value);
}
