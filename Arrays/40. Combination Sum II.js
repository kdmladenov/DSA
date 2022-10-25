https://leetcode.com/problems/combination-sum-ii/

https://www.youtube.com/watch?v=Atr_z-JrMSI

const combinationSum2 = (candidates, target) => {
  const result = [];
  candidates.sort((a, b) => a - b);

  const dfs = (i, candidates, target, slate) => {
    // backtracking case
    if (target < 0) return;

    // base case
    if (target === 0) {
      result.push(slate.slice());
      return;
    }

    // dfs recursive case
    for (let j = i; j < candidates.length; j++) {
      if (i !== j && candidates[j] === candidates[j-1]) continue;
      slate.push(candidates[j]);
      dfs(j + 1, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };
  dfs(0, candidates, target, []);
  return result;
};
