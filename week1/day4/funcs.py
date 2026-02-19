def say_hello(username, location="Ramat Gan"):
    """A function that says hello to everyone"""
    last_name = "Goldberg"
    print(last_name)
    print(sandwich)
    print(f"Hello, {username.capitalize()}! You are from {location.capitalize()}. Is your last name {last_name}?") 

def logout(username):
    print(f"user {username} logged out!")

name = input("What is your name? ")
loc = input("Where are you from? ")

# say_hello(location=loc, username=name)
# say_hello("Alemndra", "Peru", "Quito")
sandwich = "tuna melt"
say_hello(name, loc)
# print(last_name)
# logout(user)