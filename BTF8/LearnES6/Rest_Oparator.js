function add1(nums) {
  console.log(nums);
}
console.log(`When use \n function add1(nums) {
    console.log(nums);
  }`);
add1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

function add2(nums) {
  console.log(arguments);
}
console.log(`When use \n function add2(nums) {
      console.log(arguments);
    }`);
add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

function add3(...nums) {
  console.log(nums.join(", "));
}
console.log(`When use \n function add3(nums) {
        console.log(nums);
      }`);
add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
