// Lấy thời gian hiện tại
var timestamp = Date.now();

// Tạo một đối tượng Date từ timestamp
var date = new Date(timestamp);

// Lấy các thành phần của thời gian
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var milliseconds = date.getMilliseconds();

// Chuyển đổi sang định dạng h:m:s:ms
var formattedTime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

console.log(formattedTime);
