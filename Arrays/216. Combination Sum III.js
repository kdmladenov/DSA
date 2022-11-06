// https://leetcode.com/problems/combination-sum-iii/

// https://www.youtube.com/watch?v=Vz23n7y1Y8U&ab_channel=AndyGala

const combinationSum3 = (candidates, target) => {
  const result = [];
  candidates.sort((a, b) => a - b);

  const dfs = (i, candidates, target, slate) => {
    // backtracking case
    if (target < 0) return;

    // base case
    if (target === 0) {
      result.push([...slate]);
    }

    // dfs recursive case
    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j]);
      dfs(j, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };
  dfs(0, candidates, target, []);
  return result;
};
