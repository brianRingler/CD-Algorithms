# Print all integers 1 - 255

# Using a while loop
i = 1
while i < 256:
    print(f'while loop {i}')
    i += 1

# using a for loop 
for i in range(1, 256):
    print(f'for-in loop {i}')


# Print Sum 0 - 255
# Print integers from 0 to 255 and with each integer print the sum so far

sum = 0
for i in range(0,256):
    sum += i
    print(f'{i} sum is {sum}')

# Find and print the max value of an Array
numbers = [400, 500, 600, 200, 100, 150, 99, 78, 4.5, -99];

# Using a for loop 
def max_number(arr):
    max_num = 0
    for i in range(len(arr)):
        if arr[i] > max_num:
            max_num = arr[i]
    return max_num

print(f'Max number is {max_number(numbers)}')

# Using the max method 
print(f'Using the max() method: {max(numbers)}')

# Odds array - Create an array with all the odd integers between 1 and 255 (inclusive)

odds_array = []
for i in range(1,256):
    if i % 2 != 0:
        odds_array.append(i)
print(odds_array)
