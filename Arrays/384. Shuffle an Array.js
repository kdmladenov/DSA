// https://leetcode.com/problems/shuffle-an-array/

// no video

class Solution {
  constructor(nums) {
    this.cache = new Array(...nums);
    this.nums = nums;
  }
  reset() {
    return this.cache;
  }
  shuffle() {
    const len = this.nums.length;
    for (let i = 0; i < len; i++) {
      const rand = Math.round(Math.random() * (len - 1) + 0);
      [this.nums[i], this.nums[rand]] = [this.nums[rand], this.nums[i]];
    }
    return this.nums;
  }
}



