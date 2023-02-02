// https://leetcode.com/problems/house-robber/

const rob = (nums) => {
  if (nums.length < 2) return nums[0] || 0;

  let maxes = [nums[0], Math.max(nums[0], nums[1])]; // Arr of cumulative max sum

  for (let i = 2; i < nums.length; i++) {
    maxes[i] = Math.max(maxes[i - 1], maxes[i - 2] + nums[i]);
  }
  return maxes.pop();
};
