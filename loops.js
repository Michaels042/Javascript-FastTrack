// const foods = ["okpa", "abacha", "achicha", "ukwa"];
// for (const food of foods) {
//   console.log(food);
// }

// const nums = [1, 2, 3, 4, 5, 6];
// for (const num of nums) {
//   console.log(num);
// }

// .............................................................................................................

// Double the numbers in the array
// const numms = [1, 2, 3, 4, 5, 6];

// for (const num of numms) {
//   console.log(num * 2);
// }
// // OR

// let result = [];
// for (const num of numms) {
//   result.push(num * 2);
// }
// console.log(result);

// OR

// const double = (numbs) => {
//   let result = [];
//   for (const numb of numbs) {
//     result.push(numb * 2);
//   }
//   return result;
// };
// console.log(double([1, 2, 3, 4, 5, 6]));

// .............................................................................................................

// Square each number in the array

// const square = (numbs) => {
//   let result = [];
//   for (const numb of numbs) {
//     result.push(numb ** 2);
//   }
//   return result;
// };
// console.log(square([1, 2, 3, 4, 5, 6]));

// .............................................................................................................

// Length of an Array (LETTER COUNTER)

// const howManyLetters = (phrase) => {
//   return { result: phrase.length };
// };

// const phrase = prompt("type your phrase here");

// OR THIS METHOD BELOW

// const howManyLetters = (phrase) => {
//   let result = 0;
//   for (const index in phrase) {
//     console.log(parseInt(index) + 1);
//     result = parseInt(index) + 1;
//   }
//   return { result };
// };

// const phrase = prompt("type your phrase here");

// console.log(howManyLetters(phrase));

// .............................................................................................................

// MAKE A FUNCTION THAT SUMS UP AN ARRAY

// const sumOfArr = (numbers) => {
//   let result = 0;
//   for (const number of numbers) {
//     console.log(number);
//     result += number;
//   }
//   return { result };
// };
// const nos = [1, 2, 3, 4, 5];
// console.log(sumOfArr(nos));

const sumArrr = (numbers) => {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
};

const nos = [1, 2, 3, 4, 5, 6];

console.log(sumArrr(nos));

// .............................................................................................................

// FIND THE MAX NUMBER

const max = (numbers) => {
  let result = numbers[0];

  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return { result };
};

console.log(max([1, 2, 30, 4, 5, 6]));

// .............................................................................................................

// CHECKING THE FREQUENCY OF A LETTER

const letterFrequency = (phrase) => {
  // letterFrequency('hahaa') {'h':2, 'a':3}
  console.log(phrase);
  // make a frequency object {}
  let frequency = {};
  for (const letter of phrase) {
    // check if letter exists in frequency
    if (letter in frequency) {
      // increment the value by +1
      frequency[letter]++;
      // otherwise, set the value to 1
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};

console.log(letterFrequency("hahaa"));

// CHECKING THE FREQUENCY OF A  WORD BY USING THE OBJECT letterFrequency defined above
const wordFrequency = (phrase) => {
  const words = phrase.split(" ");
  return letterFrequency(words);
};

const userInput = prompt("Write your sentence");
console.log(wordFrequency(userInput));
