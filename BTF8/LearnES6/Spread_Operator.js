// let ex1 = [1, 2, 3, 4, 5, 6, 7];
// let ex2 = [...ex1];

// console.log(ex2);

let ex1 = {
  firstName: "Nguyen",
};

let ex2 = {
  ...ex1,
};

console.log(ex2);
ex2 = { firstName: "K" };
console.log(ex2);
