// When submit is hit
document.querySelector('#play').addEventListener('click', function () {
    // get player1 choice
    const player1 = document.querySelector(
        'input[name="player1"]:checked'
    ).value;
    // get player2 choice
    const player2 = document.querySelector(
        'input[name="player2"]:checked'
    ).value;
    if (player1 == player2) {
        alert('Please pick different fruits');
    } else {
        // session storage
        localStorage.setItem('player1', player1);
        localStorage.setItem('player2', player2);
        // new page
        location.href = 'index.html';
    }
});
