// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
    if (nums[left] + nums[right] === target) return [left + 1, right + 1];

    nums[left] + nums[right] > target ? right-- : left++;
  }
};
