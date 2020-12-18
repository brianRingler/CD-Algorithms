# Sigma with forEach Loop

def sigma(arr):
    sumTotal = 0
    for i in arr:
        sumTotal += i
    return sumTotal 

theArr = [10, 10, 10, 70]
print(sigma(theArr))

# Factorial 

def factorial(n):
    total = 1
    # range says start at 1 and stop value before n+1
    # range stop value is NOT inclusive 
    for i in range(1,n+1): 
        total *=  i
        print(f'Value of i is: {i} and total is {total}') 
    return total 

print(f"factorial of 5 should return 120: {factorial(5)}")


print('Three and Fives Time\n')

def threes_fives():
    n = 4_000_000
    total_sum = 0
    for i in range(100,4000001):
        if i %  3 == 0 and i % 5 == 0:
            break
        elif i %  3 == 0:
            total_sum += i
        elif i % 5 == 0:
            total_sum += i
    return total_sum

print(f'The total sum is: {threes_fives()}')


# Generate Coin Change 
print(' Generate Coin Change -------------\n')
import math
# change takes an integer cents and returns the smallest combination of coins
#  e.g., $1.00 or 100 cents is equal to 4 quarters
def change(cents = 0):
  quart = 0
  dime = 0
  nick = 0
  pen = 0
  # convert to int if string or float
  cents = int(cents)
  quart = math.floor(cents / 25)
  cents = cents - quart * 25
  if cents == 0:
    return f'Change returned: {quart} quarters, {dime} dimes, {nick} nickels and {pen} pennies.'
  
  dime = math.floor(cents / 10)
  cents = cents - dime * 10
  if cents == 0:
    return f'Change returned: {quart} quarters, {dime} dimes, {nick} nickels and {pen} pennies.'
  
  nick = math.floor(cents / 5);
  cents = cents - nick * 5;
  if cents == 0:
    return f'Change returned: {quart} quarters, {dime} dimes, {nick} nickels and {pen} pennies.'
  
  pen = math.floor(cents / 1)
  cents = cents - pen * 1
  if cents == 0:
    return f'Change returned: {quart} quarters, {dime} dimes, {nick} nickels and {pen} pennies.'

print("Change Returned >>");
print(change(116));

# Statistic Doubles 
# Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. # # Roll a pair of these dice, tracking the statistics until doubles are rolled.     # Display the number of rolls, min, max, and average
print()
print('Statistic Doubles ------------')

import random as r
def die():
    double = False
    roll_count = 0
    while not double:
        roll_1 = r.randint(1,6)
        roll_2 = r.randint(1,6)
        print(f'{roll_1} and {roll_2}')
        if roll_1 == roll_2:
            roll_count += 1
            double = True
        else:
            roll_count += 1

    return f"You rolled double {roll_1}'s. It took {roll_count} 🎲"

print(die())

print('-'*45)
print('Fibonacci Numbers')

def fibonacci(num):
    n1, n2, fibNum, fibSum = 1, 1, 1, 2
    for i in range(3, num+1):
        if num == 0:
            return fibNum, fibSum -1 
        elif num == 1:
            return fibNum, fibSum
        else:
            print(f'n = {i} >> n1 = {n1} n2 = {n2}')
            fibNum = n2 + n1;
            print(f'fib num  is {fibNum}\n')
            n1 = n2
            n2 = fibNum
            fibSum += n2
    return f'The Fibonacci Number for {num} is: {fibNum}\nThe Fibonacci Sum is {fibSum}\n'

print(fibonacci(9));

# return last digit of calculated exponent 

print("Last Digit of A the the B\n")

def lastDigit(a = 0, b= 0):
    if a < 0 or b < 0: 
        print("Sorry, non-negative values only")
    else:
        total = 0
        total = str(a ** b)
        return total[len(total)-1]

print(lastDigit(5,9))
        