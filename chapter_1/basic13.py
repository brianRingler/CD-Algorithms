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

# Greater Than Y - Given and array and a value Y, count and print the number of array values greater then Y
def greater_than_Y(arr, y):
    count = 0
    for num in arr:
        if num > y:
            count += 1
    return count

arr = [45, 55, 66, 151, 10000, 2, 1, 78, 49, 506, 789, 214, 92];
y = 45;
print(f'Values greater than {y} are: {greater_than_Y(arr,y)}')



# Max, Min and Avg - Given an array return the max, min and avg values for that array
def minMaxAvg(arr):
    sum, min, max = 0, 999999999999, -999999999999
    for num in arr:
        sum += num
        if num < min:
            min = num
        if num > max:
            max = num
    avg = round(sum / len(arr),2)
    return f'The min is: {min}. The max is: {max}. The avg is: {avg}'


values = [45, 55, 66, 151, 10000, 2, -856, 78, 49, 506, 789, 214, 92];
print(minMaxAvg(values));

# The sorter option 
from statistics import mean
def shorterMinMaxAvg(arr):
    return f'The min is: {min(arr)}. The max is: {max(arr)}. The avg is: {mean(arr)}'

print("The shorter way using the min, max and mean methods. Mean is import from statistics")
print(shorterMinMaxAvg(values))

# Swap string for Array Negative Values - Replace any negative array values with 'Dojo'
def replace_neg(arr):
    for idx, val in enumerate(arr):
        if val < 0:
            arr[idx] = 'Dojo'
    return arr

negArr = [45, -55, 66, -151, 10000, 2, -856, 78, 49, -506, -789, 214, 92]
print('This is a list Dojo for neg values')
print(replace_neg(negArr))


# Print odds 1 - 255
j = 0
while j < 256:
    if j % 2 != 0:
        print(j)
    j += 1