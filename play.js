const name = "Ayush";
let age = 30;
const hasHobbies = true;

age = 31;

const summarizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
};

const add = (a, b) => a + b;
console.log(add(1, 3));

const addOne = (a) => a + 1;
console.log(addOne(2));

const addRandom = () => 1 + 1;
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
