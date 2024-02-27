// Tạo một đối tượng cha
let Animal = function (name, number_of_foot) {
  this.name = name;
  this.number_of_foot = number_of_foot;
};

// Thêm một phương thức vào prototype của Animal
Animal.prototype.sayName = function () {
  console.log("My name is " + this.name);
};

Animal.prototype.getNumberOfFoot = function () {
  console.log("Number of foot is " + this.number_of_foot);
};

// Tạo một đối tượng con kế thừa từ Animal
let Dog = function (name, number_of_foot, breed) {
  Animal.call(this, name, number_of_foot); // Gọi constructor của Animal với đối tượng con
  this.breed = breed;
};

// Kế thừa prototype của Animal
Dog.prototype = Object.create(Animal.prototype);

// Thêm một phương thức mới cho Dog
Dog.prototype.bark = function () {
  console.log("Woof!");
};

Dog.prototype.getBreed = function () {
  console.log(this.breed);
};

// Tạo một instance của Dog
let myDog = new Dog("Max", 4, "Labrador");

// Sử dụng các phương thức từ cả Animal và Dog
myDog.sayName(); // "My name is Max"
myDog.getNumberOfFoot();
myDog.bark(); // "Woof!"
myDog.getBreed(); // "Labrador"

let Cat = function (name, number_of_foot, breed) {
  Animal.call(this, name, number_of_foot);
  this.breed = breed;
};

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.sounds = function () {
  console.log("meow!");
};

Cat.prototype.getBreed = function () {
  console.log(this.breed);
};

let myCat = new Cat("Neko", 2, "England");

myCat.sayName();
myCat.getNumberOfFoot();
myCat.sounds();
myCat.getBreed();
