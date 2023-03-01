// https://leetcode.com/problems/number-of-islands/

const numIslands = (grid) => {
  let count = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  const sink = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === '0') return;

    grid[row][col] = '0';

    sink(row + 1, col);
    sink(row - 1, col);
    sink(row, col + 1);
    sink(row, col - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++;
        sink(r, c);
      }
    }
  }

  return count;
};