rick_list = [
    ['first_name', 'rick'],
    ['last_name', 'sanchez']
]

# print(rick_list[[0][1]]) # rick

rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}

print(rick_dict['first_name']) # rick

########

my_dog = {
  'name': 'Rufus',
  'age': 4
}

print(my_dog['name']) # Rufus

#####

rick_dict = {
    'first_name':'Rick',
    'last_name':'Sanchez'
}

print(f"The last name of {rick_dict['first_name']} is:, {rick_dict['last_name']}")

# The two for loops are equivalent

for item in rick_dict:
    print(item, '->', rick_dict[item])

for key, value in rick_dict.items():
    print(key, '->', value)

###########

print('age' in my_dog) # True
print(4 in my_dog) # False

###########

print(my_dog.keys())
print(my_dog.values())
print(my_dog.items())
