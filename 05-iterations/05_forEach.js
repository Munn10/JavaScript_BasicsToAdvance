// for each : For Each loop is Higher order function

// array.forEach(element => {

// });

const programmingLanguages = [
  "JS",
  "python",
  "Java",
  "C++",
  "Ruby",
  "dotNet",
  "NodeJs",
  "ExpressJs",
  "MongoDb",
];

// programmingLanguages.forEach((ele) => {
//   console.log(ele);
// });

// function print(ele) {
//   console.log(ele);
// }

// programmingLanguages.forEach(print);

// programmingLanguages.forEach((ele, index, arr) => {
//   console.log(ele, index, arr);
// });

const myCoding = [
  { languageName: "JavaScript", languageFileName: "js" },
  { languageName: "Java", languageFileName: "java" },
  { languageName: "Python", languageFileName: "py" },
  { languageName: "MySQL", languageFileName: "sql" },
];

myCoding.forEach((ele) => {
  console.log(ele.languageName);
});
