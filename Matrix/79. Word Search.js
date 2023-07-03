// https://leetcode.com/problems/word-search/

const exist = (board, word) => {
  let found = false;
  let rows = board.length;
  let cols = board[0].length;

  const dfs = (row, col, index) => {
    if (index === word.length) found = true; // Important

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index] ||
      found
    ) {
      return;
    }

    let temp = board[row][col];
    board[row][col] = ''; // Important

    dfs(row + 1, col, index + 1);
    dfs(row - 1, col, index + 1);
    dfs(row, col + 1, index + 1);
    dfs(row, col - 1, index + 1);

    board[row][col] = temp;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === word[0]) dfs(r, c, 0);
    }
  }

  return found;
};
