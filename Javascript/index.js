// deleting an object from javascript

/**
 * Delete keyword is used only to delete the property of an object
 * it is not used to delete variable
 */
const person = {
  name: "pratik",
  age: 20,
};

delete person.age;

console.log(person); // { name: 'pratik' }

// iffy function
const newPerson = (function (a) {
  delete a;
  return a;
})(5);

console.log(newPerson); // 5

/**
 *  how to add propery with spaces in it
 */
const personWithSpaceProperty = {
  name: "pratik",
  age: 20,
  "my full name": "pratik gupta",
};

// the way we are accessing property is similar way we can delete property
// delete["my full name"]
console.log(personWithSpaceProperty["my full name"]); // pratik gupta

/**
 * How to add dynamic property in object
 */
const firstName = "name";
const firstNameValue = "pratik";

const userWithDynamicProperty = {
  [firstName]: firstNameValue,
};

console.log(userWithDynamicProperty); // { name: 'pratik' }

/**
 * How to loop through object with key and value
 */
const person1 = {
  name: "pratik",
  age: 20,
  address: "mumbai",
};

// we can use for in loop to loop through key
for (let key in person1) {
  // object key
  console.log(key); // name, age, address

  // object value
  console.log(person1[key]); // pratik, 20, mumbai

  // what will be the output of this question
  const obj = {
    a: "one",
    b: "two",
    a: "three",
  };
  //when we have two same key here a is repeated so the last value will be taken and first value will be replace with latest value
  console.log(obj); // { a: 'three', b: 'two' }
}

// create a function that will multiply the value of the object by 2

const newObj = {
  a: 1,
  b: 2,
  title: "javascript",
};

const multiplyByTwo = (obj) => {
  for (key in obj) {
    if (obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
};
console.log(multiplyByTwo(newObj)); // { a: 2, b: 4, title: 'javascript' }

// what is the output of this code
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // a['[object Object]'] = 123
a[c] = 456; // a['[object Object]'] = 456
console.log(a[b]); // 456

// where is most json.parse and json.stringify used
// json.parse is used to convert json string to javascript object
// json.stringify is used to convert javascript object to json string
// this most used in setting and getting data from local storage
// we cannot store the object inside the local storage so we have to convert it into string and then we can store it in local storage

/**
 *  what will be the output of this code
 */
console.log(..."pratik"); // p r a t i k

/*
 *  what will be the output of this code
 */
const userObj1 = {
  name: "pratik",
  age: 20,
  address: "mumbai",
};

// it will only stringify the name and age property and ignore the address property
const data = JSON.stringify(userObj1, ["name", "age"]);
console.log(data); // {"name":"pratik","age":20}

/*
    what will the output of this code
*/

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

// this will return the value of radius because this.radius pointing to shape object property radius
console.log(shape.diameter()); // 20

// this will return NaN because this.radius pointing to global object property radius
console.log(shape.perimeter()); // NaN


/*
    what is wrong with this code
*/
function getItems (fruitList, ...args, favouriteFruit) {
    return [...fruitList, ...args, favouriteFruit];
}
getItems(['apple', 'banana'], 'orange', 'pineapple', 'mango');

// we cannot use rest parameter after the normal parameter. it must be last parameter
function getItems (fruitList, favouriteFruit, ...args) {
    return [...fruitList, ...args, favouriteFruit];
}


// what will be the output of this code
let c1 = { greeting: "Hey!" };
let d1;

d1 = c1;
c1.greeting = "Hello";
console.log(d1.greeting); // Hello

/**
 * in above code we are not creating a new object we are just creating a reference of the object
 * so when we change the value of c1.greeting it will also change the value of d1.greeting
 */

// what will be the output of this code
console.log({a: 1} == {a: 1}); // false
console.log({a: 1} === {a: 1}); // false
/*
    In above code all the four objects are different because they are created in different memory location
    objects are only equal if they are pointing to the same memory location.
*/


// what will be the output of this code
const value = {
    number: 10
}

const multiply = (x={...value}) => {
    console.log(x.number *= 2);
}


/**
 *  when we call multiply function without passing any argument it will take the default value
 * bacause we are using spread operator to copy the value of value object to x object
 * so when we change the value of x object it will not change the value1 of value object
 * because it clone the value of value object to x object
 * 
 * but when we pass the argument to the function it will take the value of the argument
 * and this time it update the original value of value object
 */
multiply(); // 20 
multiply(); // 20
multiply(value); // 20
multiply(value); // 40



function changeAgeAndReference(person){
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    }
    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
}

const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // { name: 'Alex', age: 25 }
console.log(personObj2); // { name: 'John', age: 50 }

