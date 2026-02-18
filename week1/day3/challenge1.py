keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

number_dict = {}
for item in list(zip(keys, values)):
    print(item[0])
    print(item[1])
    number_dict[item[0]] = item[1]

print(number_dict)
