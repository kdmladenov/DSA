// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let midVal = nums[mid];

    if (midVal === target) return mid;

    // When dividing the rotated array into two halves, one must be sorted.
    // Check if the left side is sorted
    if (nums[left] <= midVal) {
      nums[left] <= target && target <= midVal ? (right = mid - 1) : (left = mid + 1);
    }
    // Otherwise, the right side is sorted
    else {
      midVal <= target && target <= nums[right] ? (left = mid + 1) : (right = mid - 1);
    }
  }

  return -1;
};
