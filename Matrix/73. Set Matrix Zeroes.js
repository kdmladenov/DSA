// https://leetcode.com/problems/set-matrix-zeroes/

const setZeroes = (matrix) => {
  let firstRowHasZero = false;
  let firstColHasZero = false;

  const rows = matrix.length;
  const cols = matrix[0].length;

  //check if first row has zero
  for (let i = 0; i < cols; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true;
      break;
    }
  }
  //check if first col has zero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  //check for zeros inside the matrix excluding first row and col
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0;
        matrix[r][0] = 0;
      }
    }
  }

  // zero out all (less first) rows and cols where there is zero
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (matrix[0][c] === 0 || matrix[r][0] === 0) matrix[r][c] = 0;
    }
  }

  // zero out first row
  if (firstRowHasZero) {
    for (let c = 0; c < cols; c++) matrix[0][c] = 0;
  }

  // zero out first col
  if (firstColHasZero) {
    for (let r = 0; r < rows; r++) matrix[r][0] = 0;
  }

  return matrix;
};
