# def starts_with_A(string):
#     return string[0] == "A" # retruns True or False

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]

filtered_object = filter(lambda string: string[0] == "A", fruit)

print(list(filtered_object))


