const userId = 123456;
let accoutEmail = "abc@gmail.com";
var accountPassword = "01010101";
accountCity = "Hyderabad";
let accountState; // When ever we use variable with out assigning a value js can store it as undefined;

// userId = 342342; not allowed beacue we cann't change constant values once it decleared.
console.log(userId);

/*
    Prefer not to use var
    beacuse of issue in block scope and functional scope
*/
accoutEmail = "xyz@zc.com";
accountPassword = "1212121";
accountCity = "Bangalore";

console.table([
  userId,
  accoutEmail,
  accountPassword,
  accountCity,
  accountState,
]);
