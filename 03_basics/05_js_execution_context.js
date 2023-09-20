// Java Script Executio Context:

// ==> JS is single threded language
// ==> Code which we write is defined in "global execution context"
// ==> Then it will refer "this"
// ==> In browser "this" refers to window object.

// ===> 1.)Globale Execution Context
// ===> 2.)Function Execution Context
// ===> 3.)Eval Execution Context

// ==> Code will execute in 2 phases:
// ==>1. Memory creation phase
// ==>2. Execution phase

// Ex: How code will execute?

/*
let val1 = 10;
let val2 = 20;
function addTwo(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addTwo(val1, val2);
let result2 = addTwo(50, 60);
// console.log(result1, result2);
*/

// Stages: ==>1.) It will create global exection context assign the value to this.
// ==>2.) Memory creation phase: In this phase all variables assigned some memory
// ==>  val1 = undefined
// ==>  val2 = undefined
// ==>  addTwo = definition
// ==>  result1 = definition
// ==>  result2 = definition

// ==>3.) Execution Phase:
//==> Now value1 = 10;
//==> Now value2 = 20;
//==> addTwo => it will create -> new variable environment + ececution thread
// ->Here again 2 stages happen:
//-> Memory allocation and execution
//==> Memory: num1 = undefined
//==> num2 = undefined
//==> total = undefined
// ==>
//  Execution: num1 = 10;
// num2 = 20;
// total = (10+20) --> return value send to golbal execution context
// --> after this new variable environment and exection thread will be deleted automatically

// ==> for result2 :
// it will do the sampe process.
