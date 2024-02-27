console.log("------.filter------");

let numbers = [1, 2, 4, 5, 6];

let EvenNumber = numbers.filter((number) => number % 2 == 0);

console.log(EvenNumber);

console.log("-----.reduce------");
const prices = [5, 10, 15, 20, 25];
const total = prices.reduce(sum);

console.log(total);

function sum(accumulator, value) {
  return accumulator + value;
}

console.log("----Nested objects-----");

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("My", 25, "131 MS", "TH", "TPTH");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.city);

function testRest(...Adress) {
  const [street, city, country] = Adress;
  console.log(street);
}

testRest("131 MS", "TH", "TPTH");

console.log("sorting");

const people = [
  { name: "Anh", age: 20, gpa: 3.0 },
  { name: "Trang", age: 22, gpa: 2.0 },
  { name: "Bao", age: 25, gpa: 1.5 },
];

people.sort((a, b) => b.age - a.age);

console.log(people);

const people1 = [
  { name: "Anh", age: 20, gpa: 3.0 },
  { name: "Trang", age: 22, gpa: 2.0 },
  { name: "Bao", age: 25, gpa: 1.5 },
];

people1.sort((a, b) => a.name - b.name);
console.log(people1);

const people2 = [
  { name: "Anh", age: 20, gpa: 3.0 },
  { name: "Trang", age: 22, gpa: 2.0 },
  { name: "Bao", age: 25, gpa: 1.5 },
];

people2.sort((a, b) => a.name.localeCompare(b.name));
console.log(people2);
