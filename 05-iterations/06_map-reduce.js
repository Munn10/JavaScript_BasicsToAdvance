const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = mynumbers.map((i) => {
  //   return (i = i * 2);
  return (i += 2);
});

// console.log(result);

// Optional chaining:

// const newNumbers = mynumbers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);
// console.log(newNumbers);

// Reduce:

const myNum = [1, 2, 3];

// const total = myNum.reduce(function (acc, cVal) {
//   console.log(`Accumulator: ${acc} and CurrentValue : ${cVal}`);
//   return acc + cVal;
// }, 0);
// console.log(total);

// const total = myNum.reduce((acc, curval) => acc + curval, 0);
// console.log(total);

// Real World Example:

const shoppingCart = [
  {
    item: "Iphone 14",
    price: 35000,
  },
  {
    item: "Air Pods Pro",
    price: 19000,
  },
  {
    item: "Apple Watch",
    price: 25000,
  },
  {
    item: "Mac Book Air",
    price: 100000,
  },
  {
    item: "Ipad",
    price: 55000,
  },
];

console.log(shoppingCart);

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(cartTotal);
