// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// https://www.youtube.com/watch?v=IjFniSXmdLE

const removeDuplicates = (nums) => {
  if (!nums.length) return 0;

  let slowIndex = 0;
  
  for (let fastIndex = 1; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== nums[slowIndex]) {
      // use the current array as a writing board - no need to remove
      slowIndex++;
      nums[slowIndex] = nums[fastIndex]
    }
  }
  // To compensate for the 0 index
  return slowIndex + 1;
};
