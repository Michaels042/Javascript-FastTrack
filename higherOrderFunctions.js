// HIGHER ORDER FUNCTIONS INCLUDES:
// 1. MAP
// 2. FILTER
// 3. REDUCE

// USING MAP
// (MAP,  LOOPS AND RETURNS AN ARRAY)

// No need for curly braces because its just one line of code(implicit return)
[1, 2, 3, 4].map((number) => console.log(number));

//DOUBLE NUMBERS

let result = [1, 2, 3, 4].map((number) => number * 2);
console.log(result);
//  OR

const doubleMap = (numbers) => {
  return numbers.map((number) => number * 2);
};
console.log(doubleMap([1, 2, 3]));

// FILTER

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

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums.filter((num) => num > 3));
console.log(nums.filter((num) => num > 4 || num < 2));
// ......................................|| means OR
