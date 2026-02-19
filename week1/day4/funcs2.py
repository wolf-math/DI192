# def get_formatted_name(first_name, last_name):
#     """Return a full name, neatly formatted."""
#     full_name = first_name + ' ' + last_name
#     print(full_name)
#     return full_name.title()

# print(get_formatted_name('xiao', 'hendrix'))

def add_three(num):
    return num + 3

def square(num):
    return num ** 2

def divide_2(num):
    return num / 2

step1 = 10

step2 = add_three(step1) # 13
step3 = square(step2) # 169
step4 = divide_2(step3) # 84.5

print(step4) 

result = divide_2(square(add_three(step1)))
print(result) # 84.5

print(add_three(17)) # 20

my_var = print("hi") # my_var equals None
print(my_var) # None
