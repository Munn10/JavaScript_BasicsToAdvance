// ########### Dates #################
let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate); // ==> object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-23");
// let myCreatedDate = new Date("03-05-2023");
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // to find milli seconds

let myNewDate = new Date();

// console.log(myNewDate.getDay());
// console.log(myNewDate.getMonth());
// console.log(myNewDate.getFullYear());
// console.log(myNewDate.getHours());
// console.log(myNewDate.getMinutes());
// console.log(myNewDate.getSeconds());

myNewDate.toLocaleString("default", {
  weekday: "long",
});
