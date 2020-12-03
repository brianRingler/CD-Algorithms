"use strict";

// Print all integers 1 - 255

// Using while loop
let i = 1;
while (i < 256) {
  console.log(`while loop ${i}`);
  i += 1;
}

// Using for loop
for (let i = 0; i < 256; i++) {
  console.log(`for loop ${i}`);
}

// Print Sum 0 - 255
// Print integers from 0 to 255 and with each integer print the sum so far
let sum = 0;
for (let i = 0; i < 256; i++) {
  sum += i;
  console.log(`${i} sum is ${sum}`);
}

// Find and print the max value of an Array
const numbers = [400, 500, 600, 200, 100, 150, 99, 78, 4.5, -99];

// Using a for loop
function maxNumber(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(`Max number is ${maxNumber(numbers)}`);

// Using the Math.max method
console.log(`Using Math.max() method. Number is ${Math.max(...numbers)}`);

// Odds array - Create an array with all the odd integers between 1 and 255 (inclusive)

const oddsArray = [];
for (let i = 1; i < 256; i++) {
  if (i % 2 != 0) {
    oddsArray.push(i);
  }
}
console.log(`The odds Array: ${oddsArray}`);
