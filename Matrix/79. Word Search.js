// https://leetcode.com/problems/word-search/

const exist = (board, word) => {
  let found = false;

  let rows = board.length;
  let cols = board[0].length;

  // Running the DFS for every cell in the board
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (board[r][c] === word[0]) dfs(r, c, 0, word, rows, cols);
    }
  }

  return found;
};

// DFS helper fx();
function dfs(row, col, count, word, rows, cols) {
  if (count === word.length) {
    found = true;
    return;
  }

  // check if valid row and col, if the letter is the same and if not found already
  if (
    row < 0 ||
    row >= rows ||
    col < 0 ||
    col >= cols ||
    board[row][col] !== word[count] ||
    found
  ) {
    return;
  }

  const temp = board[row][col];
  board[row][col] = '';

  dfs(row + 1, col, count + 1, word, rows, cols);
  dfs(row - 1, col, count + 1, word, rows, cols);
  dfs(row, col + 1, count + 1, word, rows, cols);
  dfs(row, col - 1, count + 1, word, rows, cols);

  board[row][col] = temp;
}
