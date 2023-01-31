// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // When dividing the rotated array into two halves, one must be sorted.

    if (nums[left] <= nums[mid]) {
      nums[left] <= target && target <= nums[mid] ? (right = mid - 1) : (left = mid + 1); //left side is sorted
    } else {
      nums[mid] <= target && target <= nums[right] ? (left = mid + 1) : (right = mid - 1); //right side is sorted
    }
  }

  return -1;
};
