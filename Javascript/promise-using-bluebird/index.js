/**
 * what is bluebird in NodeJS
 * promise is the third party library in nodejs that provides the powerfull implementation of promise
 * using this library it enhances the promise functionality by providing additional methods such as ability to cancel the promise and handling multiple promises in parallel
 *
 * generally faster than the built-in implementation of Promises in Node.js.
 */

// ES-6 Promise Implementation

const somePromiseFunction = () => {
  return new Promise((resolve, reject) => {
    resolve(`ES-6 --> 1  Promise Resolved`);
  });
};

const someAnotherPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    resolve(`ES-6 --> 2  Promise Resolved`);
  });
};

somePromiseFunction()
  .then((result) => {
    console.log(`somePromiseFunction ---->`, result); // somePromiseFunction ----> ES-6 --> 1  Promise Resolved
    return someAnotherPromiseFunction();
  })
  .then((result) => {
    console.log(`someAnotherPromiseFunction---->`, result); // someAnotherPromiseFunction----> ES-6 --> 2  Promise Resolved
  })
  .catch((err) => {
    console.log(`Error`, err);
  });

// blue bird Promise Implementation
const Promise = require("bluebird");
const someBlueBirdPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    resolve(`someBlueBirdPromiseFunction Promise Resolved`);
  });
};

const someBlueBirdAnotherPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    resolve(`someBlueBirdAnotherPromiseFunction Promise Resolved`);
  });
};

Promise.resolve(someBlueBirdPromiseFunction())
  .then((result) => {
    console.log(`result1 -->`, result); // result1 --> someBlueBirdPromiseFunction Promise Resolved
    return Promise.resolve(someBlueBirdAnotherPromiseFunction());
  })
  .then((result) => {
    console.log(`result2 -->`, result); // result2 --> someBlueBirdAnotherPromiseFunction Promise Resolved
  })
  .catch((err) => {
    console.log(`Error`, err);
  });

// cancelling the promise
const myPromise = new Promise((resolve, reject, onCancel) => {
  const timeoutId = setTimeout(() => {
    resolve("success");
  }, 5000);

  onCancel(() => {
    clearTimeout(timeoutId);
    reject(new Promise.CancellationError());
  });
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch(Promise.CancellationError, (error) => {
    console.log("Promise was cancelled");
  })
  .catch((error) => {
    console.error(error);
  });

myPromise.cancel();
