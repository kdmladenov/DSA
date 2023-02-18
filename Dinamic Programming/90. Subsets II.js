// https://leetcode.com/problems/subsets-ii/description/

const subsetsWithDup = (nums) => {
  nums.sort();
  const res = [];

  const permute = (arr, index) => {
    res.push(arr);

    for (let i = index; i < nums.length; i++) {
      if (i !== index && nums[i] === nums[i - 1]) continue;
      permute([...arr, nums[i]], i + 1);
    }
  };

  permute([], 0);

  return res;
};
