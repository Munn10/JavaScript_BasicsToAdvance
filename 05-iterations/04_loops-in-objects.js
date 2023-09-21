const myObject = {
  js: "javaScript",
  cdd: "C++",
  ru: "Ruby",
  shift: "Swift by Apple",
};

// to iterate through objects we use for in loop:
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

for (let key in myObject) {
  //   console.log(myObject[key]); // => this is to print values
  //   console.log(key); // =>  this is to print keys
}

// Question: Can for in loop apply to array?
//Ans: Yes we can apply for in loop in arrays
const myArr = ["apple", "banana", "mango", "grapes", "kiwi"];

for (let index in myArr) {
  //   console.log(myArr[index]);
  //   console.log(index);
}

//Question: Can we allpy for in loop in maps?
//Ans: we cannot appy for in loop in maps.

const map = new Map();

map.set("In", "India");
map.set("USA", "United States Of America");
map.set("SL", "Sri Lanka");
map.set("PAK", "Pakistan");
map.set("UAE", "United Arab Emirates");
map.set("SL", "Sri Lanka");

// for (let [key, value] of map) {
//   console.log(`${key} :- ${value}`);
// }

// for (let key in map) {
//   console.log(key);
// }
