// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = (nums) => {
  if (!nums.length) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++; // Important to be on top
      nums[slow] = nums[fast]; 
    }
  }
  return slow + 1; 
};