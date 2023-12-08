// what is call ?

// below function will log undefined since this.name is referring to global object
// and name property is not defined in global object it is in obj object
// so to make this.name refer to obj object we can use call method
var obj = { name: "James" };

function sayHello(age, address) {
  console.log(`Call Method --->`, this.name, age, address);
}
sayHello.call(obj, 23, "123 Main Street"); // James 23 123 Main Street

// what is apply ?
// apply is same as call but it takes array as argument
var obj1 = { name: "James" };
function getDetails(age, address, country) {
  console.log(`Apply Method --->`, this.name, age, address, country); // James 23 123 Main Street USA
}
getDetails.apply(obj1, [23, "123 Main Street", "USA"]);

// what is bind ?
// bind is same as call but it returns a function

var obj2 = { name: "Valterri", lastName: "Bottas" };

function getFullName(team) {
  return `${this.name} ${this.lastName} is a Formula 1 driver for team ${team}`;
}

var getFullNameForMercedes = getFullName.bind(obj2);
console.log(`Bind Method --->`, getFullNameForMercedes("Mercedes")); // Valterri Bottas is a Formula 1 driver for team Mercedes

// what is the output of below code
var person = { name: "Peter" };

function sayHi(age) {
  return `${this.name} is ${age} years old`;
}

console.log(sayHi.call(person, 23)); // Peter is 23 years old

// it will not execute instantly
console.log(sayHi.bind(person, 23)); // [Function: bound sayHi]

// what is the output of below code
const age = 23;
const personObj = {
  name: "Pratik",
  age: 24,
  getAge: function () {
    return this.age;
  },
};

var personObj2 = { age: 25 };

// getAge is a method of personObj object but it is appended with call(personObj2) method
// so it will point to personObj2 object
// below code will work same with apply method and bind() method
console.log(personObj.getAge.call(personObj2)); // 25
console.log(personObj.getAge.apply(personObj2)); // 25
console.log(personObj.getAge.bind(personObj2)()); // 25

// what is output

var status = 1;

setTimeout(() => {
  const status = 2;
  const data = {
    status: 3,
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus()); // 3

  // this always refers to the object setTimeout is not an object so it will refer to global object
  // var status = 1 is defined in global object
  console.log(data.getStatus.call(this)); // 1
}, 0);

// what is output
// call printAnimals such that it prints all the animals in objects

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log(`# ${i} ${this.species}  ${this.name}`); // # 0 Lion  King # 1 Whale  Queen
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// append an array to another array without using concat method and loop
const array = ["a", "b", "c"];
const element = [0, 1];

// apply method fetch each element of element array and push it to array
// same can be acheived with spread operator --> array.push(...element);
array.push.apply(array, element); //
console.log(array); // [ 'a', 'b', 'c', 0, 1 ]

// find max number in an array without using loop
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max.apply(null, numbers)); // 10

// what is output (bind chaining)
function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

// it will give output as John because bind chaining does not exist
f(); // John

// what is the output of below code
var age1 = 10;
var person = {
  name: "Pratik",
  age: 24,
  getAgeArrow: () => {
    // this will be pointing to global object
    // we can't manipulate the context of arrow function with help of call, apply and bind
    console.log(`arrow funtion`, this.age1);
  },
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 25 };
person.getAgeArrow.call(person2); // undefined
person.getAge.call(person2); // 25
