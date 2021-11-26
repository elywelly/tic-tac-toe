// When page loads
window.addEventListener('load', function () {
    // get storage for players' choice
    let player1 = localStorage.getItem('player1');
    let player2 = localStorage.getItem('player2');

    // if no fruits were selected
    if (player1 == null || player2 == null) {
        location.href = 'homepage.html';
    }

    // to identify the player
    let player1Fruit;
    let player2Fruit;

    switch (player1) {
        case '🍎':
            player1Fruit = 'Apple';
            player1 = '&#127822';
            break;
        case '🍌':
            player1Fruit = 'Banana';
            player1 = '&#127820';
            break;
        case '🍓':
            player1Fruit = 'Strawberry';
            player1 = '&#127827';
            break;
        case '🍉':
            player1Fruit = 'Watermelon';
            player1 = '&#127817';
            break;
    }

    switch (player2) {
        case '🍎':
            player2Fruit = 'Apple';
            player2 = '&#127822';
            break;
        case '🍌':
            player2Fruit = 'Banana';
            player2 = '&#127820';
            break;
        case '🍓':
            player2Fruit = 'Strawberry';
            player2 = '&#127827';
            break;
        case '🍉':
            player2Fruit = 'Watermelon';
            player2 = '&#127817';
            break;
    }

    // Whose turn is it? Display default start player's turn - player1
    let currentPlayer = player1;

    // player turn display
    let playerTurn = document.querySelector('#playerTurn');
    playerTurn.innerHTML = player1Fruit;

    // Display player icons on scoreboard
    document.querySelector('#icon1').innerHTML = player1;
    document.querySelector('#icon2').innerHTML = player2;

    // Squares in an array - squares becomes an index
    const squares = Array.from(document.querySelectorAll('.squares'));

    // Individual square - to push apple or banana into when clicked
    let square = ['', '', '', '', '', '', '', '', ''];

    // Listen to each square for user click
    for (let i = 0; i < squares.length; i++) {
        // When player clicks the square, they are current player
        squares[i].addEventListener('click', function (event) {
            // Check if the square is already selected
            if (squares[i].innerHTML !== '') {
                alert('Please select another square!');
                currentPlayer = currentPlayer;
                // Sound for alert
                const audioAlert = new Audio(
                    'https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/wrongans.wav?raw=true'
                );
                audioAlert.play();
            } else {
                // Add player image to index of each square
                squares[i].innerHTML = currentPlayer;
                // Sound for when player clicks
                const audioClick = new Audio(
                    'https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/playerclick.wav?raw=true'
                );
                audioClick.play();
                // Add player image to square position in array
                square[i] = currentPlayer;
                // Check the game - if all squares are filled
                checkGame();
                // Switch players
                switchPlayers();
            }
        });
    }

    //switch player function
    function switchPlayers() {
        // Switch players with conditional - if player1 then player2
        if (currentPlayer == player1) {
            currentPlayer = player2;
            // change turn display
            playerTurn.innerHTML = player2Fruit;
        } else if (currentPlayer == player2) {
            currentPlayer = player1;
            // Change turn display
            playerTurn.innerHTML = player1Fruit;
        }
    }

    // Each round result display
    const result = document.querySelector('.result');

    // Winnning scenarios of 3 in a row based on Squares array index - options in array
    const toWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Score
    let player1Score = 0;
    let player2Score = 0;

    // check if all squares are filled, win or tie
    function checkGame() {
        // If all filled && matches by order
        for (let i = 0; i < 8; i++) {
            let winScenarios = toWin[i];
            // check each toWin's nested array and first number becomes first square position
            let square1 = square[winScenarios[0]];
            // check each toWin's nested array and second number becomes second square position
            let square2 = square[winScenarios[1]];
            // check each toWin's nested array and third number becomes third square position
            let square3 = square[winScenarios[2]];
            // Win scenario - if square inputs are all the same
            if (square1 === square2 && square2 === square3 && square1 != '') {
                // Get result
                result.style.display = 'flex';
                // Sound for when player wins
                const audioWin = new Audio(
                    'https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/softwin.wav?raw=true'
                );
                audioWin.play();
                switch (currentPlayer) {
                    case player1:
                        document.querySelector('#whoWon').innerText =
                            player1Fruit + ' Wins';
                        document.querySelector('#iconWin').innerHTML = player1;
                        // add to PLAYER1 score if win
                        player1Score++;
                        document.querySelector('#player1Score').innerHTML =
                            player1Score;
                        break;
                    case player2:
                        document.querySelector('#whoWon').innerText =
                            player2Fruit + ' Wins';
                        document.querySelector('#iconWin').innerHTML = player2;
                        // add to PLAYER2 score if win
                        player2Score++;
                        document.querySelector('#player2Score').innerHTML =
                            player2Score;
                        break;
                }
                return;
            }
        }

        // If all filled and no match toWin == result of draw
        if (!square.includes('')) {
            // Get result
            result.style.display = 'flex';
            document.querySelector('#whoWon').innerHTML = "It's a tie";
            document.querySelector('#iconWin').innerHTML = '';
            // Sound for tie
            const audioTie = new Audio(
                'https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/softtie.wav?raw=true'
            );
            audioTie.play();
            return;
        }

        // if a square is empty - return to game
        if (square.includes('')) {
            return;
        }
    }

    // Round number
    let rounds = 1;

    // Play again & reset button
    const reset = document.querySelectorAll('.reset-button');
    for (let i = 0; i < reset.length; i++) {
        reset[i].addEventListener('click', function () {
            // empty all squares
            for (let j = 0; j < squares.length; j++) {
                squares[j].innerHTML = null;
            }
            // empty array of each square
            square = ['', '', '', '', '', '', '', '', ''];
            // reset first player to apple
            currentPlayer = player1;
            // To play again
            if (reset[i].innerText == 'Play Again') {
                // hide results
                result.style.display = 'none';
                // ensure end game is hidden if previously clicked
                document.querySelector('#endGame').classList.add('hidden');
                // add to round number
                rounds++;
                document.querySelector('#roundNum').innerHTML = rounds;
            }
            // To end game
            if (reset[i].innerText == 'End Game') {
                // hide results
                result.style.display = 'none';
                // calculate apple & banana score
                document.querySelector('#one-end').innerHTML = player1Score;
                document.querySelector('#two-end').innerHTML = player2Score;
                // based on number of rounds singular or plural
                if (rounds > 1) {
                    document.querySelector('#final-round').innerHTML =
                        rounds + ' rounds';
                } else {
                    document.querySelector('#final-round').innerHTML =
                        rounds + ' round';
                }
                // display end game message
                document.querySelector('#endGame').classList.remove('hidden');
                // based on results
                if (player1Score > player2Score) {
                    document.querySelector('#finalWin').innerHTML =
                        player1Fruit + ' Wins';
                    document.querySelector('#final1icon').innerHTML = player1;
                    document.querySelector('#final2icon').innerHTML = player2;
                    // Sound for when final winner
                    const audioWinner = new Audio(
                        'https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/finalwin.wav?raw=true'
                    );
                    audioWinner.play();
                } else if (player1Score === player2Score) {
                    document.querySelector('#finalWin').innerHTML =
                        "It's a tie";
                    document.querySelector('#final1icon').innerHTML = player1;
                    document.querySelector('#final2icon').innerHTML = player2;
                    // Sound for tie
                    const audioFinalTie = new Audio(
                        'https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/finaltie.wav?raw=true'
                    );
                    audioFinalTie.play();
                } else {
                    document.querySelector('#finalWin').innerHTML =
                        player2Fruit + ' Wins';
                    document.querySelector('#final1icon').innerHTML = player1;
                    document.querySelector('#final2icon').innerHTML = player2;
                    // Sound for when final winner
                    const audioWinner = new Audio(
                        'https://github.com/elywelly/tic-tac-toe/blob/main/Images-Audio/finalwin.wav?raw=true'
                    );
                    audioWinner.play();
                }
            }

            if (reset[i].innerText === 'Restart') {
                // reload page to reset everything
                window.location.href = window.location.href;
            }

            // to pick new fruits + Restart
            if (reset[i].innerText === 'Pick New Fruit') {
                // reload page to reset everything
                localStorage.clear();
                location.href = 'homepage.html';
            }
        });
    }
});
