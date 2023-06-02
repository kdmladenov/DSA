// https://leetcode.com/problems/longest-increasing-subsequence/

const lengthOfLIS = (nums) => {
  let res = [nums[0]];
  for (let num of nums) {
    num > res[res.length - 1] ? res.push(num) : (res[res.findIndex((val) => val >= num)] = num);
  }
  return res.length;
};

