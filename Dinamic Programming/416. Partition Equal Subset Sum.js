// https://leetcode.com/problems/partition-equal-subset-sum/description/

const canPartition = (nums) => {
  let sum = nums.reduce((a, b) => a + b, 0);

  if (sum % 2 !== 0) return false;

  let target = sum / 2;

  let dp = new Array(target + 1).fill(0);

  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = Math.max(dp[i], dp[i - num] + num); // complement + num
    }
  }
  return dp[target] === target;
};
