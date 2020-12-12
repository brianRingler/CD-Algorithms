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

