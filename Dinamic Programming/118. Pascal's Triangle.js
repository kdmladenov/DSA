// https://leetcode.com/problems/pascals-triangle/

const generate = (numRows) => {
  const pascal = [];
  for (let r = 0; r < numRows; r++) {
    pascal[r] = [];
    pascal[r][0] = 1;
    pascal[r][r] = 1;

    for (let c = 1; c < r; c++) {
      pascal[r][c] = pascal[r - 1][c - 1] + pascal[r - 1][c];
    }
  }
  return pascal;
};


console.log(generate(5))