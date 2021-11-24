# tic-tac-toe

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
-   Reset after someone wins OR no more blank squares

### Layout plan

Determining where everything goes and what kind of boxes are needed.

![Plan 1](https://github.com/elywelly/tic-tac-toe/blob/main/Images/plan1.PNG)

After writing up the HTML and CSS content, I found the info bar at the bottom to not be as visible when the user first views the page so I decided to switch it to the side.

![Plan 2](https://github.com/elywelly/tic-tac-toe/blob/main/Images/plan2.PNG)

Other layout considerations after adding JS

-   Tie/Winning message
-   User score/rounds (on the same info bar)

### Functions

When page loads, we start getting the variables

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

Further development

-   A homepage for players to select their fruit character
-   Get player selection and translate that to current game
-   Allow players to return to homepage when they want to replay to switch characters

Notes to depict indexes for Squares and Square

-   to compare it to winning scenario index for position on squares

![index reference](https://github.com/elywelly/tic-tac-toe/blob/main/Images/square-sqaures-index-ref.png)
