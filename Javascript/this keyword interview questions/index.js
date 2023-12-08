// inside getParams function this keyword will refer to the global object
// this.a inside the object then it will refer to the object property
// it always refer to parent object
// in this getParams function parent is global object
// if we convert getParams function into arrow function then it will refer to the parent object( same behaviour as traditional function)
this.a = 5;
function getParams() {
  console.log(this.a);
}
getParams(); // 5

/**
 *  In below code this.name and this.age will refer to the user object
 *  in below code parent of "this" keyword is user object
 *  it will no longer point to the global object
 */
let user = {
  name: "John",
  age: 30,
  getDetails() {
    console.log(this.name, this.age); // John 30
  },
};

console.log(user.getDetails()); // John 30
console.log(this); // { name: 'John', age: 30, getDetails: [Function: getDetails] }

/*
    In below code this.name will give undefined this happend because getDetails function always point to its immediate parent. due to this this.newName print the value jane and this.name print undefined
*/
let user1 = {
  name: "John",
  age: 30,
  childObj: {
    newName: "Jane",
    getDetails() {
      console.log(this.newName, this.name);
    },
  },
};

console.log(user1.childObj.getDetails()); // Jane undefined

// it will print undefined because arrow function does not have its own this keyword it always refer to its parent object(window object)
let user2 = {
  name: "John",
  getDetails: () => {
    console.log(this.name);
  },
};

console.log(`Arrow function`, user2.getDetails()); // undefined

/**
 * In below code this.name will give John because arrow function always point to its parent
 * in below code parent of arrow function is getDetails function and getDetails 
 * function immediate parent is user3 object due that it take the name property of user3 object
 *
 *   */
let user3 = {
  name: "John",
  getDetails() {
    const nestedArrowFunction = () =>
      console.log(`Nested Arrow function`, this.name); // John
    nestedArrowFunction();
  },
};

user3.getDetails();

/**
 *  In below code this keyword inside the getDetails function will refer to the 
 *  this.name and this.age which is defined in the constructor function
 */
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    console.log(this.name, this.age);
  }
}

const userObj = new User("pratik", 20);
userObj.getDetails(); // pratik 20

// what is output of below code
// this keyword inside the getName function will refer to the newPerson object hence it will print pratik not John
const newPerson = {
  name: "pratik",
  getName() {
    const name = "John";
    console.log(this.name);
  },
};
newPerson.getName(); // pratik

// what will be the output of below code
// it will print undefined because inside setTimeout function we are accessing user4.logMessage as a callback rather than 
//calling it as a function and due to that this.name is not refering to the user4 object it is refering to the global object.
const user4 = {
  name: "pratik",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(user4.logMessage, 1000); // undefined

// fix part for above code
setTimeout(function () {
  user4.logMessage();
}, 1000); // undefined

// what will be the output of below code
const greetings = {
  name: "pratik",
  greet() {
    console.log(`greetings hello ${this.name}`);
  },
  farewell: () => {
    console.log(`farewell hello ${this.name}`);
  },
};

greetings.greet(); // hello pratik
greetings.farewell(); // hello undefined

// what will be the output
/**
 *  it will execute 10 because we are calling callback function inside method function so it will not point to the obj object it will point to the global object
 */
var length = 10;
function callback() {
  console.log(this.length); // 10
}

const obj = {
  length: 5,
  method(fn) {
    fn();
  },
};

obj.method(callback);

// implement the calc function

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this; //  we are returning this object so that we can chain other method like multiply, subtract, add
  },
  subtract(a) {
    this.total -= a;
    return this; //  we are returning this object so that we can chain other method like multiply, subtract, add
  },
  multiply(a) {
    this.total *= a;
    return this; //  we are returning this object so that we can chain other method like multiply, subtract, add
  },
};
const result = calc.add(10).multiply(20).subtract(5).add(2);
console.log(result.total); // 205
