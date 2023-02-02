// https://leetcode.com/problems/combination-sum/

const combinationSum = (candidates, target) => {
  const result = [];

  const dfs = (start, remain, arr) => {
    if (remain < 0) return;
    if (remain === 0) result.push([...arr]);

    for (let i = start; i < candidates.length; i++) {
      dfs(i, remain - candidates[i], [...arr, candidates[i]]);
    }
  };
  dfs(0, target, []);
  return result;
};

