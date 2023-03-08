// https://leetcode.com/problems/search-a-2d-matrix/description/
const searchMatrix = (matrix, target) => {
  let row = binarySearch(
    matrix.map((r) => r[0]),
    target
  );
  let col = binarySearch(matrix[row], target);

  return matrix?.[row]?.[col] == target;
};

// =[]
const binarySearch = (arr = [], value) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == value) return mid;

    arr[mid] > value ? (end = mid - 1) : (start = mid + 1);
  }
  return start - 1; // Important
};
