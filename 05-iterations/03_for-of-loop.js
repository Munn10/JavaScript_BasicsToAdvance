// for of loop:
// for (const iterator of object) {

// }

const arr = [1, 2, 3, 4, 5, 6];

for (const val of arr) {
  //   console.log(`Value is ${val}`);
}

const greeting = "Hello World!";

for (let greet of greeting) {
  if (greet == " ") {
    continue;
  }
  //   console.log(`${greet}`);
}

for (let greet of greeting) {
  if (greet == " ") {
    break;
  }
  //   console.log(`${greet}`);
}

// Map: to store unique values

const map = new Map();

map.set("In", "India");
map.set("USA", "United States Of America");
map.set("SL", "Sri Lanka");
map.set("PAK", "Pakistan");
map.set("UAE", "United Arab Emirates");
map.set("SL", "Sri Lanka");

// console.log(map);

// map.forEach((key) => {
//   console.log(key);
// });

for (const [key, value] of map) {
  //   console.log(`value is ${key} and ${value}`);
}

const myobject = {
  game1: "Call Of Duty",
  game2: "Free Fire",
  game3: "God Of War",
  game4: "Cricket",
};

// console.log(myobject);

// for (const { key } of myobject) {
//   console.log(`${key}`);
// }

// For of loop won't apply in for objects
