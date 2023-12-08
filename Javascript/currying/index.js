// currying in javascript

function f(a, b) {
  console.log(`without currying`, a, b); // without currying 4 5
}
f(4, 5);
// converting above function in currying

// currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument
function currying(a) {
  return function (b) {
    console.log("currying", a, b); // currying 5 6
  };
}

currying(5)(6);

// how to implement sum(4)(5)(6) using currying
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(4)(5)(6)); //

// evaluate("sum")(4)(3) => 6
// evaluate("sub")(4)(3) => 1
// evaluate("mul")(4)(3) => 12
// evaluate("dvide")(4)(3) =>

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "add") {
        return a + b;
      } else if (operation === "subtract") {
        return a - b;
      } else if (operation === "multiply") {
        return a * b;
      } else if (operation === "divide") {
        return a / b;
      }
    };
  };
}

console.log(evaluate("add")(4)(3)); // 6

console.log(evaluate("subtract")(4)(3)); // 1

console.log(evaluate("multiply")(4)(3)); // 12

console.log(evaluate("divide")(4)(3)); // 0.25

// infinite currying

// normal approach
function add(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function () {
          return a + b + c + d;
        };
      };
    };
  };
}

console.log(`infinite currying`, add(1)(2)(3)(4)()); //

// optimized approach
function add1(a) {
  return function (b) {
    if (b) return add1(a + b);
    else return a;
  };
}

console.log("optimized approach", add1(1)(2)(3)(4)());

// currying vs partial Application
// in partial application there are number 3 arguments that is a, b, and c and only 2 return function 
// where as in currying the number of arguments is equal to the number of return functions if we consider the above case then it would be three return function
/**
 * 
 * function add2(a){
 * return function (b){
 * return function (c){
 * return a+b+c;
 * }
 */
function add2(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log(`partial application`, add2(1)(2, 3));
