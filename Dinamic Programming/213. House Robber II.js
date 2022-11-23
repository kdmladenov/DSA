// https://leetcode.com/problems/house-robber-ii

const rob = (nums) => {
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];

  // robbing first house
  const dp = [nums[0], Math.max(nums[0], nums[1])];

  // robbing last house
  const dp2 = [0, nums[1]];

  for (let i = 2; i < len; i++) {
    dp[i] = i === len - 1 ? dp[i - 1] : Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
  }

  return Math.max(dp[len - 1], dp2[len - 1]);
};
