// https://leetcode.com/problems/search-a-2d-matrix-ii/description/

const searchMatrix = (matrix, target) => {
  if (matrix.length === 0) return false;

  let r = 0;
  let c = matrix[r].length - 1;

  while (r < matrix.length && c >= 0) {
    if (matrix[r][c] === target) return true;
    
    matrix[r][c] > target ? c-- : r++;
  }
  return false;
};
// [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ];
