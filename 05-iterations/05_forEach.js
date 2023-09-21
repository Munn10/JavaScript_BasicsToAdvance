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

// myCoding.forEach((ele) => {
//   console.log(ele.languageName);
// });

// For each can not return values
// const values = myCoding.forEach((ele) => {
//   return ele;
// });
// console.log(values);

// Filter: Filter method return values

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNum = myArr.filter((num) => num > 4);
// console.log(newNum);

const newNum = [];

myArr.forEach((num) => {
  if (num > 3) {
    newNum.push(num);
  }
});

// console.log(newNum);

const books = [
  { title: "Book One", gener: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", gener: "Drama", publish: 1990, edition: 2007 },
  { title: "Book Three", gener: "Romance", publish: 2000, edition: 2004 },
  { title: "Book Four", gener: "Action", publish: 1980, edition: 2014 },
  { title: "Book Five", gener: "History", publish: 1999, edition: 2004 },
  { title: "Book Six", gener: "Non-Fiction", publish: 2002, edition: 2020 },
  { title: "Book Seven", gener: "Science", publish: 2014, edition: 2004 },
  { title: "Book Eight", gener: "Fiction", publish: 1995, edition: 2015 },
  { title: "Book Nine", gener: "Science", publish: 2005, edition: 2010 },
  { title: "Book ten", gener: "Fiction", publish: 2009, edition: 2018 },
];

const Fiction = books.filter((item) => {
  return item.gener === "Fiction";
});

const publish2k = books.filter(
  (bk) => bk.publish >= 2000 && bk.gener === "Science"
);
// console.log(Fiction);
console.log(publish2k);
