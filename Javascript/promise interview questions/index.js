// synchronus vs asynchronus

// synchronus code
// in synchronus code the code is executed line by line
// below mentioned code is the example of synchronus code
console.log("first");
console.log("second");
console.log("third");

// asynchronus code
console.log("first");
setTimeout(() => {
  console.log("second");
}, 1000);
console.log("third");

// javascript execute synchronus code first and then execute asynchronus code

// what is the output of below code
console.log("first");

function demo(name) {
  setTimeout(() => {
    return `Hello ${name}`;
  }, 1000);
}

// demo function is asynchronus function so it will not return the value instantly it will take some time to return the value
// so that is why it will log result as undefined
const result = demo("John");
console.log(result); // undefined

console.log("second");

// above problem can be solved by using callback function
console.log(
  `-----------------------------------------------------------------`
);
console.log("start");
function demo1(name, cb) {
  setTimeout(() => {
    cb(`First ===> Hello ${name}`);
  }, 1000);
}
function demo2(name, cb) {
  setTimeout(() => {
    cb(`second ===> Hello ${name}`);
  }, 500);
}

function demo3(name, cb) {
  setTimeout(() => {
    cb(`third ===> Hello ${name}`);
  }, 10000);
}

const result1 = demo1("pratik", function (message) {
  console.log(message); // Hello pratik

  // demo2 will get executed only after demo1 is executed because it is inside the callback function of demo1
  demo2("John", function (message) {
    console.log(message);

    // demo3 will get executed only after demo2 is executed because it is inside the callback function of demo2
    demo3("Jane", function (message) {
      console.log(message);
    });
  });
});

console.log("stop");

// how to resolve above code using promise and avoid callback hell
console.log("promise start --------------------`");

function promiseDemo1(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise First ===> Hello ${name}`);
    }, 1000);
  });
}

function promiseDemo2(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise second ===> Hello ${name}`);
    }, 1000);
  });
}

function promiseDemo3(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise third ===> Hello ${name}`);
    }, 1000);
  });
}

// below code again leads to callback hell
// we can resolve this using promise chaining
// promiseDemo1("pratik")
//   .then((res) => {
//     console.log(res);
//     promiseDemo2("John")
//       .then((res) => {
//         console.log(res);
//         promiseDemo3("Jane")
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise chaining
// promiseDemo1("pratik")
//   .then((res) => {
//     console.log(res);
//     return promiseDemo2("John");
//   })
//   .then((res) => {
//     console.log(res);
//     return promiseDemo3("Jane");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("promise stop");

// promise combinator help us to execute more than one promise at a time
// there are four types of promise combinator
// 1) promise.all --> it will run all promises in parallel and in the end 
// it will return all the fullfilled promise result in an 
// array but any of the promise get failed then it will fail the all promise

Promise.all([
  promiseDemo1("pratik"),
  promiseDemo2("John"),
  promiseDemo3("Jane"),
])
  .then((res) => {
    console.log(`promise.all`, res); // [ 'Promise First ===> Hello pratik', 'Promise second ===> Hello John', 'Promise third ===> Hello Jane' ]
  })
  .catch((err) => {
    console.log(err);
  });

// 2) promise.race ---> it will give those promise which is resolved first or rejected first
Promise.race([
  promiseDemo1("pratik"),
  promiseDemo2("John"),
  promiseDemo3("Jane"),
])
  .then((res) => {
    console.log(`promise.race`, res); // Promise First ===> Hello pratik because it is resolved first if it is rejected first then it will give the rejected promise result only one result it will give
  })
  .catch((err) => {
    console.log(err);
  });

// 3) Promise.allSettled --> it will give all the promise result whether it is resolved or rejected. that is difference between promise.all and promise.allSettled. it has a similar syntax like promise.all

// 4) Promise.any --> it is similar to Promise.race only difference is that it will give first resolved promise after any promise rejected. if all the promise get rejected then it will give error like all the promise get rejected

// Async Await is the best promise approach when we want to execute the promise one after another

const resultUsingAsyncAwait = async () => {
  // result3 wailt for result2 and result2 will wait for result1
  // it will execute one after another
  const result1 = await promiseDemo1("pratik");
  const result2 = await promiseDemo2("John");
  const result3 = await promiseDemo3("Jane");

  console.log(result1, result2, result3);
};

// what is output of below code
console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(`1`);
  resolve(2);
});
promise1.then((res) => {
  console.log(res);
});

console.log(`end`);
// output will be start start 1 end 2

// what is the output of below code
console.log("start");
const promise2 = new Promise((resolve, reject) => {
  console.log(`1`);
  console.log(`2`);
});

promise2.then((res) => {
  console.log(res);
});

console.log(`end`);
// output will be start 1 2 end since there is no resolve inside new promise so it will not go to .then block

// what is the output of below code
console.log("start");
const fn = () => {
  return new Promise((resolve, reject) => {
    console.log(`1`);
    resolve(`success`);
  });
};

console.log(`middle`);
fn()
  .then((res) => {})
  .catch((err) => {
    console.log(err);
  });
console.log(`end`);
// output will be start middle 1 end

// what will be the output of below code
function job() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

let promise = job();
promise
  .then(() => {
    console.log("success1");
  })
  .then(() => {
    console.log("success2");
  })
  .then(() => {
    console.log("success3");
  })
  .catch(() => {
    console.log("error1");
  })
  .then(() => {
    console.log("success4");
  });

// output will be error1 success4 because catch will catch the error and then it will go to the next then block
// we have not mention any return statement that is why it is going to .then block .catch

// what is will be output of code
function job1(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let newPromise = job1(true);

newPromise
  .then((res) => {
    console.log(res);
    return job1(false);
  })
  .catch((err) => {
    console.log(err);
    return `Error Caught`;
  })
  .then((res) => {
    console.log(res);
    return job1(true);
  })
  .then((res) => {
    console.log(res);

    // when job1(true) it will return resolved promise but we further we dont have any .then block so it will stop here
    return job1(true);
  })
  .catch((err) => {
    console.log(err);
    return `Error Caught`;
  });

// output will be success1 error1 Error Caught
