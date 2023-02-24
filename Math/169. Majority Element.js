// https://leetcode.com/problems/majority-element/

// sort the array and the middle is the majority
const majorityElement = (nums) => {
  nums.sort((a, b) => a - b);
  
  return nums[Math.floor(nums.length / 2)];
};
