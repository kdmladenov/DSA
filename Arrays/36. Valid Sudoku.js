// https://leetcode.com/problems/valid-sudoku/

const isValidSudoku = (board) => {
  const map = {};

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      const val = board[r][c];

      if (val === '.') continue;

      const boxIndex = 3 * Math.floor(r / 3) + Math.floor(c / 3); //formula

      const row = `row: ${r} value: ${val}`;
      const col = `col: ${c} value: ${val}`;
      const box = `box: ${boxIndex} value: ${val}`;

      if (map[row] || map[col] || map[box]) return false;

      map[row] = map[col] = map[box] = true;
    }
  }

  return true;
};