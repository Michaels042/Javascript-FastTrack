console.log("hello world");
console.log("mike okey");

// Variables

let name = "Mike Okey";
console.log(name);

sentence = "I am going to London to see the King";
console.log(sentence);

// Operators...(+,-,=,*,/,etc)

// FOOD TIP APP

// food = parseInt(prompt("How much was your food?"));
// tipPrecentage = parseInt(prompt("tip %?")) / 100;
// tipAmount = food * tipPrecentage;
// total = food + tipAmount;

// console.log("tip amount", tipAmount);
// console.log("total", total);

// alert(tipAmount);

// WEATHER APP
// (CONDITIONAL STATEMENTS: if and else)

// let weather = prompt("How is the weather?");

// if (weather == "rainy") {
//   console.log("Grab your umbrella");
// } else {
//   console.log("wear your sunglasses");
// }

// FUNCTIONS

function sayMyname(name) {
  console.log(name);
}
sayMyname("Okey");

function greeting(name) {
  "hi" + "" + name + "nice to meet you";
  console.log(name);
}
greeting("Peter");

function greetings(name) {
  greet = `hi ${name}, nice to meet you`;
  console.log(greet);
}
greetings("Michael");

// USING return key word in FUNCTIONS

function sum(a, b) {
  return a + b;
}
num1 = sum(1, 2);
console.log(num1);

function calcFoodtotal(food, tip) {
  const tipPercentage = tip / 100;
  const tipAmount = food * tipPercentage;
  //   total = food + tipAmount; OR use code in line below
  const total = sum(food, tipAmount);
  return total;
}
console.log(calcFoodtotal(1000, 5));

// ES6
// ARROW FUNCTIONS

// arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b;
};
console.log(sumArrow(20, 30));

// arrow function with implicit return (remove curly braces)
const sumArrow2 = (a, b) => a + b;
console.log(sumArrow2(20, 30));

// sumArrow and sumArrow2 will give same value they are different methods for same problem

// EXERCISES

// Subtract function
const solMinus = (a, b) => a - b;
console.log(solMinus(50, 20));

// Multiply function
const solMultiply = (a, b) => a * b;
console.log(solMultiply(5, 6));

// Divide function
const solDivide = (a, b) => a / b;
console.log(solDivide(90, 3));
