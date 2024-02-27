var a = { x: 10, y: 20 };

console.log(a.hasOwnProperty("x"));
console.log(a.hasOwnProperty("y"));
console.log(a.hasOwnProperty("z"));

// make a as the prototype
var b = Object.create(a);
var c = Object.create(b);

console.log(b);
console.log(c);
console.log(b.hasOwnProperty("x"));
console.log(b.hasOwnProperty("y"));
console.log(b.hasOwnProperty("z"));

console.log("b.x:", b.x);
console.log("b.y:", b.y);
b.x = 0;
b.y = 0;
console.log("b.x:", b.x);
console.log("b.y:", b.y);

console.log(b.hasOwnProperty("x"));
console.log(b.hasOwnProperty("y"));
console.log(b.hasOwnProperty("z"));

console.log(b);
console.log(c.x);
console.log(c.y);

// add the properties one-by-one
b.p = 100;
b.q = 200;

console.log("b.p:", b.p);
console.log("b.q:", b.q);

console.log(b);
console.log(c);

console.log("Example defined property");

var o = {};

// non-writable data property
Object.defineProperty(o, "x", { value: "old" });

// setter-less accessor property
Object.defineProperty(o, "y", {
  get: function () {
    return "old";
  },
  set: function (value) {
    console.log("Setter called with value:", value);
  },
});

o.x = "new";
console.log("o.x:", o.x);

o.y = "new";
console.log("o.y:", o.y);

var k = Object.create(o);

k.x = "new";
console.log("k.x:", k.x);

k.y = "new";
console.log("k.y:", k.y);

console.log(k);

console.log("--------Function prototype--------");

function Item(sellingPrice, actualPrice) {
  this.sellingPrice = sellingPrice;
  this.actualPrice = actualPrice;

  Object.defineProperty(this, "discount", {
    get: function () {
      return ((this.actualPrice - this.sellingPrice) / this.actualPrice) * 100;
    },
    set: function (perc) {
      this.sellingPrice = this.actualPrice - (perc / 100) * this.actualPrice;
    },
    configurable: true,
    enumerable: true,
  });
}

let item = new Item(25, 50);
// item.discount = 25;
console.log(item.sellingPrice);
console.log(item.actualPrice);
console.log(item.discount);

var aa = { x: 10, y: 20 };
var bb = { p: 100, q: 200 };

bb.__proto__ = aa;

console.log("bb.x:", bb.x);
console.log("bb.y:", bb.y);

console.log("bb.p:", bb.p);
console.log("bb.q:", bb.q);

function ItemsCake(name, price) {
  this.name = name;
  this.price = price;
}
ItemsCake.prototype.displayInfo = function () {
  console.log(this.name + " is for $ " + this.price);
};
var cake = new ItemsCake("Chocolate Cake", 10);
cake.displayInfo();

console.log(Object.getPrototypeOf(cake));

var obj = { x: 10, y: 20 };
var obj2 = { x: 20 };
var obj3 = Object.create(obj2);
console.log(obj3.y);
