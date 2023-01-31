// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = (nums) => {
  const temp = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    temp[i] = nums[i] + Math.max(0, temp[i - 1]);
    max = Math.max(max, temp[i]);
  }

  return max;
};

