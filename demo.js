// Type Object

// const person = {};
// console.log(typeof person);

// NEW

// Access Property Values
// Change Property Values

// const person = {
//   name: "John",
//   age: 38,
//   job: "developer",
// };
// console.log(person);
// console.log(person.name);
// person.name = "Jane";
// console.log(person);
// console.log(person.name);

// const person = {
//   name: "John",
//   age: 38,
//   job: "developer",
// };
// console.log(person["name"]);
// person["name"] = "Jane";
// console.log(person["name"]);

// const myProperty = "name";
// console.log(person[myProperty]);

// Special Cases (Spaces, Number)

// const person2 = {
//   1: "test",
//   "John Doe": "Person Name",
// };

// console.log(person2["1"]);
// console.log(person2["John Doe"]);

// Nesting of Objects

// const person = {
//   name: "John",
//   age: 38,
//   job: "developer",
//   address: {
//     street: "Main Street",
//     state: "NY",
//     zipCode: 10001,
//   },
// };

// console.log(person.address.zipCode);
// console.log(person["address"]["zipCode"]);

// const person = { name: "John", age: 38, job: "developer" };
// console.log(person);

// Comparison of Objects
// Reference Types vs. Primitive / Value Types

// console.log(23 === 23);
// console.log({} === {});

// const person1 = {
//   name: "John",
//   age: 30,
//   job: "developer",
// };

// const person2 = {
//   name: "John",
//   age: 30,
//   job: "developer",
// };

// console.log(person1 === person2);

// const person = {
//   name: "John",
//   age: 30,
// };
// console.log(person);

// person.job = "developer";
// console.log(person);

// person.address = {};
// console.log(person);

// person.address.street = "Main Street";
// console.log(person);

// delete person.job;
// console.log(person);

const person = {
  name: "John",
  age: 30,
};
console.log(person);

person.address = { street: "Main Street" };
console.log(person);

person.address.state = "NY";
console.log(person);
