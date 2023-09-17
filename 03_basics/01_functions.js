function sayMyName() {
  console.log("M");
  console.log("U");
  console.log("N");
  console.log("E");
  console.log("E");
  console.log("R");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//   // Here we are defining called as parameters(num1,num2)
//   console.log(num1 + num2);
// }

// let result = addTwoNumbers(10, 20); // Here we are passing inputs that's called arguments
// console.log(result);

// In this function result we can store it in a variable but when we print it in consle it give undefined becuse function it self return something!

function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

// We need to remind one thing that after return there will be no exection in funtion.

let ans = addTwoNumbers(10, 20);
// console.log(ans);

// function isLoggeIn(username) {
//   if (username === undefined) {
//     console.log("Please enter valid user name");
//     return;
//   }
//   return `${username} just logged in!`;
// }

// console.log(isLoggeIn("muneer"));
// console.log(isLoggeIn());

function isLoggedIn(username = "munna") {
  // We can pass default paramter by this
  if (!username) {
    console.log("Please enter valid user name");
    return;
  }
  return `${username} just logged in!`;
}

// console.log(isLoggedIn());

// How can we pass more args with the help of rest operator:

function calculateCartValue(...num) {
  return num;
}

// console.log(calculateCartValue(20, 30, 40, 50));

// Now we can see how to handle objects in funtions:

const userObject = {
  name: "Muneer",
  isLoggedin: false,
};

function handleObject(anyObject) {
  console.log(
    `User name is ${anyObject.name} and is loggedIn is ${anyObject.isLoggedin} `
  );
}

// handleObject(userObject);

// handleObject({
//   name: "Muneer Sarasapalli",
//   isLoggedin: true,
// });

// We can pass arrays also

const myArray = [100, 200, 300, 400];

function returnSecondValue(anyArray) {
  return anyArray[2];
}
// console.log(returnSecondValue(myArray));

console.log(returnSecondValue([500, 800, 1020, 3040, 55060]));
