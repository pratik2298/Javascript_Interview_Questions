const Promise = require("bluebird");

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
