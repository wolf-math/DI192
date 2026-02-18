my_books = {
  "title": "Harry Potter",
  "author": "JK Rowling",
}

x, y = list(my_books.items())[0]
print(x)
print(y)

for key, value in my_books.items():
    print("the " + key + " is " + value)

for item in my_books.values():
    print(item)

# print(list(range(3, 100, 7)))

my_list = ['xiao', 'jingwen', 'cheryl']

print(list(enumerate(my_list)))

for index, item in enumerate(my_list):
    print(f"index {index} is {item}")

for i in range(1, 3):
    print(i)
    break # does not print 2
else:
    print('The for loop is over')

for i in range(10):
    pass



my_list = [1,2,3]
my_new_list = []
for num in my_list:
    my_new_list.append(num ** 2)

print(my_new_list) # [1, 4, 9]

# Does the entire for loop on 1 line
my_newer_list = [num ** 2 for num in my_list] # [1, 4, 9]

print(my_newer_list)

##################

age_increase = {'Lea': 1, 'Mark': 2, 'George': 3}
family_age = {'Lea': 12, 'Mark': 25, 'George': 50}

new_family_age = {name: age + age_increase[name] for name, age in family_age.items()}

print(new_family_age)
