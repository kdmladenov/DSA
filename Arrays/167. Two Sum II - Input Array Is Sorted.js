// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// same as LC 1
const twoSum = (nums, target) => {
  const pastValues = {};

  for (let i = 0; i < nums.length; i++) {
    const remainderIndex = pastValues[target - nums[i]];

    if (remainderIndex !== undefined)
      return [remainderIndex + 1, i + 1]; // add 1 to indexes by definition
    else pastValues[nums[i]] = i;
  }
};
