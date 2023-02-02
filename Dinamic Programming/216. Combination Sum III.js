// https://leetcode.com/problems/combination-sum-iii/

const combinationSum3 = (k, n) => {
  const result = [];

  const dfs = (arr, sum, start) => {
    if (arr.length > k || sum > n) return;
    if (arr.length === k && sum === n) result.push([...arr]);

    for (let i = start; i <= 9; i++) {
      dfs([...arr, i], sum + i, i + 1);
    }
  };

  dfs([], 0, 1);

  return result;
};
