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

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("age"));
