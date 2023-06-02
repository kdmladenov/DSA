// https://leetcode.com/problems/target-sum/

const findTargetSumWays = (nums, target) => {
  const memo = new Map();

  const dfs = (i, remain) => {
    const key = `${i}-${remain}`;
    
    if (i < 0) return remain === 0 ? 1 : 0;
    if (memo.has(key)) return memo.get(key);

    const count = dfs(i - 1, remain + nums[i]) + dfs(i - 1, remain - nums[i]);

    memo.set(key, count);

    return count;
  };

  return dfs(nums.length - 1, target);
};
