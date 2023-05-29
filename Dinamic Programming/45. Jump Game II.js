// https://leetcode.com/problems/jump-game-ii/description/

const jump = (nums) => {
  let prevMaxIdx = 0;
  let currMaxIdx = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) { // nums.length - 1 
    currMaxIdx = Math.max(currMaxIdx, i + nums[i]); 

    if (i === prevMaxIdx) {
      jumps++;
      prevMaxIdx = currMaxIdx;
    }
  }
  return jumps;
};

console.log(jump([2, 3, 1, 1, 4]));