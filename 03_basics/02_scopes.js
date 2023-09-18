// Most important topic:

// 1.) Golbal scope
// 2.) Block scope

// var is global scope
// {} => aything inside the curly braces are block scope

// Ex:
let c = 100;

if (true) {
  let a = 10;
  const b = 20;
  c = 30;
  console.log("Inside A: ", a);
  console.log("Inside B: ", b);
}
// console.log(a); in this case it throw error a is not defined
// console.log(b); in this case it throw error b is not defined
// console.log(c); but here we will get c value

// From the above example we can identify that variables decleared in let const are in block scope so we are not able to acces out side the block
// Where as variable dicleard in var is accessable outside the block beacuse, var is global scope.
// console.log(a);
console.log(c);
