let name = "Muneer";
let reposCount = 2;

// console.log(name + " " + reposCount); Old way of concatinate or adding two strings

// In ES6 they introduced template strings[``];

let intro = `Hi my name is ${name} and i have ${reposCount} repos in my github`;
// console.log(intro);

let myString = new String("Muneer-Bhai-Js");
// console.log(myString);
// console.log(myString.__proto__); // to see object

// console.log(myString.toUpperCase());
// console.log(myString.charAt(5));
// console.log(myString.indexOf("B"));
// console.log(myString.padStart(3, myString));

let string = "5";
// console.log(string.padStart(4, "0"));
// console.log(string.padEnd(4, "0"));

let fullNumber = "12345678901234";
let lastFour = fullNumber.slice(-4);
// console.log(lastFour);
let maskedNumber = lastFour.padStart(fullNumber.length, "*");
// console.log(maskedNumber);
let myString1 = "Muneer-Bhai";
// console.log(myString1.substring(0, 6));
// console.log(myString1.slice(-4));
let url = "https://muneer.com/muneer%20Bhai";
let newUrl = url.replace("%20", "-");
// console.log(newUrl);
// console.log(url.includes("muneer"));

// console.log(myString.split("-"));
// console.log(myString.split(","));

// let myNewname = new String("Muneer");
// let result = myNewname.split(" ", myNewname.length);
// console.log(result);

let givenStr = "Hello World this is JS tutorail";

const reverseStr = (str) => {
  return str.split(" ").reverse().join(" ");
};

let result = reverseStr(givenStr);
console.log(result);
