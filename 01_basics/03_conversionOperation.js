let score = 33;
// console.log(score);
// console.log(typeof score);

// With the help of typeof method we can know the data type of an variable.

// To convert string to number we user Number() methos

let convertedNumber = Number(score);
// console.log(typeof convertedNumber);

// console.log(typeof convertedNumber);
// console.log(convertedNumber);

// "33" => 33
// "33admns" => NaN (Not a Number) it will converts to number but when we print the value it gives NaN
// null => 0
// undefined => NaN
// true =>1 ; false => 0

// Boolean conversion

let isLoggedin = "Muneer";
let booleanIsloggedin = Boolean(isLoggedin);
// console.log(booleanIsloggedin);

// If we pass:
// 1 => true;
// 0 => false;
// "" => false;
// "Munna" => true;

// Convert to String:

let sumNumber = 10;
// console.log(typeof sumNumber);
let converted = String(sumNumber);
// console.log(typeof converted);
// console.log(converted);

// ****************** OPERATIONS *********************** //
let myNum = 26;
let negative = -myNum;
// console.log(negative);

// Basic operations:
// console.log(2+2); ==> addition
// console.log(2-2); ==> subtraction
// console.log(2*2); ==> multipy
// console.log(2/2); ==> devide
// console.log(2%2); ==> modulo to find remainders

// tricy operations:

// console.log(1 + "2");
// console.log("1" + 5);
// console.log(typeof ("1" + "8"));

// Here when we add a number with string it concat it gives output as 12,15,18 in string format

// console.log(1 + 3 + "5"); ==> 45
// console.log(1 + "3" + 5); ==> 135
// console.log("1" + 6 + 5); ==> 165

// console.log(((3 + 3) * 6) / 5);

// let a = 3;
// let b = a++; ==> in postfix value will be incremented

// console.log(a, b);

let x = 4;
let y = ++x;
// console.log(x, y); ==> in prefix bothe values will be incremeted
