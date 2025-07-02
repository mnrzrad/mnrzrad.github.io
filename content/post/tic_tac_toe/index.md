---
title: 🎯 Tic Tac Toe - Object-Oriented Python Game
date: '2025-07-02'
authors: 
  - admin

image:
  caption: "Tic Tac Tou"
  focal_point: Smart
---


Welcome to the classic game of Tic Tac Toe, implemented using Object-Oriented Programming in Python. This project is ideal for learning how classes, methods, and attributes work in practice.

Below is a visual representation of a Tic Tac Toe board:



# 🎓 Object-Oriented Programming (OOP) in Python

This notebook is designed to help you understand the basics of **Object-Oriented Programming (OOP)** in Python using a simple but complete example: Tic Tac Toe

We'll cover key OOP concepts including:
- What is a `class` and why we use it
- How the `__init__` method works
- The role of `self`
- Attributes and methods
- Interacting with objects

# 👨‍🏫 Introduction to OOP

Programming means writing instructions for a computer to follow. These instructions are usually written as **functions**, which perform specific tasks like printing text or calculating a sum.

As a programs get more complex, it's better to organize related data and functions **together**.

In Python, **OOP** is a way to structure your code so that it models real-world entities using:
- **Classes**: Blueprints for creating objects
- **Objects**: Instances created from classes
- **Methods**: Functions that are defined inside classes
- **Attributes**: Data that belongs to the object

## 🧱 What is a Class?
A **class** is like a blueprint for creating something — like how a blueprint for a car defines how to build it.

In Python, a **class** is a blueprint for creating objects that bundle **data** (attributes) and **behavior** (methods).

In programming, a class defines how to build an **object** — a real thing in your program, like a game, a user, or a car.

For example:
```python
class animal:
    def __init__(self, name):
        self.name = name

my_animal = animal("dog")
print(my_animal.name)  # Outputs: dog
```
- `animal` is the class.
- `my_animal` is an object (an instance of the class).
- `__init__()` is a **constructor** — a special method that gets called automatically **when we create a new object from a class**.
- `self.name` stores the name of each specific dog.

## ⚙️ Understanding the `__init__()` method

When you create an object from a class, Python calls a special method named `__init__`. This is known as the **constructor**.
It is used to **initialize** the object’s attributes

Inside `__init__`, we set up the initial values of our object. The first parameter to every method in a class, including `__init__`, must be `self`. It refers to **the current object**.

**Example:**
```python
class animal:
    def __init__(self, name):
        self.name = name
```
Here, `self.name` is an attribute. It stores the name. This lets us write `animal('cat')` and get an object with a name.

## 🧩 What Does `self` Mean?
When you're inside a class, `self` means "this specific object". It lets each method access or change the object's own data.

Think of `self` like saying "this specific object." For example:
```python
def speak(self):
    print(f"{self.name} says Woof!")
```

🧠 Tip: Every method must take self as the first parameter so it can interact with the current object.

# 🎮 Applying OOP to Tic Tac Toe

Object-Oriented Programming (OOP) is a great approach for building games like Tic Tac Toe. Why? Because you have a **state** (the game board, whose turn it is, etc.) and **behavior** (making moves, checking for a winner, drawing the board). It makes sense to bundle these together inside a class.

## 🔄 Benefits of OOP in a Game:
- Easier to **reuse** and **extend** 
- Keeps **data and behavior together**
- Makes code **cleaner and more modular**

## Instantiating a Game
To create a new game object, we instantiate the class:
```python
game = TicTacToe()
```
Now we have a live game object (`game`) that we can interact with by calling its methods.

## 📦 Class Structure Overview
Here’s the anatomy of our class:
```python
class TicTacToe:          # ← defines the blueprint
    def __init__(self):   # ← constructor that initializes the board
        self.board = ...  # ← attribute storing game state
        ...
```
| Component               | Purpose |
|-------------------------|---------|
| `class TicTacToe:`      | Defines the blueprint. |
| `__init__`              | Initializes the game object with a clean board. |
| `self`                  | Refers to the current object (like 'this' in other languages). |
| Attributes              | Store the game’s state (e.g., `self.board`). |
| Methods                 | Define the game’s behavior (e.g., `make_move()`, `check_winner()`). |

> 🧠 **Reminder**: Any method inside a class must take `self` as the first argument so it can access that object’s data.

## 🕹️ Why Use a Class for This Game?
- Groups related logic in one place
- Makes the code reusable and extendable 
- Easier to test and debug
- Clean, modular structure

## 🔁 Game Flow
1. Create the game object:
   ```python
   game = TicTacToe()
   ```
2. In a loop:
   - Show the board: `game.print_board()`
   - Get player move: `game.make_move(...)`
   - Let the AI respond: `game.ai_move()`
3. After each move:
   - Check if there is a winner: `game.check_winner()`
   - Or if the game is a draw: `game.is_draw()`

Now let’s define our class and see each method in action.

