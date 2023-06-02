// https://leetcode.com/problems/combination-sum-iii/

const combinationSum3 = (k, n) => {
  const result = [];

  const dfs = (arr, remain, start) => {
    if (arr.length > k || remain < 0) return;
    if (arr.length === k && remain === 0) result.push([...arr]);

    for (let num = start; num <= 9; num++) {
      dfs([...arr, num], remain - num, num + 1);
    }
  };

  dfs([], n, 1);

  return result;
};