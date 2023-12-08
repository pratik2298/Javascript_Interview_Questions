// // first class function

function square(num) {
  return num * num;
}

function cube(fn) {
  console.log(`square of number is ${fn(2)}`); //
}

cube(square);

// IIFE (immediately invoked function expression)
(function square(num) {
  console.log(`IFFE output`, num * num);
})(2);

// what is the output of IIFE code

(function (x) {
  return (function (y) {
    console.log(x); // 1
  })(2);
})(1);

// what is the output of this code
var x = 21;
function foo() {
  console.log(x); // undefined
  var x = 20;
}
foo();

// spread vs rest operator

// when we are using ...numbs it called as rest operator
function multiply(...numbs) {
  console.log(numbs[0] * numbs[1]);
}

let arr = [2, 3];
multiply(...arr); // when we calling the function and passing value like this it called as spread operator

// what is the output of this code

// rest parameter should be last parameter
// fn(a, x, y, ...numbers)
const fn = (a, ...numbers, x, y) => {
    console.log(a, numbers, x, y);
}

fn(5, 3, 5, 2)

// // what is the difference between normal function and arrow function

// // 1) syntax
// function normalFunction(){
//     console.log('normal function');
// }

// const arrowFunction = () => console.log('arrow function');

// // 2) Implicit return keyword
// function addNumber(){
//     return 2 + 2;
// }

// const addNumber = () => 2 + 2;

// // 3) arguments keyword
// function functionArgument(){
//     console.log(arguments); //
// }
// functionArgument(2, 3, 4, 5);

// const arrowFunctionArgument = () => {
//     console.log(arguments); // arguments is not defined
// }
// arrowFunctionArgument(2, 3, 4, 5);

// // 4) this keyword
// let functionObj = {
//     username: 'pratik2298',
//     fc1(){
//         console.log(this.username); // pratik2298
//     },
//     fc2: () => {
//         console.log(this.username); // undefined
//     }
// }

// functionObj.fc1();
// functionObj.fc2();

// var a;
{
  var a = 1;
  function fun() {
    console.log(a);
    var b = 2;
  }
  console.log(b);
}
fun();
console.log(a); // undefined
