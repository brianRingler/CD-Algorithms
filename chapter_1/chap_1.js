// Sigma with forEach Loop

function sigma(arr) {
  let sumTotal = 0;
  arr.forEach((i) => {
    sumTotal += i;
  });
  return sumTotal;
}

const theArr = [10, 10, 10, 70];
console.log(sigma(theArr));

// factorial

function factorial(n) {
  let total = 1;
  for (let i = 1; i < n + 1; i++) {
    total *= i;
    console.log(`Value of i is: ${i} and total is ${total}`);
  }
  return total;
}

console.log("Factorial Time");
console.log(factorial(5));

// Threes and Fives
// Create function ThreesFives() that adds each value from 100 and 4_000_000 (inclusive) if that value
// is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
console.log("Three and FIves Time");

function threesFives() {
  totalSum = 0;
  for (let i = 100; i < 40000001; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      break; // jumps out of loop
    } else if (i % 3 === 0) {
      totalSum += i;
    } else if (i % 5 === 0) {
      totalSum += i;
    }
  }
  return totalSum;
}

console.log(`Total sum is: ${threesFives()}`);

console.log("--------------------------");
// Fibonacci Numbers

function fibonacci(num) {
  let n1 = 1,
    n2 = 1,
    fibNum = 1,
    fibSum = 2;
  for (let i = 3; i <= num; i++) {
    if (num === 0) {
      return fibNum, fibSum - 1;
    } else if (num === 1 || num === 2) {
      return fibNum, fibSum;
    } else {
      console.log(`n = ${i} >> n1 = ${n1} n2 = ${n2}`);
      fibNum = n2 + n1;
      console.log(`fib num  is ${fibNum}\n`);
      n1 = n2;
      n2 = fibNum;
      fibSum += n2;
    }
  }
  return `The Fibonacci Number for ${num} is: ${fibNum}\nThe Fibonacci Sum is ${fibSum}\n`;
}

console.log(fibonacci(9));
