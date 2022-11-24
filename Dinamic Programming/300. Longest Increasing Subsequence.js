// https://leetcode.com/problems/longest-increasing-subsequence/


const binarySearchPosition = (arr, target, end) => {
  let start = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) return mid;
    target < arr[mid] ? (end = mid - 1) : (start = mid + 1);
  }
  return start;
};

const lengthOfLIS = (nums) => {

  if (nums === null || nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let arr = new Array(nums.length).fill(Infinity);

  for (let i = 0; i < nums.length; i++) {
    let position = binarySearchPosition(arr, nums[i], i);
    arr[position] = nums[i];
  }

  // backwards !!
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== Infinity) return i + 1;
  }

  return 0;
};
