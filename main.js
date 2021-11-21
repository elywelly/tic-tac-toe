// When page loads
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
            if (!squares[i].innerHTML == '') {
                alert('Please select another square!');
                currentPlayer = currentPlayer;
            } else {
                // Add player image to square position in array - innerHTML
                squares[i].innerHTML = currentPlayer;
                // Add player image to index of each square
                square[i] = currentPlayer;
                console.log(square);
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
                } else {
                    currentPlayer;
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
                console.log(square1);
                console.log(square2);
                console.log(square3);
                console.log(square);
                // Get result
                switch (currentPlayer) {
                    case apple:
                        result.classList.remove('hidden');
                        appleWin.classList.remove('hidden');
                        break;
                    case banana:
                        result.classList.remove('hidden');
                        bananaWin.classList.remove('hidden');
                        break;
                }
                // If all filled and no match toWin == result of draw
            } else if (
                !square.includes('') &&
                square1 != square2 &&
                square2 != square3
            ) {
                // Get result
                result.classList.remove('hidden');
                draw.classList.remove('hidden');
                return;
            }
        }

        // if a square is empty - return to game
        if (square.includes('')) {
            return;
        }
    }
});
