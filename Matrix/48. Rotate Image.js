// https://leetcode.com/problems/rotate-image/

// Important:  c = r in second for
const rotate = (matrix) => {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[0].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }
  
  for (let row of matrix) row.reverse();
};

`1)
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
2) flip by diagonal start second loop by c = r;
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];
3) reverse new rows
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
];`;
