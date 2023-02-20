// https://leetcode.com/problems/jump-game-ii/description/

const jump = (nums) => {
  let left = 0;
  let right = 0;// Keep track of the farthest jump
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    right = Math.max(right, i + nums[i]); 

    // When we get to the index where we had our previous farthest jump (left), jumps + 1
    if (i === left) {
      jumps++;
      left = right;
    }
  }
  return jumps;
};

console.log(jump([2, 3, 1, 1, 4]));