let number = 100;
// console.log(number);
// console.log(typeof number);

const myNumber = new Number(100);
// console.log(myNumber);
// console.log(myNumber.toFixed(2));
// console.log(myNumber.toPrecision(3)); prcetion we used wher we are assining decimal values

const newNmber = 1000000;
// console.log(newNmber.toLocaleString());

// +++++++++++++ Maths +++++++++++++++++++

// console.log(Math);
// console.log(Math.round(4.5)); // it will give round up value
// console.log(Math.ceil(4.2)); // it will give upper value
// console.log(Math.floor(4.2)); // it will give lower value
// console.log(Math.abs(-4)); // it will convert negative value to positive
// console.log(Math.min(1, 2, 3, 5, 0, 10, 22)); // it will give minimum value
// console.log(Math.max(1, 2, 3, 55, 0, 10, 22)); // it will give maximum value

// console.log(Math.random());
// console.log(Math.random());
// Math.random() gives values between 0 and 1.

// console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// Question?
// If we waant values b/w 10 ad 20

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min)) + min);
