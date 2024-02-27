console.log("this is squareMatrix programming");

function SquareMatrix(maxtrixArray) {
  if (typeof maxtrixArray === "number") {
    let n = maxtrixArray;
    maxtrixArray = [];
    for (let i = 0; i < n; i++) {
      maxtrixArray.push([]);
      for (let j = 0; j < n; j++) {
        maxtrixArray[i].push(0);
      }
    }
  }
  this.array = maxtrixArray;
  this.n = maxtrixArray.length;
}

SquareMatrix.prototype.printArray = function () {
  let arr = this.array;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

SquareMatrix.prototype.add = function (maxtrix) {
  let matrixArray = this.array;
  let secondMatrixArray = maxtrix.array;
  let n = this.n;

  let sumMatrix = new SquareMatrix(n);
  let sumMatrixArray = sumMatrix.array;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sumMatrixArray[i][j] = matrixArray[i][j] + secondMatrixArray[i][j];
    }
  }
  return sumMatrixArray;
};

let SMatrix = new SquareMatrix(5);

SMatrix.printArray();
