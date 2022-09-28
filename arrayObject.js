//  ARRAY METHODS

const food = ["okpa", "abacha", "achicha", "ukwa"];
console.log(food);

// grab 2nd index
console.log(food[2]);

// add to the end
food.push("isiewu");
console.log(food);

// slice from the list
// food.slice( 0, 2)
console.log(food.slice(0, 2));

console.log(food.slice(1, 2));

console.log(food.indexOf("abacha"));

console.log(food.length);

// OBJECTS

const person = {
  name: "leonardo",
  shirt: "white",
};

// dot notation
console.log(person.name);
console.log(person.shirt);

// bracket notation
console.log(person["name"]);
console.log(person["shirt"]);

// assign object
person.phone = "1-222-222-222";

console.log(person.phone);
console.log(person);

// Used ES6 arrow function with 2 arguments
const introduce = (name, shirt) => {
  // Used an object with 2 keys
  const person = {
    name: name,
    shirt: shirt,
  };
  // Used template literals
  const intro = `Hi, my name is ${person.name} and the 
    color of my shirt is ${person.shirt}`;

  return intro;
};
console.log(introduce("mike", "navy-blue"));

// Used ES6 arrow function with 2 arguments
const introducer = (name, shirt) => {
  // Used an object with 2 keys
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 30000,
    netWorth: function () {
      // obeject "person" is represented as 'this'
      return this.assets - this.liabilities;
    },
  };
  // Used template literals
  const intro = `Hi, my name is ${person.name} and the 
      color of my shirt is ${
        person.shirt
      } and my net worth is $${person.netWorth()} USD`;

  return intro;
};
console.log(introducer("mike", "navy-blue"));
