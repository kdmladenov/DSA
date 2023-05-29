// https://leetcode.com/problems/combination-sum-ii/

const combinationSum2 = (candidates, target) => {
  const result = [];
  candidates.sort((a, b) => a - b); // Important

  const dfs = (start, remain, arr) => {
    if (remain < 0) return;
    if (remain === 0) result.push([...arr]);

    for (let i = start; i < candidates.length; i++) {
      if (start !== i && candidates[i] === candidates[i - 1]) continue; // Important start !== i

      dfs(i + 1, remain - candidates[i], [...arr, candidates[i]]);
    }
  };
  dfs(0, target, []);
  return result;
};
