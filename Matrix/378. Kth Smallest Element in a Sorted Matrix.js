// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/

const kthSmallest = (matrix, k) => {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let start = matrix[0][0];
  let end = matrix[rows - 1][cols - 1];

  while (start < end) {
    let mid = Math.floor((end + start) / 2);

    let count = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (matrix[r][c] <= mid) count++;
        else break;
      }
    }
    count < k ? (start = mid + 1) : (end = mid);
  }

  return start;
};
