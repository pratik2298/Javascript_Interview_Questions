// what is map() ?
// map() method is used for creating a new array from existing one by applying a 
// function to each one of the elements of the existing array.

const numbs = [1, 2, 4, 2, 2];
const multiplyByThree = numbs.map((num) => {
  return num * 3;
});

// it will return a new array with the result of the function applied to each element of the array

// what is reduce() ?
const filterNumberArray = [1, 2, 4, 2, 2];
// acc is the accumulator it store the result of previous computation
// curr is the current element of the array
// if there is no inital value, it takes first element of array as value for accumulator
const sum = filterNumberArray.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum);

// what is difference between map() and forEach() ?
// map() is used to transform the array elements and it retuns a new array it does not mutate the original array
// forEach() is used to iterate over the array elements and it does not return anything it mutates the original array

// return the only names of student who scored more than 60

let students = [
  { name: "John", score: 90 },
  { name: "Peter", score: 85 },
  { name: "Mark", score: 60 },
  { name: "John", score: 55 },
];

const names = students.filter((stu) => stu.score > 60).map((stu) => stu.name);
console.log(names); // [ 'John', 'Peter' ]

/**
 *
 *  Lexical scope
 */

// a lexical scope means a variable defined outside a function can be accessible inside of another function defined after the variable declaration but opposite is not true

var username = "John";
function local() {
  console.log(username);
}
local(); // John

/**
 *  In Below Function publish() is a closure because it has access to the variable declared in its parent function subscribe()
 *
 * /// IMP Defination of closure ///
 * A closure give access to outer function scope from inner function
 */

function subscribe() {
  var name = "John";
  function publish() {
    console.log(name);
  }
  publish();
}
subscribe(); // John

/**
 *  child being a closure has access to the variable declared in its parent function parent() 
 * and also it has access to variable declared outside the parent function i.e outerName
 */

var outerName = "Pratik";
function parent() {
  const name = "John";
  function child() {
    console.log(name, outerName);
  }
  return child;
}
parent()(); // John Pratik

// what will be the output of below code
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})();

// write a function that would allow you do this
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(num) {
  return function (innerNum) {
    return num + innerNum;
  };
}
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// what is module pattern ?
// module pattern is a design pattern that is used to encapsulate 
//private properties and methods, it is used to create private and public methods and properties

// what is the difference between module pattern and IIFE ?

var Module = (function () {
  function privateMethod() {
    console.log("private method");
  }
  return {
    publicMethod: function () {
      // can call private method here
    },
  };
})();

// make this run only once using closure
// using closure this is how we are making this function run only once
let view;
function likeThisVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("already liked");
    } else {
      view = "Roadside Code";
      console.log(`Subscribe to ${view}`);
      called++;
    }
  };
}

// what is the use of IIFE ? and how does it protect to keep the variable private and methods private ?

var myModule = (function () {
  // private variable
  var password = "12345";

  // private method
  function getPassword() {
    console.log(password);
  }

  return {
    // public method
    displayPassword: function () {
      getPassword();
    },
  };
})();

// now myModule variable has public method displayPassword() but it has access to private method(getPassword) and private variable(password) this way any external code can not access the private variable and private method

console.log(myModule.displayPassword()); // 12345
console.log(myModule.password); // undefined
