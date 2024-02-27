class Product {
  static productCount = 0;
  constructor(name, price) {
    this.name = name;
    this.price = price;
    Product.productCount++;
  }

  displayInfo() {
    console.log(this.name + " is for $ " + this.price);
  }
  getTotalProduct() {
    console.log(Product.productCount);
  }
}

const product1 = new Product("shirst", 19.99);
const product2 = new Product("shorst", 8.99);

console.log(product1.productCount); // wrong
console.log(Product.productCount); // yes
product1.displayInfo();
product1.getTotalProduct();

product2.displayInfo();
product2.getTotalProduct();
