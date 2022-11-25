// https://leetcode.com/problems/combination-sum-iv/

const combinationSum4 = (nums, target) => {
  const dp = Array(target + 1).fill(0);
  
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let n of nums) {
      if (i >= n) dp[i] += dp[i - n];
    }
  }
  return dp[target];
};
