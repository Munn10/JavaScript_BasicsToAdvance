// for loop:

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    // console.log("5 is best number");
  }
  //   console.log(element);
}

// Loop inside a loop:

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and outer lopp value ${i}`);
    // console.log(i + " * " + j + " = " + i * j);
  }
}

// Apply loops on array:

const myArr = ["thor", "spiderman", "ironman", "captain America"];

for (let i = 0; i < myArr.length; i++) {
  const element = myArr[i];
  //   console.log(`${i}: ${element}`);
}

// Important topics:

// break and continue

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected 5`);
//     // continue;
//     break;
//   }
//   console.log(i);
// }

//Continue:

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(i);
}
