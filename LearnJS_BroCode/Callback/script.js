console.log("this is callbacks");
// function fetchData(url, callback) {
//   // Giả sử hàm này là một tác vụ không đồng bộ, như gửi yêu cầu HTTP
//   setTimeout(() => {
//     const data = { name: "John", age: 30 };
//     callback(data); // Gọi callback sau khi dữ liệu được trả về
//   }, 2000);
// }
//
// // Sử dụng hàm fetchData với callback
// fetchData("https://example.com/api/data", function (result) {
//   console.log(result); // In ra dữ liệu nhận được từ fetchData
// });
//
hello(myName);

function hello(callback) {
  console.log("hello");
  callback("Loc");
}

function myName(name) {
  console.log("My name is " + name);
}

console.log("callback exercises");

//TODO: double each of array elements

function processArray(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];

const res = processArray(arr, function (num) {
  return num * 2;
});

console.log(res);
