// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = (nums, t) => {
  let left = 0;
  let right = nums.length - 1;
  // Important use <= or >= everywhere
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === t) return mid;

    // When dividing the rotated array into two halves, one must be sorted.
    // <= or => below !!!

    if (nums[left] <= nums[mid]) {
      nums[left] <= t && t <= nums[mid] ? (right = mid - 1) : (left = mid + 1); //left side is sorted
    } else {
      nums[mid] <= t && t <= nums[right] ? (left = mid + 1) : (right = mid - 1); //right side is sorted
    }
  }

  return -1;
};
