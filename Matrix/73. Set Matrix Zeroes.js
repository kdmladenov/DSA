// https://leetcode.com/problems/set-matrix-zeroes/

const setZeroes = (matrix) => {
  const map = new Set();
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) map.add([r, c]);
    }
  }

  for (let [row, col] of map) {
    for (let c = 0; c < cols; c++) matrix[row][c] = 0; // update row
    for (let r = 0; r < rows; r++) matrix[r][col] = 0; // update column
  }
};
