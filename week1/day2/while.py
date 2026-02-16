x = 0
while x < 10:
    print(x)
    x += 1

# for loop equivalent
for x in range(10):
    print(x)

password = "ruben" # sets the password

while True: # loops forever unless password is correct
    get_pass = input("What's the password? ")
    if get_pass == password: # If password is "ruben"
        print("you hacked the mainframe!")
        break
    else: 
        print("WRONG!") # After this back to top of while loop


favorite_foods = ["steak", "pizza", "chicken wings", 'pasta', "beer", "whiskey"]

gross_foods = []
while True:
    food = input("name a food you don't like: ")
    if food == 'quit':
        break
    elif food in favorite_foods:
        continue # if the listed food is in favorite_foods, don't add to list
    else:
        gross_foods.append(food)

print(gross_foods)
