// import { Animals } from "./ex.js";

// let cat = new Animals("cat", 4);

// console.log(cat.legs);

function addAsync(a, b, callback) {
  setTimeout(function () {
    const result = a + b;
    callback(result);
  }, 2000); // Đợi 1 giây giả định trước khi tính tổng
}

addAsync(3, 4, function (result) {
  console.log(result); // Kết quả được in ra sau 1 giây
});

console.log("Đang chờ kết quả...");
