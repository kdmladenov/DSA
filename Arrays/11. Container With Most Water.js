// https://leetcode.com/problems/container-with-most-water/

const maxArea = (arr) => {
  let maxArea = 0;
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    let currentArea = Math.min(arr[startIndex], arr[endIndex]) * (endIndex - startIndex);

    maxArea = Math.max(currentArea, maxArea);

    if (arr[startIndex] > arr[endIndex]) {
      endIndex--;
    } else {
      startIndex++;
    }
  }

  return maxArea;
};
