// https://leetcode.com/problems/surrounded-regions/description/

const solve = (board) => {
  let rows = board.length;
  let cols = board[0].length;

  if (!rows) return [];

  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] === 'X' || board[r][c] === 'V') {
      return;
    }

    board[r][c] = 'V';

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let isOnBorder = r === 0 || r === rows - 1 || c === 0 || c === cols - 1;

      if (board[r][c] === 'O' && isOnBorder) dfs(r, c);
    }
  }

  // remove 'O's not on the border
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      board[r][c] = board[r][c] === 'V' ? 'O' : 'X';
    }
  }

  return board;
};

// [
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'O', 'X'],
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'X']
// ];

// [
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'X', 'X']
// ];
