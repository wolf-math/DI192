fruits = ['apple', 'banana', 'kiwi', 'pear']

for fruit in fruits:
  print(fruit)

for i in range(10): # start at 0, up to but not including 10
    print(i)

for i in range(5, 10): # start at 5, up to not including 10
    print(i)

for i in range(4, 20, 2): # start at 4, up to not including 20, skip every 2 numbers
    print(i)

my_range = range(10)
print(my_range)
print(list(my_range))

home_on_the_range = range(415, 100000000, 7)
print(home_on_the_range)

my_list = [3,4,88,54,129]

print(min(my_list))

minimum = my_list[0]
for num in my_list:
    if num < minimum:
        minimum = num

print(minimum)

print(max(my_list))

maximum = my_list[0]
for num in my_list:
    if num > maximum:
        maximum = num

print(maximum)

print(sum(my_list))


