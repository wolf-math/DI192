def starts_with_A(s):
    return s[0] == "A" # retruns True or False

starts_with_A("Cheryl") # False
starts_with_A("Aaron") # True
starts_with_A("Xiao") # False

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]

filtered_object = filter(starts_with_A, fruit)
# Apple -> True
# Banana -> False
# Pear -> False
# ...

# a_fruit = [] # equivalent to filtered_object
# for fr in fruit:
#     if starts_with_A(fr):
#         a_fruit.append(fr)


print(list(filtered_object))