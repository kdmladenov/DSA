// https://leetcode.com/problems/subsets/description/

const subsets = (nums) => {
  let res = [];

  const dfs = (arr, index) => {
    res.push(arr);

    for (let i = index; i < nums.length; i++) {
      dfs([...arr, nums[i]], i + 1);
    }
  };

  dfs([], 0);

  return res;
};
