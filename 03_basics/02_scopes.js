// Most important topic:

// 1.) Golbal scope
// 2.) Block scope

// var is global scope
// {} => aything inside the curly braces are block scope

// Ex:
let c = 100;
let d = 500;

// if (true) {
//   let a = 10;
//   const b = 20;
//   c = 30;
//   console.log("Inside A: ", a);
//   console.log("Inside B: ", b);
//   console.log("Inside D: ", d);
// }
// console.log(a); in this case it throw error a is not defined
// console.log(b); in this case it throw error b is not defined
// console.log(c); but here we will get c value

// From the above example we can identify that variables decleared in let const are in block scope so we are not able to acces out side the block
// Where as variable dicleard in var is accessable outside the block beacuse, var is global scope.
// console.log(a);
// console.log(d);

// Nested scope:

function one() {
  const userName = "Muneer";
  function two() {
    const website = "Youtube";
    console.log(userName);
    console.log(website);
  }
  //   console.log(website); // Here website giving error becuse we are trying to accese it outside of the scope. If we want to access it we should define inside the scope
  two();
}

// one();

if (true) {
  const userName = "Muneer";
  if (userName !== null) {
    const website = " Youtube";
    // console.log(userName + website);
  }
  //   console.log(website); // We cann't acces it outside of the scope
}

// console.log(userName); // we cann't access it outside of the scope

// Scopes also varies in functions:

// This function calles as function decleartion
// In function decleration we can access functions before initilization.
console.log(addone(6));
function addone(num) {
  return num + 1;
}

// This function called as function expression
// We cann't access function before intializtion in function expression
console.log(addTwo(8));
const addTwo = function (num) {
  return num + 2;
};
