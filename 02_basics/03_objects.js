// singleton
// Object.create()

// object literals:
const Jsuser = {
  name: "Muneer",
  age: 26,
  "Full Name": "Muneer Sarasapalli",
  email: "Muneer@google.com",
  location: "Bangalore",
  isLoggedin: false,
  lastLoggedDays: ["Monday", "Saturday"],
};

// How to access elements: dot notation and bracket notation

// console.log(Jsuser.name);
// console.log(Jsuser["email"]);
// We cannot access Full naem property with the help of dot notation
// console.log(Jsuser["Full Name"]);

// In interview some one ask u to define symbol and used it in object then we have to do following:
let symbol = Symbol("My Symbol");

const Jsuser2 = {
  name: "Muneer",
  age: 26,
  [symbol]: "My key1", // If we want to use symbol value as key in object we have define it in object.
  "Full Name": "Muneer Sarasapalli",
  email: "Muneer@google.com",
  location: "Bangalore",
  isLoggedin: false,
  lastLoggedDays: ["Monday", "Saturday"],
};

// console.log(typeof Jsuser2.symbolval);
// console.log(typeof Jsuser2[symbol]);
// console.log(Jsuser2[symbol]);
// console.log(Jsuser2);

// How to change the key values.

// Jsuser2.email = "Muneer@brillio.com";
// console.log(Jsuser2);
// Object.freeze(Jsuser2); // Freeze mthod is used to freeze the object
// Jsuser2.email = "Muneer@microsoft.com";
// console.log(Jsuser2);

Jsuser2.greet = function () {
  console.log("Hello JS user");
};

Jsuser2.newGreet = function () {
  console.log(`Hello JS user, ${this.name}`);
};
console.log(Jsuser2.greet());
console.log(Jsuser2.newGreet());
