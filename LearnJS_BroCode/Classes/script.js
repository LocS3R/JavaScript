class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayInfo() {
    console.log(this.name + " is for $ " + this.price);
  }
}

const product1 = new Product("shirst", 19.99);

product1.displayInfo();
