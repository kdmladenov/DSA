// https://leetcode.com/problems/container-with-most-water/

const maxArea = (arr) => {
  let maxArea = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let currentArea = Math.min(arr[start], arr[end]) * (end - start);

    maxArea = Math.max(currentArea, maxArea);

    arr[start] > arr[end] ? end-- : start++;
  }

  return maxArea;
};