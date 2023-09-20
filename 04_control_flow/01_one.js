// if()

// if (condition) {
// }

// conditional checks: <, >, <=, >=, ==, ===, !=, !==

// Ex:
const temparature = 60;
// if (temparature != 50) {
//   console.log("true");
// } else {
//   console.log("False");
// }

// if (temparature !== "60") {
//   console.log("true");
// } else {
//   console.log("false");
// }

//Scope:
// const score = 200;

// if (score > 100) {
//   //   let power = "fly";
//   var power = "fly";
//   console.log(`Power is: ${power}`);
// }

// console.log(`Power is: ${power}`); ==> we will get error because power scope is block scope.
// console.log(`Power is: ${power}`); //==> We can acces power here beacuse the scope is globle. Cause we decleraed a vaiable using var.

// real world examples:
let userLoggedIn = true;
let hasDebitCard = true;
let loggedInfromGoogle = true;
let loggedInfromMail = true;

if (userLoggedIn && hasDebitCard) {
  console.log("Allowed to shop");
}

if (loggedInfromGoogle || loggedInfromMail) {
  console.log("User Logged in");
}
