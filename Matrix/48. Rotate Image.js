// https://leetcode.com/problems/rotate-image/

// https://www.youtube.com/watch?v=HehiIRa4geE

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

const rotate = (matrix) => {
  for (let r = 0; r < matrix.length; r++) {
    // 2) to flip by diagonal start second loop by c = r;
    for (let c = r; c < matrix[0].length; c++) {
      // flip values in place
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }
  // 3) reverse new rows
  for (let row of matrix) row.reverse();
};

// no need to return 
