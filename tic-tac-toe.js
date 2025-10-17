document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div'); 
    squares.forEach(square => {
      square.classList.add('square'); 
    });

    const gameState = ['', '', '', '', '', '', '', '', ''];
    let playerOne = 'X';
    squares.forEach((square, index) => {    
        square.addEventListener('click', () => {
            if (gameState[index] !== '') return;
        square.textContent = playerOne;
        square.classList.add(playerOne);
        gameState[index] = playerOne;

        if (playerOne === 'X') {
            playerOne = 'O';
          } else {
            playerOne = 'X';
          }
    });
  });
  
  });