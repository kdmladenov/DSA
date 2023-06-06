// https://leetcode.com/problems/move-zeroes/

const moveZeroes = (nums) => {
  let lastZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastZeroIndex], nums[i]] = [nums[i], nums[lastZeroIndex]];
      lastZeroIndex++;
    }
  }
};
