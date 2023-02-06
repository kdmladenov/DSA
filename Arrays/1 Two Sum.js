// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  const pastValues = {};

  for (let i = 0; i < nums.length; i++) {
    const remainderIndex = pastValues[target - nums[i]];

    if (remainderIndex !== undefined) return [remainderIndex, i];
    else pastValues[nums[i]] = i;
  }
};
