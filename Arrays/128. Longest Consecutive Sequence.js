// https://leetcode.com/problems/longest-consecutive-sequence/

const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let temp = 1;
  let max = 1;

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let prev = nums[i - 1];

    if (curr === prev + 1) {
      temp += 1;
      max = Math.max(max, temp);
    } else if (curr === prev) continue;
    else temp = 1;
  }
  return max;
};
