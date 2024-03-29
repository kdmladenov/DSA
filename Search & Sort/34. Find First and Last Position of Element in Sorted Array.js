// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const searchRange = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  // find the start
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    nums[mid] >= target ? (high = mid - 1) : (low = mid + 1);
  }

  if (nums[low] !== target) return [-1, -1]; // if target doesn't exist

  const start = low;

  // reset low and high
  low = 0;
  high = nums.length - 1;

  // find the end
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    nums[mid] <= target ? (low = mid + 1) : (high = mid - 1);
  }
  
  return [start, high];
};
