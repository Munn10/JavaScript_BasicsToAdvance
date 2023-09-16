// ## Primitive

// 7types: String, Number, Null, Undefined, Boolean, BigInt, Symbol

let number = 10;
let myNum = 10.23;
let name = "Muneer";
const tempOitside = null;
let score;
let isLoggedin = false;

let id = Symbol("123"); //  it is used to store unique values
let anotherId = Symbol("123");
// console.log(id === anotherId);
// console.log(id, anotherId);

let bigNumber = 1234546323434n;
// console.log(typeof bigNumber);

// ## Reference (Non-primitive)

// Objects, Arrays and Functions

const Heros = ["Thor", "Captain America", "Iron Man", "Spartacus"];
// console.log(typeof Heros); // If we check the type of array using typeof it will show object
// To check array we use one method called Array.isArray();
// console.log(Array.isArray(Heros));

let person = {
  name: "Muneer",
  age: 26,
  isDeveloper: true,
};

function hello() {
  console.log("Hello");
}

// hello();

// Question: JS is dynamically typed language or statically typed language?
// Ans: JS is dynamically typed language. Beacuse data type is assigned automatically at the timeof compilation or exection.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory: stack and heap.

// Stack(Primitive) ==> Primitive data type stored in Stack memory which means when ever we declered primitive value we will get copy of that.

// Heap(Reference) ==> Reference values will be stored in Heap memory which means when ever we change reference value if main value alos affects.

// Stack: In Heap we will get a copy. So it won't affect the main.
let myName = "Muneer";
let myAnotherName = myName;
// console.log(myName, myAnotherName);
myAnotherName = "Muneer Bhai";
// console.log(myName, myAnotherName);

// Heap: In Heap we will get reference beacuse of that when ever we make changes it will affect both.

let personOne = {
  name: "Hello World",
  programming: "Java Scrip",
};

let personTwo = personOne;
// console.log(personOne, personTwo);
personTwo.programming = "Python Developer";
// console.log(personOne.programming, personTwo.programming); // It effecting the main value

let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
// console.log(arr1, arr2);
arr2.push(5);
// console.log(arr1, arr2);
