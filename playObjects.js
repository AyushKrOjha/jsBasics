const person = {
  name: "Ayush",
  age: 30,
  greet() {
    console.log("Hi I'm " + this.name);
  },
};

//Destructuring
const printName = ({ name }) => {
  console.log(name);
};
printName(person);

const { name, age } = person;
console.log(name, age);

// const copiedPerson = { ...person };
// console.log(copiedPerson);

const hobbies = ["sports", "Cooking"];
const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1, hobbie2);
// for (let hobbie of hobbies) {
//   console.log(hobbie);
// }

// console.log(hobbies.map((hobby) => "Hobby: " + hobby)); //give a new array
// console.log(hobbies);
// hobbies.push("Programming");
// console.log(hobbies);

//Rest and spread
// const copiedArray = [...hobbies]; //spread
// console.log(copiedArray);

// const toArray = (...args) => {
//   // rest
//   return args;
// };
// console.log(toArray(1, 2, 3, 4));
