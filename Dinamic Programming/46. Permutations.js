// https://leetcode.com/problems/permutations/description/

const permute = (nums, temp = [], res = []) => {
  if (nums.length === 0) res.push(temp);

  for (let i = 0; i < nums.length; i++) {
    permute(
      nums.filter((_, index) => index !== i),
      [...temp, nums[i]],
      res
    );
  }

  return res;
};
