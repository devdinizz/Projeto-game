let currentPlayer = "X";
let gameTable = ['', '', '', '', '', '', '', '', ''];

const winConditions = [
  // horizontal wins
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical wins
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal wins
  [0, 4, 8],
  [2, 4, 6]
];

const cells = document.querySelectorAll("td");

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = cell.getAttribute('id');
  
  if (gameTable[cellIndex] !== '') return;
  
  gameTable[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer);
  
  if (checkWin()) {
    alert(`${currentPlayer} venceu!`);
    resetGame();
  } else if (checkDraw()) {
    alert('Empatou!');
    resetGame();
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  for (let condition of winConditions) {
    if (gameTable[condition[0]] !== ''
        && gameTable[condition[0]] === gameTable[condition[1]]
        && gameTable[condition[1]] === gameTable[condition[2]]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !gameTable.includes('');
}

function resetGame() {
  currentPlayer = "X";
  gameTable = ['', '', '', '', '', '', '', '', ''];
  for (let cell of cells) {
    cell.textContent = '';
    cell.classList.remove('X', 'O');
  }
}

for (let cell of cells) {
  cell.addEventListener('click', handleCellClick);
}

const resetButton = document.querySelector('#reset');
resetButton
