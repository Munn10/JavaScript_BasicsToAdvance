// +++++++++++++++ Arrays +++++++++++++

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myArr);

// myArr.push(5); // insert/push the values to last index
// console.log(myArr);
// myArr.pop();
// console.log(myArr); // removes/pops the value from the last index

// myArr.shift(); // removes/pops the value from first index
// console.log(myArr);

// myArr.unshift(5); // add/insert the values from first index
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(1)); // if we pass not presented values then it will give -1.

// const myArr1 = myArr.join(); // join() method converts array to string.
// console.log(myArr);
// console.log(myArr1);
// console.log(typeof myArr1);

// console.log("A ", myArr);

// const myArr1 = myArr.slice(0, 3);

// console.log("B ", myArr1);
// console.log("A ", myArr);

// const myArr2 = myArr.splice(0, 3);

// console.log("C ", myArr2);
// console.log("A ", myArr);

// We have small difference in slice and splice.
// slice() will not modify the original array. It will print the value based on that [0,3] means starts from first index and prints till 3rd index.
// splice() will modify the original array. It means it cuts/removes the values based on the parametes.Ex:[1,2,3,4,5]=>splice(0,3)=>[4,5]=>[1,2,3]

const spliceArr = [1, 2, 3, 4, 5];
// console.log(spliceArr.splice(0, 3)); //==> removes from 0 index to till 3rd index
// console.log(spliceArr);
console.log(spliceArr.slice(0, 3)); // ==> prints the values from 0 index to 2nd index
console.log(spliceArr);

// ++++++++++++++++++ Array Methods ++++++++++++++++++++++++
// push(), pop(),unshift(), shift(),splice(), slice()