```python
import time  # Used to pause execution briefly for realism
import random  # Used by the AI to choose random moves

class TicTacToe:
    def __init__(self):
        # The board is represented by a list of 9 elements (positions 1 to 9)
        self.board = list(range(1, 10))

        # Winning combinations are tuples of index positions
        self.winning_combinations = [
            (0, 1, 2), (3, 4, 5), (6, 7, 8),  # rows
            (0, 3, 6), (1, 4, 7), (2, 5, 8),  # columns
            (0, 4, 8), (2, 4, 6)              # diagonals
        ]

        # Players represented by X and O
        self.current_player = 'X'
        self.ai_player = 'O'

    def print_board(self):
        """Displays the current state of the board."""
        for i in range(0, 9, 3):
            row = self.board[i:i+3]
            for cell in row:
                if cell == 'X':
                    print(colored(f'[{cell}]', 'red'), end=' ')
                elif cell == 'O':
                    print(colored(f'[{cell}]', 'blue'), end=' ')
                else:
                    print(f'[{cell}]', end=' ')
            print("\n")

    def make_move(self, position, player):
        """Attempts to place a move on the board. Returns True if successful."""
        if self.board[position] not in ['X', 'O']:
            self.board[position] = player
            return True
        return False

    def available_moves(self):
        """Returns a list of available board positions (0-based)."""
        return [i for i in range(9) if self.board[i] not in ['X', 'O']]

    def check_winner(self, player):
        """Checks whether the given player has a winning combination."""
        return any(all(self.board[i] == player for i in combo) for combo in self.winning_combinations)

    def is_draw(self):
        """Checks whether all cells are filled and no winner."""
        return all(isinstance(cell, str) for cell in self.board)

    def simulate_check(self, temp_board, player):
        """Checks if a player would win on a simulated board."""
        return any(all(temp_board[i] == player for i in combo) for combo in self.winning_combinations)

    def ai_move(self):
        """AI tries to win, block the opponent, or play strategically."""
        # Try to win
        for move in self.available_moves():
            copy = self.board[:]
            copy[move] = self.ai_player
            if self.simulate_check(copy, self.ai_player):
                self.make_move(move, self.ai_player)
                return

        # Try to block player
        for move in self.available_moves():
            copy = self.board[:]
            copy[move] = self.current_player
            if self.simulate_check(copy, self.current_player):
                self.make_move(move, self.ai_player)
                return

        # Take center if free
        if 4 in self.available_moves():
            self.make_move(4, self.ai_player)
            return

        # Pick random move
        self.make_move(random.choice(self.available_moves()), self.ai_player)
```

## 🎮 Playing the Game

In the loop below, we create an instance of the `TicTacToe` class, display the board, and let the user and AI alternate turns.

This is a practical example of:
- How to instantiate a class
- How to call methods on that object
- How logic flows through conditionals and loops

```python
game = TicTacToe()
print("Welcome to Advanced Tic Tac Toe!")
game.print_board()

while True:
    try:
        move = int(input("Choose your move (1-9): ")) - 1
        if move not in game.available_moves():
            print("Invalid move! Try again.")
            continue

        game.make_move(move, game.current_player)
        game.print_board()
        if game.check_winner(game.current_player):
            print("✅ You win!")
            break
        if game.is_draw():
            print("⚖️ It's a draw!")
            break

        print("AI is thinking...")
        time.sleep(1)
        game.ai_move()
        game.print_board()
        if game.check_winner(game.ai_player):
            print("❌ AI wins!")
            break
        if game.is_draw():
            print("⚖️ It's a draw!")
            break
    except ValueError:
        print("Please enter a valid number between 1 and 9.")
```

    Welcome to Advanced Tic Tac Toe!
    [1] [2] [3] 
    
    [4] [5] [6] 
    
    [7] [8] [9] 
    
    Choose your move (1-9): 5
    [1] [2] [3] 
    
    [4] [X] [6] 
    
    [7] [8] [9] 
    
    AI is thinking...
    [1] [2] [3] 
    
    [O] [X] [6] 
    
    [7] [8] [9] 
    
    Choose your move (1-9): 2
    [1] [X] [3] 
    
    [O] [X] [6] 
    
    [7] [8] [9] 
    
    AI is thinking...
    [1] [X] [3] 
    
    [O] [X] [6] 
    
    [7] [O] [9] 
    
    Choose your move (1-9): 3
    [1] [X] [X] 
    
    [O] [X] [6] 
    
    [7] [O] [9] 
    
    AI is thinking...
    [O] [X] [X] 
    
    [O] [X] [6] 
    
    [7] [O] [9] 
    
    Choose your move (1-9): 7
    [O] [X] [X] 
    
    [O] [X] [6] 
    
    [X] [O] [9] 
    
    ✅ You win!

---

## 🚀 More Advanced

We can make the game smarter by asking the user **who should start**: the human player or the AI. To do this, replace the first few lines of the game code with the following:

```python
game = TicTacToe()
print("Welcome to Advanced Tic Tac Toe!")
starter = input("Do you want to start first? (y/n): ").strip().lower()

if starter == 'n':
    print("AI starts the game.")
    game.ai_move()

game.print_board()
```

This enhancement gives the AI the first move if the player types `n`. Otherwise, the human starts as usual.


## ▶️ Try it Live!

🎮 Want to experience the game directly in your browser?

👉 [Click here to play Tic Tac Toe on Streamlit](https://69bd-34-56-254-79.ngrok-free.app/)

---
