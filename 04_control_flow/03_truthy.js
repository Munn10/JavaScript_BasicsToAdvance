// truthy values and falsy values:

const userMai = "M@munnna.ai";

if (userMai) {
  console.log("Got mail");
} else {
  console.log("Don't have user mail");
}

// Falsy values: false, 0, -0, "", BigInt 0n, null, undefined, NaN

// truthyvalues: "0", 'false', " ", [],{}, function(){ }
// except these all are truthy values

const users = [];

// if (users.length === 0) {
//   console.log("Array is empty");
// }

// How to check if the object is empty or not?
const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log("Empty object");
// } else {
//   console.log(`We have some data: ${emptyObj.id}`);
// }

// Nullish coalescing operator (??) : null , undefined

let val1;
// val1 = 5 ?? 10;
// val1 = 0 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

// console.log(val1);

// Ternairy Operator:

// condition ? true : false;

const coldCoffee = 200;

coldCoffee <= 150
  ? console.log("Less than 150")
  : console.log("Greater than 150");
