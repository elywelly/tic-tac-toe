window.addEventListener('load', function () {
    // Players
    const apple = '&#127822';
    const banana = '&#127820';
    const appleWord = document.getElementById('appleWord');
    const bananaWord = document.getElementById('bananaWord');

    // Whose turn is it? Display default start player's turn - apple
    appleWord.classList.remove('hidden');
    let currentPlayer = apple;

    // Squares in an array - squares becomes an index
    const squares = Array.from(document.querySelectorAll('.squares'));

    // Individual square - to push apple or banana into when clicked
    let square = ['', '', '', '', '', '', '', '', ''];

    // Listen to each square for user click
    for (let i = 0; i < squares.length; i++) {
        // When player clicks the square, they are current player
        squares[i].addEventListener('click', function () {
            // Check if the square is already selected
            if (squares[i].innerHTML !== '') {
                alert('Please select another square!');
                currentPlayer = currentPlayer;
            } else {
                // Add player image to square position in array - innerHTML
                squares[i].innerHTML = currentPlayer;
                // Add player image to index of each square
                square[i] = currentPlayer;
                console.log(square);
                console.log(currentPlayer);
                // Check the game - if all squares are filled
                checkGame();
                // Switch players with conditional - if apple then banana
                if (currentPlayer === apple) {
                    currentPlayer = banana;
                    // Change word to banana's turn
                    appleWord.classList.add('hidden');
                    bananaWord.classList.remove('hidden');
                } else if (currentPlayer === banana) {
                    currentPlayer = apple;
                    // Change word to apple's turn
                    bananaWord.classList.add('hidden');
                    appleWord.classList.remove('hidden');
                }
            }
        });
    }

    // Win or Draw result message
    const result = document.querySelector('#result');
    const appleWin = document.querySelector('#appleWin');
    const bananaWin = document.querySelector('#bananaWin');
    const draw = document.querySelector('#tieWord');

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
    let appleScore = 0;
    let bananaScore = 0;

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
                switch (currentPlayer) {
                    case apple:
                        result.classList.remove('hidden');
                        appleWin.classList.remove('hidden');
                        // add to apple score if win
                        appleScore++;
                        document.querySelector('#appleScore').innerHTML =
                            appleScore;
                        break;
                    case banana:
                        result.classList.remove('hidden');
                        bananaWin.classList.remove('hidden');
                        // add to banana score if win
                        bananaScore++;
                        document.querySelector('#bananaScore').innerHTML =
                            bananaScore;
                        break;
                }
                return;
            }
        }

        // If all filled and no match toWin == result of draw
        if (!square.includes('')) {
            // Get result
            result.classList.remove('hidden');
            draw.classList.remove('hidden');
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
            bananaWord.classList.add('hidden');
            appleWord.classList.remove('hidden');
            currentPlayer = apple;
            // To play again
            if (reset[i].innerText == 'Play Again') {
                // hide results
                result.classList.add('hidden');
                bananaWin.classList.add('hidden');
                appleWin.classList.add('hidden');
                draw.classList.add('hidden');
                // ensure end game is hidden if previously clicked
                document.querySelector('#endGame').classList.add('hidden');
                // add to round number
                rounds++;
                document.querySelector('#roundNum').innerHTML = rounds;
            }
            // To end game
            if (reset[i].innerText == 'End Game') {
                // hide results
                result.classList.add('hidden');
                bananaWin.classList.add('hidden');
                appleWin.classList.add('hidden');
                draw.classList.add('hidden');
                // calculate apple & banana score
                document.querySelector('#appleEnd').innerHTML = appleScore;
                document.querySelector('#bananaEnd').innerHTML = bananaScore;
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
                if (appleScore > bananaScore) {
                    document
                        .querySelector('#appleWon')
                        .classList.remove('hidden');
                } else if (appleScore === bananaScore) {
                    document
                        .querySelector('#tieEnd')
                        .classList.remove('hidden');
                } else {
                    document
                        .querySelector('#bananaWon')
                        .classList.remove('hidden');
                }
            }

            if (reset[i].innerText === 'Restart') {
                // reload page to reset everything
                window.location.href = window.location.href;
            }
        });
    }
});
