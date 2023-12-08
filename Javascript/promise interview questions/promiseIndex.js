// create firstPromise and then resolve it to "first" string and then create second promise 
// resolved the second promise by invoking first promise then resolved the 
// second promise in which output need to pass to first promise and then print the first promise output

const firstPromise = new Promise((resolve, reject) => {
  resolve("first");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    console.log("first then of second promise", res);
    return res;
  })
  .then((res) => {
    console.log(res);
  });
