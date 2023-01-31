// https://leetcode.com/problems/valid-sudoku/

const isValidSudoku = (board) => {
  const map = {};

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board[0].length; colIndex++) {
      const val = board[rowIndex][colIndex];

      if (val === '.') continue;

      const boxIndex = 3 * Math.floor(rowIndex / 3) + Math.floor(colIndex / 3); //formula

      const row = `row: ${rowIndex}: value: ${val}`;
      const col = `col: ${colIndex}: value: ${val}`;
      const box = `box: ${boxIndex}: value: ${val}`;

      if (map[row] || map[col] || map[box]) return false;

      map[row] = map[col] = map[box] = true;
    }
  }

  return true;
};
