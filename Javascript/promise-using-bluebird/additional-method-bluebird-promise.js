// promise.map
const Promise = require("bluebird");

// const array = [1, 2, 3, 4, 5];

// Promise.map(array, (item) => {
//   return Promise.resolve(item * 2);
// })
//   .then((res) => console.log(`Promise.map --`, res))
//   .catch((err) => console.log(`Promise.map Error--`, err));

// // Promise.reduce
// const nums = [1, 2, 3, 4, 5];

// Promise.reduce(
//   nums,
//   (acc, num) => {
//     return Promise.resolve(acc + num);
//   },
//   0
// )
//   .then((res) => {
//     console.log(`Promise.reduce`, res); // 15
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// // Promise.props()
// const promises = {
//   num1: Promise.resolve(1),
//   num2: Promise.resolve(2),
//   num3: Promise.resolve(3),
// };

// Promise.props(promises)
//   .then((res) => {
//     console.log(res); // { num1: 1, num2: 2, num3: 3 }
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// // Promise.any
// const Promise = require("bluebird");

// const promisesAny = [
//   Promise.reject(new Error("Rejected 1")),
//   Promise.resolve("Resolved 2"),
//   Promise.reject(new Error("Rejected 3")),
// ];

// Promise.any(promisesAny)
//   .then((res) => {
//     console.log(res); // 'Resolved 2'
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.timeout

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved");
//   }, 2000);
// });

// promise
//   .timeout(3000)
//   .then((res) => {
//     console.log(res); // 'Resolved
//   })
//   .catch(Promise.TimeoutError, (err) => {
//     console.error("Timed out");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// promise.cancel()

// const Promise = require("bluebird");

const promise = new Promise((resolve, reject) => {
  const interval = setInterval(() => {
    console.log("Tick");
  }, 1000);

  // Handle the cancellation by rejecting the promise
  promise.cancel = () => {
    clearInterval(interval);
    reject(new Error("Cancelled"));
  };
});

promise
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.log(error.message);
  });

promise.cancel();
