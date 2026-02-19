# def upper_string(s):
#     return s.upper()

upper_string = lambda string: string.upper()

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# map_object = map(upper_string, fruit)
# with lambda
map_object = list(map(lambda string: string.upper(), fruit))

# equivalent

# new_list = []
# for fr in fruit:
#     new_list.append(upper_string(fr))

print(map_object)