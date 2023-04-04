# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
    - branch: game-board
    - import Square into App.js and call component
    - create a 9 square grid
    - pass state array to square component
    - styled square

- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
    - branch: index-position
    - added onClick to square div
    - added handleClick method to Square.js
    - passed index to Square and handleClick
    - added handleGamePlay to App.js
    - passed handleGameplay to Square to get the index by using Functional Props


- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
    - branch: tree emoji
    - made a copy of the board using the spread operator
    - updated the value ofthe square at particular index to be a tree
    - CTRL + CMD + Space

    
- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.
    - branch: treasure-bomb
    - made setter function for treasure location
    - made setter function for bomb location



- As a user, I can click on a “Play Again” button that will restart the game.
    - branch: play-again-button 
    - create a button tag 
    - create a function to refresh the page called "handleRefreshButton
    - pass that into the button tag by adding onClick={handleRefreshButton}



- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.
    - branch: counter
    - create a set variable for the counter and set it equal to 5 for 5 tries
    - conditional if player picks a square, counter decreases

- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
    - use alert and include string that states the user has won

- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
    - use alert stating the user has lost

- As a user, I cannot continue to play the game after I win or lose.
    - reset page after either win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
