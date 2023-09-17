// const tinderUser = new Object(); // this is single ton object

const tinderUser = {}; // noraml object(object literal)
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.age = 24;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "user@google.com",
  fullName: {
    userFullname: {
      fullName: {
        firstName: "Muneer",
        lastName: "Sarasapalli",
      },
    },
  },
};

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullname);
// console.log(regularUser.fullName.userFullname.fullName);
// console.log(regularUser?.fullName?.userFullname?.fullName?.firstName);

// How to concat objects:

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const obj4 = { g: 7, h: 8 };

// const newObj = { obj1, obj2 }; // This is not right way of doing it
// console.log(newObj);

// const newObj = Object.assign({}, obj1, obj2, obj3, obj4);

const newObj = { ...obj1, ...obj2, ...obj3, ...obj4 };

// console.log(newObj);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("age"));

//// +++++++++++++++ Object Destructuring +++++++++++++++++++++

const course = {
  courseName: "Js in Hindi",
  courseFee: "999",
  courseInstructor: "Munna",
};

// console.log(course.courseInstructor); // This is noraml way of printing. Insteas we can destrure the things.

// const { courseInstructor } = course; // we can change the key name as well
// const { courseInstructor: instructor } = course;
// console.log(instructor);

const { courseName, courseFee, courseInstructor } = course; // this is called destructuring

// Mostly we use this method in ReactJs

// useually when we call apis we will get the data in the form of JSON

// {
//     "course":"JS in Hondi",
//     "turor":"Munna",
//     "courseFee":"free"
// }

// This is the JSON

// we will get the data in some time in object and some in array of objects;

// {
//   [{}, {}, {}];
// }

// {
//     {},{},{}
// }
