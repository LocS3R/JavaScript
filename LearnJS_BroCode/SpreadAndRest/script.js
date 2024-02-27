console.log("-----spread------");
function myFunction(x, y, z) {
  console.log(x, y, z);
}
const args = [0, 1, 2, 3];
myFunction(...args); // Output: 0 1 2

const myNameIs = "Nguyen Dai Loc";
const str = ["N", ...myNameIs];
console.log(str);

const [first, second, ...rest] = myNameIs;

console.log(rest.join(""));
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

console.log("------rest------");
function myFunction2(firstArg, ...restArgs) {
  console.log(firstArg);
  console.log(restArgs);
}
myFunction2(1, 2, 3, 4);
// Output:
// 1
// [2, 3, 4]
