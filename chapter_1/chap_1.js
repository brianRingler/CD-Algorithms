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

// Generate Coin Change
console.log(" Generate Coin Change -------------\n");

// change takes an integer cents and returns the smallest combination of coins
// e.g., $1.00 or 100 cents is equal to 4 quarters
function change(cents = 0) {
  let quart = 0;
  let dime = 0;
  let nick = 0;
  let pen = 0;
  // convert to int if string or float
  cents = parseInt(cents);
  quart = Math.floor(cents / 25);
  cents = cents - quart * 25;
  if (cents === 0) {
    return `Change returned: ${quart} quarters, ${dime} dimes, ${nick} nickles and ${pen} pennies. `;
  }
  dime = Math.floor(cents / 10);
  cents = cents - dime * 10;
  if (cents === 0) {
    return `Change returned: ${quart} quarters, ${dime} dimes, ${nick} nickles and ${pen} pennies. `;
  }
  nick = Math.floor(cents / 5);
  cents = cents - nick * 5;
  if (cents === 0) {
    return `Change returned: ${quart} quarters, ${dime} dimes, ${nick} nickles and ${pen} pennies. `;
  }
  pen = Math.floor(cents / 1);
  cents = cents - pen * 1;
  if (cents === 0) {
    return `Change returned: ${quart} quarters, ${dime} dimes, ${nick} nickles and ${pen} pennies. `;
  }
}

console.log("Change Returned >>");
console.log(change(116));

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

// Statistic Doubles
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. # /// Roll a pair of these dice, tracking the statistics until doubles are rolled.     // Display the number of rolls, min, max, and average
console.log();
console.log("Statistic Doubles ------------");

function die() {
  let double = false;
  let roll_count = 0;
  while (!double) {
    roll_1 = Math.trunc(Math.random() * 6) + 1;
    roll_2 = Math.trunc(Math.random() * 6) + 1;
    console.log(`${roll_1} and ${roll_2}`);
    if (roll_1 === roll_2) {
      roll_count += 1;
      double = true;
    } else {
      roll_count += 1;
    }
  }
  return `You rolled double ${roll_1}'s. It took ${roll_count} 🎲`;
}

console.log(die());
console.log();

console.log(fibonacci(9));

console.log("Last Digit of A the the B\n");

function lastDigit(a = 0, b = 0) {
  if (a < 0 || b < 0) {
    console.log("Sorry, non-negative values only");
  } else {
    let total = 0;
    total = a ** b;
    total = total.toString();
    return total.slice(total.length - 1);
  }
}

console.log(lastDigit(5, 9));
