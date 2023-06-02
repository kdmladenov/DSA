// https://leetcode.com/problems/combination-sum-iv/

const combinationSum4 = (nums, target) => {
  const res = new Array(target + 1).fill(0);

  res[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i >= num) res[i] += res[i - num];
    }
  }
  return res.pop();
};


console.log(combinationSum4([1, 2, 3],4));