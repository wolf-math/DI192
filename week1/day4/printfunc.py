# def say_cheese():
#     return "cheese"

# print(say_cheese)

# func_dict = {
#     "my_function": say_cheese
# }

# print(func_dict["my_function"]()) # say_cheese -> func_dict -> "my_function"
# print(say_cheese()) # calling direct


def my_f1():
    print("Hello")

def my_f2():
    print("Word")

def my_f3():
    print("This is Rick!")

list_of_functions = [my_f1, my_f2, my_f3]

for function in list_of_functions:
    function()