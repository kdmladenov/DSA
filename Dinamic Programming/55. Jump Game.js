// https://leetcode.com/problems/jump-game/

const canJump = (nums) => {
    let lastValidIndex = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
      if(i + nums[i] >= lastValidIndex){
        lastValidIndex = i;
      };
    }
    return lastValidIndex === 0;
};

console.log(canJump([3, 2, 1, 0, 4]));