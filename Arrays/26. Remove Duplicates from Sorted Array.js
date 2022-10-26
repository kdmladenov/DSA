// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// https://www.youtube.com/watch?v=IjFniSXmdLE

const removeDuplicates = (nums) => {
  if (!nums.length) return 0;

  let slow = 0;
  
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      // use the current array as a writing board - no need to remove
      slow++;
      nums[slow] = nums[fast]
    }
  }
  // To compensate for the 0 index
  return slow + 1;
};
