console.log("promise.all()");
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: ["one", "two", "three"]
  })
  .catch((error) => {
    console.error(error); // Nếu bất kỳ Promise nào bị từ chối
  });

console.log("promise.allSettled()");
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "four");
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "five");
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "six");
});

Promise.allSettled([promise4, promise5, promise6])
  .then((values) => {
    console.log(values); // Output: ["one", "two", "three"]
  })
  .catch((error) => {
    console.error(error); // Nếu bất kỳ Promise nào bị từ chối
  });
