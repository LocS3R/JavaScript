let person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

console.log(person);

delete person.email;
person.height = "200";

console.log(person);

console.log("for in");
const person2 = {
  name: "John",
  age: 30,
};

for (let key in person2) {
  console.log(key, person2[key]);
}
console.log("object.keys");

Object.keys(person2).forEach((key) => console.log(key, person2[key]));

console.log("for of");
const arr = [1, 2, 3, 4, 5];

for (let value of arr) {
  console.log(value);
}

console.log("Prototype");

function People(Name, Age) {
  this.Name = Name;
  this.Age = Age;
}

People.prototype.sayHello = function () {
  console.log(`Hello ${this.Name}, ${this.Age} years old`);
};

let loc = new People("Loc", "22");
loc.sayHello();

console.log("Type of");

console.log(`Type of {}: ${typeof {}}`);
console.log(`Type of []: ${typeof []}`);
console.log(`Type of null: ${typeof null}`);

console.log("RegExp");

// Kiểm tra xem chuỗi có khớp với pattern không
const pattern = /hello/;
const str = "hello world";
console.log(pattern.test(str)); // Output: true

// Tìm kiếm pattern trong chuỗi và trả về kết quả
const matchResult = pattern.exec(str);
console.log(matchResult); // Output: ["hello", index: 0, input: "hello world", groups: undefined]
const str2 = "1st place\n2st place\n3st place";
const pattern2 = /^[1-3]/gm;
const matchResult2 = pattern2.exec(str2);
console.log(matchResult2);

// Sử dụng quantifiers
const quantifierPattern = /\d{2,4}/g;
const quantifierStr = "The number is 12345 234 123 312";

console.log(quantifierStr.match(quantifierPattern)); // Output: ["1234", "234", "123", "312"]
