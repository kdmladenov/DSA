// https://leetcode.com/problems/largest-number/description/

const largestNumber = (nums) => {
  let sorted = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join(''); // decreasing order

  return sorted == 0 ? '0' : sorted;
};
