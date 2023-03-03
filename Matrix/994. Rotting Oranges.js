// https://leetcode.com/problems/rotting-oranges/description/

const orangesRotting = (grid) => {
  let minutes = 2;
  let rows = grid.length;
  let cols = grid[0].length;

  const mark = (r, c, mins) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      grid[r][c] === 0 ||
      (2 <= grid[r][c] && grid[r][c] < mins) // Important
    ) {
      return;
    }

    grid[r][c] = mins;

    mark(r + 1, c, mins + 1);
    mark(r - 1, c, mins + 1);
    mark(r, c + 1, mins + 1);
    mark(r, c - 1, mins + 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) mark(r, c, minutes);
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) return -1;
      minutes = Math.max(minutes, grid[r][c]);
    }
  }

  return minutes - 2;
};
