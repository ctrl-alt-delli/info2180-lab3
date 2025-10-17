document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div'); 
    const status = document.getElementById('status');
    const Btn = document.querySelector('.btn');

    gameActive = true;
    squares.forEach(square => {
      square.classList.add('square'); 
    });
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]  
      ];

    function winCheck() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameState[a] !== '' && 
            gameState[a] === gameState[b] && 
            gameState[b] === gameState[c]) {
            status.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
            status.classList.add('you-won');
            gameActive = false;
            return true;
        }
    }
    return false; 
}
    function reset() {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
          });

          for (let i = 0; i < gameState.length; i++) {
            gameState[i] = '';
          }
          currentPlayer = 'X';
          gameActive = true;
        
          status.textContent = 'Move your mouse over a square and click to play an X or an O.';
          status.classList.remove('you-won');
    }
    const gameState = ['', '', '', '', '', '', '', '', ''];
    let playerOne = 'X';
    squares.forEach((square, index) => {    
        square.addEventListener('click', () => {
            if (!gameActive || gameState[index] !== '') return;
        square.textContent = playerOne;
        square.classList.add(playerOne);
        gameState[index] = playerOne;
        if (winCheck()) {
            return;
        }
        if (playerOne === 'X') {
            playerOne = 'O';
          } else {
            playerOne = 'X';
          }
    });
  });

  squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        if (gameActive) {
            square.classList.add('hover'); 
        }
    });

    square.addEventListener('mouseleave', () => {
        square.classList.remove('hover'); 
    });
});

    Btn.addEventListener('click', () => {
        reset() });
  
  });