# Coffee Shop Menu Manager

# Initial data
menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

def show_menu(menu_dict):
    """Print all drinks and prices."""
    for item, price in menu_dict.items():
        print(f"{item} -> ₪{price}")


def add_item(menu_dict):
    """Add a new drink to the menu."""
    item = input("add item to menu: ")
    if item in menu_dict:
        print("Item already in menu")
        return

    price = int(input("What is the price? "))
    menu_dict.update({item: price})
    


def update_price(menu_dict):
    """Change the price of an existing drink."""
    item = input("What drink to update? ")
    if item not in menu_dict:
        print("Item not found.")
        return
    
    price = input("What is the updated price? ")
    menu_dict.update({item: price})


def delete_item(menu_dict):
    """Remove a drink from the menu."""
    item = input("What drink to remove from the menu? ")
    if item not in menu_dict:
        print("Item not found.")
        return
    
    del menu_dict[item]

def show_options():
    """Print the available actions."""
    print("""
What would you like to do?
1. Show menu
2. Add item
3. Update price
4. Delete item
5. Exit
""")


def run_coffee_shop():
    """Main loop of the program."""
    while True:
      show_options()
      choice = int(input("What would you like to do? "))
      if choice == 1:
          show_menu(menu)
      elif choice == 2:
          add_item(menu)
      elif choice == 3:
          update_price(menu)
      elif choice == 4:
          delete_item(menu)
      elif choice == 5:
          print("goodbye")
          break
      else:
          print("invalid")

# Start the program
run_coffee_shop()