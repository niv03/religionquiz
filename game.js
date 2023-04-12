// Set up the board
const boardSize = 19;
const board = [];
for (let row = 0; row < boardSize; row++) {
  const boardRow = [];
  for (let col = 0; col < boardSize; col++) {
    boardRow.push(''); // Empty cell
  }
  board.push(boardRow);
}

// Set up the players
const BLACK = 'black';
const WHITE = 'white';
let currentPlayer = BLACK;

// Handle player turns
function handleClick(event) {
  const cell = event.target;
  const row = cell.getAttribute('data-row');
  const col = cell.getAttribute('data-col');
  if (isValidMove(row, col)) {
    placeStone(row, col);
    switchPlayer();
  }
}

// Check if a move is valid
function isValidMove(row, col) {
  // Check if the cell is empty
  if (board[row][col] !== '') {
    return false;
  }
  // Check if the move would cause self-capture
  const clonedBoard = cloneBoard(board);
  clonedBoard[row][col] = currentPlayer;
  const capturedStones = getCapturedStones(clonedBoard, row, col);
  if (capturedStones.length === 0 && wouldBeSelfCapture(clonedBoard, row, col)) {
    return false;
  }
  // Check if the move would cause ko
  if (isKo(clonedBoard)) {
    return false;
  }
  return true;
}

// Place a stone on the board
function placeStone(row, col) {
  board[row][col] = currentPlayer;
  const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
  cell.classList.add(`stone-${currentPlayer}`);
  const capturedStones = getCapturedStones(board, row, col);
  capturedStones.forEach(stone => {
    board[stone.row][stone.col] = '';
    const cell = document.querySelector(`[data-row="${stone.row}"][data-col="${stone.col}"]`);
    cell.classList.remove(`stone-${stone.color}`);
  });
}

// Switch to the other player's turn
function switchPlayer() {
  currentPlayer = (currentPlayer === BLACK) ? WHITE : BLACK;
}

// Clone the board to simulate potential moves
function cloneBoard(board) {
  return board.map(row => [...row]);
}

// Check if a move would cause self-capture
function wouldBeSelfCapture(board, row, col) {
  const capturedStones = getCapturedStones(board, row, col);
  return capturedStones.every(stone => board[stone.row][stone.col] === currentPlayer);
}

// Check if the board is in a ko position
function isKo(board) {
  // TODO: Implement ko rule
  return false;
}

// Get all the stones that would be captured by a move
function getCapturedStones(board, row, col) {
  const capturedStones = [];
  const oppositePlayer = (currentPlayer === BLACK) ? WHITE : BLACK;
  const checkCapturedStone = (r, c) => {
    if (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] === oppositePlayer) {
      const capturedGroup = getGroup(board, r, c);
      if (capturedGroup.length === 1 && !capturedStones.some(stone => stone.row === r && stone.col === c)) {
        capturedStones.push(capturedGroup[0]);
      }
    }
  };
  checkCapturedStone(row - 1, col);
  checkCapturedStone(row + 1, col);
  checkCapturedStone(row, col - 1);
  checkCapturedStone(row, col + 1);
  return capturedStones;
}

// Get all the stones in the same group as a given stone
function getGroup(board, row, col) {
  const visited = new Set();
  const stonesToCheck = [{ row, col }];
  const stonesInGroup = [];
  while (stonesToCheck.length > 0) {
    const stone = stonesToCheck.pop();
    if (!visited.has(`${stone.row},${stone.col}`)) {
      visited.add(`${stone.row},${stone.col}`);
      stonesInGroup.push({ row: stone.row, col: stone.col, color: board[stone.row][stone.col] });
      getAdjacentStones(board, stone.row, stone.col)
        .filter(adjStone => adjStone.color === board[stone.row][stone.col])
        .forEach(adjStone => stonesToCheck.push({ row: adjStone.row, col: adjStone.col }));
    }
  }
  return stonesInGroup;
}

// Get all the stones adjacent to a given stone
function getAdjacentStones(board, row, col) {
  const adjacentStones = [];
  if (row > 0) {
    adjacentStones.push({ row: row - 1, col, color: board[row - 1][col] });
  }
  if (row < boardSize - 1) {
    adjacentStones.push({ row: row + 1, col, color: board[row + 1][col] });
  }
  if (col > 0) {
    adjacentStones.push({ row, col: col - 1, color: board[row][col - 1] });
  }
  if (col < boardSize - 1) {
    adjacentStones.push({ row, col: col + 1, color: board[row][col + 1] });
  }
  return adjacentStones;
}

// Render the board
function renderBoard() {
  const boardContainer = document.getElementById('board-container');
  for (let row = 0; row < boardSize; row++) {
    const boardRow = document.createElement('div');
    boardRow.classList.add('board-row');
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-row', row);
      cell.setAttribute('data-col', col);
      cell.addEventListener('click', handleClick);
      boardRow.appendChild(cell);
    }
    boardContainer.appendChild(boardRow);
  }
}

// Initialize the game
renderBoard();

