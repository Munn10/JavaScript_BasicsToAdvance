const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["flash", "superman", "batman"];

// console.log(marvel_heros);
// console.log(dc_heros);

// marvel_heros.push(dc_heros); // Push methods directly update the original array
// console.log(marvel_heros);

// let all_heros = marvel_heros.concat(dc_heros); // concat method will not modify original array isted it will return new array.
// console.log(all_heros);

let all_heros = [...marvel_heros, ...dc_heros]; // spread operator it is used to spread elements
// console.log(all_heros);

let anoother_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, 13], 15]];
// let new_another_array = anoother_array.flat(1); // We can give depth.
let new_another_array = anoother_array.flat(Infinity); // It will flat
// console.log(new_another_array);

// To check wether the data type is array or not we have a method:

console.log(Array.isArray("Muneer"));
console.log(Array.from("Muneer")); // Array.from() method is used to create an array.
console.log(Array.from({ name: "Munna" })); // We have to define wether to create array based on keys or based on values. if not denoted it will give empty array

// we have one more method to create an array Array.of(). it is used to create an array from multiple elements and return a new array

let score1 = 100;
let score2 = 200;
let score3 = 300;

let total_scores = Array.of(score1, score2, score3);
console.log(total_scores);
