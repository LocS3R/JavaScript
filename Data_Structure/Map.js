// Tạo một Map rỗng
const myMap = new Map();

// Tạo một Map với các cặp khóa-giá trị
const myMap2 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(myMap2);

myMap2.set("key3", "value3");
console.log(myMap2);

// Xóa một cặp khóa-giá trị từ Map
console.log("---delete key2----");
myMap2.delete("key2");
console.log(myMap2);
// Kiểm tra xem một khóa có tồn tại trong Map hay không
console.log("---check key2 avialable"); // Output: true hoặc false
console.log(myMap2.has("key2")); // Output: true hoặc false

console.log("---check key3 avialable"); // Output: true hoặc false
console.log(myMap2.has("key3")); // Output: true hoặc false

console.log("---show map---");
// Duyệt qua các phần tử của Map sử dụng for...of
for (let [key, value] of myMap2) {
  console.log(key, value);
}

// Hoặc sử dụng forEach
myMap2.forEach((value, key) => {
  console.log(key, value);
});

// Xóa tất cả các cặp khóa-giá trị
console.log("---clear map----");
myMap2.clear();
console.log(myMap2);
