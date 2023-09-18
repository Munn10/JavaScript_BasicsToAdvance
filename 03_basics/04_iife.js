// Immediately Invoked Function Expression (IIFE)

// We use IIFE functions to avoid pollution from golbal scope.

// This is normal function or function decleration
// function chai() {
//   console.log("DB CONNECTED");
// }

// chai();

(function chai() {
  console.log("DB CONNECTED");
})(); // This is named IIFE

(() => {
  console.log("DB CONNECTED TWO");
})(); // this is simple IIFE

((name) => {
  console.log(`DB CONNECTED THREE ${name}`);
})("Muneer"); // IIFE with parameters and arguments
// Here we are wrapping the dunction content in parenthesis and after that we are ececuitng by adding parenthasis.

// ()() => in first parenthesis we define our function. In second one we are calling function
