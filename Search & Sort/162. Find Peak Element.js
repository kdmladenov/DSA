// https://leetcode.com/problems/find-peak-element/

const findPeakElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);

    nums[mid] > nums[mid + 1] ? (right = mid) : (left = mid + 1);
  }

  return left;
};
