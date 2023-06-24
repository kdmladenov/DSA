// https://leetcode.com/problems/spiral-matrix/

const spiralOrder = (matrix) => {
  const res = [];
  
  while (matrix.length) {
    res.push(...matrix.shift());

    for (const row of matrix) {
      if (row.length) res.push(row.pop()); // Important
      row.reverse();
    }
    matrix.reverse();
  }
  return res;
};
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]

// [1,2,3,6,9,8,7,4,5]