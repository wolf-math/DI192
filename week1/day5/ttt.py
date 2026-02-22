board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]

def display_board():
    for i, row in enumerate(board):
        print(f" {row[0]} | {row[1]} | {row[2]} ")
        if i < 2:
            print("-----------")

def place_piece(location, piece):
    if board[location[0]][location[1]] == " ":
        print("That space is already taken")
    
    board[location[0]][location[1]] = piece

def check_winner():
    winning_combos = [
        # rows
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        #columns
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
        # diagonals
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]]
    ]

    for combo in winning_combos:
        if board[combo[0][0]][combo[0][1]] == board[combo[1][0]][combo[1][1]] == board[combo[2][0]][combo[2][1]]:
            return board[combo[0][0]][combo[0][1]]

    return False

def play():
    pass

play()
