---
title: 'Nine Men Morris'
date: 'August 13, 2021'
excerpt: 'The classic game built on pygame and using the minimax algorithm for playing with AI.'
tags: 'python;game'
cover_image: '/images/posts/trilha.webp'
---

# **About this project**
This is a **pygame** implementation of the classic game Nine Men´s Morris, also called Mill, Mills and even Cowboy Checkers.

The project is fully available at my <a href="https://github.com/Cbonief/Nine-Men-Morris" style="color: Blue">Github Repo</a>.


## **Nine Men´s Morris**

The game is played on this [Board](#the-board) and there are 3 phases to it: Placement, Movement and Flying. 

In all phases the players can form mills by having three pieces in a row or a column, either by placing them or moving. Forming a mill allows for the removal of an opponent's piece. The winning condition is if a player has no legal move, or if a player is left with two pieces, however the game cannot end in phase one!


### **Phase One**

In this phase of the game, the players alternate in placing their pieces on the board. After each player has placed nine pieces, begins phase two of the game.

### **Phase Two**

It is in phase two that the players now move the pieces they have previouly placed. A piece's legal move is one to an empty adjacent tile.

### **Phase Three**

If a player is left with only three pieces in phase two, it is said that the player is flying, and begins phase three, where the losing player can now move pieces to any empty tile, and not just adjacent ones. This gives this player an advantage, so as to not make the end game boring.

### **The Board**
The game is played on the following board. which consists of 24 locations where the players can place and move pieces.

<img src="https://png.vector.me/files/images/1/2/124490/nine_mens_morris_game_board_clip_art.jpg" alt="drawing" style="width:100%; heigth:400px;"/>

### **Aditional Info**
You can read more about the game at:

<a href="https://en.wikipedia.org/wiki/Nine_men%27s_morris" style="color: Blue">Wikipedia</a>

<a href="https://web.archive.org/web/20041121040028/http://mc2.vicnet.net.au/home/aura/shared_files/Berger1.pdf" style="color: Blue">Old Game</a>

<a href="http://library.msri.org/books/Book29/files/gasser.pdf" style="color: Blue">Perfect Game Solution</a>

<a href="https://althofer.de/stahlhacke-lasker-morris-2003.pdf" style="color: Blue">Another Perfect Game Solution</a>

## **The Implementation**

All implementation was built in Python 3.9 and the libraries used so far are:

Numpy: used for some calculations.

Pygame: used to create the game display and handle input events.

The project started with the base game with no interface whatsoever, and that's where I'll start explaning it.

### **The Game**

The first thing I did was create a Nine Morris class to store the board, active player and the mills, and have functions to act on the board and read information from it.

#### **The players**

The white player will be considered as being equal to 1 and the black player as -1. This will be stored in a player class. The numbers were choosen because it´s easy to change the active player with ``active_player = -active_player``.

```python
class Player:
    WHITE = 1
    BLACK = -1
```

#### **The board**

The 24 positions of the board will be stored in a **np.array** of size 24, and will be labeled as follows.


<img src="https://imgur.com/nXBDbyN.png" alt="drawing" style="width:300px; heigth:300px;"/>

Doing this means will have to know all possible mill configurations. This I have already done, and wrote in the file [Possible Mills](Assets/possible_mills.py).


#### **The moves**

There are three types of possible moves, either you place a piece, move a piece or remove a piece. With this in mind, we´ll make the class `MoveType` 

```python
class MoveType:
    PLACE_PIECE = 1
    MOVE_PIECE = 2
    REMOVE_PIECE = 3
```

We´ll also have a class for the move itself, storing the position where the move will act upon, the type of move and, if it´s a piece movement, the final position of the piece.

```python
class Move:
    def __init__(self, start, type, end):
        self.move_type = type
        self.position = start
        self.final_position = end
```

This class also has a method to verify if the move is valid, a method to pretty print the move, and a method to hash it (more about this later).


### **The AI**

The opponent's AI is built using the negamax algorithm which is a variant of the
minimax algorithm where the score of one player is always considered to be the
opposite of the other, which simplifies the logic.

In the minimax algorithm, the first step it to create a tree of all **N**
(search depth) moves ahead. Then the best move is selected by going up the
root where your move always maximizes your score and your opponent's always minimizes it.

My explanation of it is not maximized, so I suggest you watch Sebastian Lague's take
on it. [Video](https://www.youtube.com/watch?v=l-hh51ncgDI&pp=ugMICgJwdBABGAE%3D)

My implementation uses _alpha beta_ pruning and transpositions tables, which speed up
the search when the depth is high. This is the reason why 
the moves and the board state need a hashing fuction.

### **UI**

The UI was built using a custom widgets' library for **pygame** I wrote, which can be accessed 
[here](https://github.com/Cbonief/Agricola). These include buttons, panels, text panels, text
edits and more.

### **Gameloop**

The main utility of pygame is in rendering the game and managing the game loop. The 
game loop is a function that runs at ~60Hz, and display all graphics, and handles inputs.

In **pygame** setting the framerate of a loop can be done with `timer.tick(60)` where `timer` is `Clock` object in the **pygame.time** module

My final gameloop looks like:
```python
def run(self):
    timer = pygame.time.Clock()
    while self.running:
        self.event_handler()
		
        if self.active_window == MENU:
            self.menu()
        elif self.active_window == MATCH:
            self.match()
        elif self.active_window == CONFIG:
            self.config()
	
        self.show_active_window()
	
        timer.tick(60)
        pygame.display.update()
```

Where the function `self.event_handler` takes care of all the user's input, such 
as mouse and keyboard clicking.

The window manager is a dictionary storing all the windows in the game. This allows
for easy on and off switching of all widgets.

## **To Do**
<strike>Add in game timer</strike>

Add minimal (but random) time for AI to play.

Ability to go back to the main menu once the game has started.

Save a list a of the best first moves for depths higher than 4.