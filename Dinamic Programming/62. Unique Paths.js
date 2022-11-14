// https://leetcode.com/problems/unique-paths/

const uniquePaths = (r, c) => {
  const matrix = [];

  // set rows a arrays
  for (let row = 0; row < r; row++) {
    matrix.push([]);
  }

  // fill 1st col with 1s
  for (let row = 0; row < r; row++) {
    matrix[row][0] = 1;
  }

  // fill 1st row with 1s
  for (let col = 0; col < c; col++) {
    matrix[0][col] = 1;
  }

  // cell value === cell up + cell left
  for (let row = 1; row < r; row++) {
    for (let col = 1; col < c; col++) {
      matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
    }
  }

  return matrix[r - 1][c - 1];
};

// console.log(uniquePaths(7, 7));
