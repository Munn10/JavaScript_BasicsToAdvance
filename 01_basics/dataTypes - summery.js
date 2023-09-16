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
console.log(id === anotherId);
// console.log(id, anotherId);

let bigNumber = 1234546323434n;
console.log(typeof bigNumber);

// ## Reference (Non-primitive)

// Objects, Arrays and Functions

const Heros = ["Thor", "Captain America", "Iron Man", "Spartacus"];
// console.log(typeof Heros); // If we check the type of array using typeof it will show object
// To check array we use one method called Array.isArray();
console.log(Array.isArray(Heros));

let person = {
  name: "Muneer",
  age: 26,
  isDeveloper: true,
};

function hello() {
  console.log("Hello");
}

hello();

// Question: JS is dynamically typed language or statically typed language?
// Ans: JS is dynamically typed language. Beacuse data type is assigned automatically at the timeof compilation or exection.
