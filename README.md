# Fruit-tac-toe

Tic tac toe but fruitier.

## Snapshot

To enter the game: [Click here](https://elywelly.github.io/tic-tac-toe/homepage)

#### Homepage

![Homepage](https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/finalhomepage.png?raw=true)

#### Game Page

![Game Page](https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/finalgamepage.png?raw=true)

## Tech Used

-   HTML
-   CSS
-   JavaScript
-   GitHub
-   DOM

## Planning

Elements needed on the page

-   Title
-   Tic tac toe template with squares
-   Whose turn is it info
-   Who won message
-   Reset option to clear squares
-   Restart option to end game and start over
-   Character - fruits

**Initial idea was to utilise images of fruits, but emojis were more efficient as the HTML code can easily be used with JS.**

### Layout plan

Determining where everything goes and what kind of boxes are needed.

![Plan 1](https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/plan1.PNG?raw=true)

After writing up the HTML and CSS content, I found the info bar at the bottom to not be as visible when the user first views the page so I decided to switch it to the side.

![Plan 2](https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/plan2.PNG?raw=true)

Other layout considerations after adding JS

-   Tie/Winning message
-   User score/rounds (on the same info bar)

### Functions

When page loads, so do the variables

-   Player 1 and Player 2 characters
-   Character word display of whose turn is it
-   Select a default player
-   Player 1, Player 2 and draw messages for game outcome
-   Each square is an index of an array
-   New array for individual squares to push in player positioning
-   Winning scenarios in an array
-   Listen for user click to start with default player character
    -   If square selected already, alert user to select another
    -   If current player is player1, current player is now player2 + change wording of whose turn is it
-   Win scenario: Condition if it matches winning scenarios array
    -   Check each square's input with each index of winning scenarios
    -   Loop through array for each square and array for winning scenarios to match up if they are the same = win
-   Draw scenario: Else if all squares are filled and not a win
-   Add game round and score (including display message of win)
-   Reset button function to empty all squares and inputs (but not whole game)
-   End game function for game to end and display final scores/winner + Restart (reload page to restart all fields)

## Further developments

Initial idea (in [old-code file](https://github.com/elywelly/tic-tac-toe/tree/main/old-code)) had a default selection of player characters (apple & banana). To allow for user selection from a variety of characters, the code would need to be modified to be more dynamic.

-   Adding in a homepage for players to select their fruit character - ensure users do not select the same character
-   Get player selection and translate that to current game - session storage needed for player selection
-   Ensure players are picking different fruits
-   Allow players to select a new character after the game has ended
-   Ensure players already picked a character if they navigated to game page first - redirect to homepage for character pick
-   Add sound effects to some user clicks and page changes (win/tie) - preload sound
-   Add option for user to turn sound off/on

#### Notes to depict indexes for Squares and Square

-   to compare it to winning scenario index for position on squares

![index reference](https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/square-sqaures-index-ref.png?raw=true)

## Credits

Background image from Pixabay | Sound from [mixkit](https://mixkit.co/)
