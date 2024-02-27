Array.prototype.myMap = function (cb) {
  let arrLength = this.length;
  let Output = [];
  for (let i = 0; i < arrLength; i++) {
    let results = cb(this[i], i);
    Output.push(results);
  }
  return Output;
};

const element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const res = element.myMap(function (e) {
  return `<h2>${e}</h2>`;
});

console.log(res.join("\n"));
