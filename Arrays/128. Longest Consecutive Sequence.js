// https://leetcode.com/problems/longest-consecutive-sequence/

const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let maxConsecutive = 1;
  let currentConsecutive = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      currentConsecutive += 1;
      maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
    } else if (nums[i] - nums[i - 1] === 0) continue;
    else currentConsecutive = 1;
  }

  return maxConsecutive;
};