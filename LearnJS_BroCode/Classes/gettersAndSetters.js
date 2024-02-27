class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.error("Width must be a positive number");
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width, rectangle.height);
console.log(rectangle.area);
