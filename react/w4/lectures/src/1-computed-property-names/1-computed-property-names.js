// object review

let user = {
  id: "124354",
  prop1: "value 1",
};
// console.log(user);

// how do you add a property to the object?
user.email = "value 2";
console.log(user);
// {
// id: '124354',
//   prop1: "value 1",
//   email: "value 2",
// };

// you can also add a property using a variable
let userInput = "age";
user[userInput] = "juan";
// console.log(user);

// {
// id: '124354',
//   prop1: "value 1",
//   email: "value 2",
//   age: "juan",
// };
