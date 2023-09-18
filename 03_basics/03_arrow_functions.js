// Two familiar with arrow functions we need to get familear with this key word.
// We can now understand what is this keyword below:
// ==> This keyword referes current context;

const user = {
  userName: "Muneer",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to the website!`);
    console.log(this); // Here this keyword refers to the context
  },
};

// user.welcomeMessage();
// user.userName = "Nassu";
// user.welcomeMessage();

// console.log(this);
// In node environment this keyword referes empty object {}.
// But in browser this key word refers to window object.

// function chai() {
//   const username = "muneer";
//   console.log(this.username); // In function we cannot use this key word because it referes global object in functions.
// }

// chai();

// const chai = function () {
//   const username = "muneer";
//   console.log(this.username);
// };

const chai = () => {
  const username = "muneer";
  console.log(this); // Here this referes empty object {}
};

// chai();

// +++++++++++++++++ Important Diff +++++++++++++++++++++++++++

// 1. In function declearation & function expression this key word refers golbal object.
// 2. Where as in arrow fiunction this keyword refers empty object {}.

// This is the main difference in noraml functions and arrow functions

// Arrow function:

// () => {} ==> this is the basic syntax

// This is with expicit return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(1, 2));

// This is implict return
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(1, 2));

// This methos helps when we want to return any object then we need to wrap it in parenthasis.
// const addTwo = (num1, num2) => (num1, num2);
// console.log(addTwo(10, 20));

const addTwo = (num1, num2) => ({ userName: "Muneer" });

// console.log(addTwo());
