// HIGHER ORDER FUNCTIONS INCLUDES:
// 1. MAP
// 2. FILTER
// 3. REDUCE

// ..........................................................................................
// ..........................................................................................

//1. USING MAP
// (MAP,  LOOPS AND RETURNS AN ARRAY)

// No need for curly braces because its just one line of code(implicit return)
// [1, 2, 3, 4].map((number) => console.log(number));

//DOUBLE NUMBERS

// let result = [1, 2, 3, 4].map((number) => number * 2);
// console.log(result);
//  OR

// const doubleMap = (numbers) => {
// return numbers.map((number) => number * 2);
// };
// console.log(doubleMap([1, 6, 3]));

// ..........................................................................................
// ..........................................................................................

//2. FILTER

// const filter = (numbers, greaterThan) => {
//   let result = [];
//   for (const number of numbers) {
//     if (number > greaterThan) {
//       result.push(number);
//     }
//   }
//   return result;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7], 4));
// OR

// const nums = [1, 2, 3, 4, 5, 6, 7];
// console.log(nums.filter((num) => num > 3));
// console.log(nums.filter((num) => num > 4 || num < 2));
// ......................................|| means OR

const actors = [
  { name: "Johnny", netWorth: 30000 },
  { name: "Amber", netWorth: 100 },
  { name: "Helmsworth", netWorth: 20000 },
  { name: "J.Lo", netWorth: 200 },
  { name: "Cruise", netWorth: 400000 },
];

// let result = actors.filter((actor) => actor.netWorth > 200);
// console.log(result);

// let names = result.map((actr) => actr.name).join(", ");

// document.getElementById("jsPractice").innerHTML = `<h1>${names}</h1>`;

// ..........................................................................................
// ..........................................................................................

// 3. REDUCE

// 3a. REDUCE-SUM
// function summ(a, b) {
//   return a + b;
// }
// const nums = [1, 2, 3, 4];
// const ans = nums.reduce(summ);

// OR

const nums = [1, 2, 4, 4];
const ans = nums.reduce((a, b) => a + b, 0);
console.log(ans);

// 3a. REDUCE-MULTIPLY
// function multiply(a, b) {
//   return a * b;
// }
// const numms = [2, 3, 4];
// const ansa = numms.reduce(multiply);

// OR

const numms = [2, 4, 4];
const ansa = nums.reduce((a, b) => a * b);
console.log(ansa);

const an = actors.reduce((a, b) => a + b.netWorth, 0);
console.log(an);
