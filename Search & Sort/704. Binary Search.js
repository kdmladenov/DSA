// https://leetcode.com/problems/binary-search/description/

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) return mid;

    nums[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
};
