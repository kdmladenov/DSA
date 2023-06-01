// https://leetcode.com/problems/unique-paths/

const uniquePaths = (r, c) => {
  const matrix = [new Array(c).fill(1), ...new Array(r - 1).fill([1])]; // first rows and cols of 1s

  for (let row = 1; row < r; row++) {
    for (let col = 1; col < c; col++) {
      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
    }
  }
  return matrix[r - 1][c - 1];
};
