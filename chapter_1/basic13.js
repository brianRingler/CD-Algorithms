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

// Greater Than Y - Given and array and a value Y, count and print the number of array values greater then Y
function greaterThanY(arr, y) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count += 1;
    }
  }
  return count;
}
const arr = [45, 55, 66, 151, 10000, 2, 1, 78, 49, 506, 789, 214, 92];
const y = 45;
console.log(`Values greater than ${y} are: ${greaterThanY(arr, y)}`);

// Max, Min and Avg - Given an array return the max, min and avg values for that array

// The long way
function minMaxAvg(arr) {
  let sum = 0;
  let min = 999999999999;
  let max = -999999999999;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let avg = Math.round(sum / arr.length);
  return `The min is: ${min}. The max is: ${max}. The avg is: ${avg}`;
}

const values = [45, 55, 66, 151, 10000, 2, -856, 78, 49, 506, 789, 214, 92];
console.log(minMaxAvg(values));

// A shorter way
function shorterMinMaxAvg(arr) {
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i of arr) {
    sum += i;
  }
  console.log(sum);
  let avg = Math.round(sum / arr.length);
  return `The min is: ${min}. The max is: ${max}. The avg is: ${avg}`;
}
console.log("Shorter option");
console.log(shorterMinMaxAvg(values));

// Swap string for Array Negative Values - Replace any negative array values with 'Dojo'

function replaceNeg(arr) {
  arr.forEach(function (curVal, idx) {
    if (curVal < 0) {
      arr[idx] = "Dojo";
    }
  });
  return arr;
}

const negArr = [45, -55, 66, -151, 10000, 2, -856, 78, 49, -506, -789, 214, 92];
console.log(replaceNeg(negArr));

// Print odds 1 - 255
let j = 1;
while (j < 256) {
  if (j % 2 != 0) {
    console.log(j);
  }
  j += 1;
}

// iterate through array print each element
function printArray(arr) {
  for (let val of arr) {
    console.log(val);
  }
}

const clMe = [
  "Teddy",
  -55,
  66,
  -151,
  10000,
  2,
  -856,
  78,
  49,
  -506,
  -789,
  214,
  92,
  "Today",
  "Hello",
  45,
  "foo",
];

console.log("Print all values of an Array");
console.log(replaceNeg(clMe));

// Get and print average of an array
let total = 0;
function getAvg(arr) {
  arr.forEach();
}

arrayValues = [10, 20, 30, 40, 50];
