// https://leetcode.com/problems/shuffle-an-array/

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
    for (let num of this.nums) {
      const rand = Math.round(Math.random() * (len - 1) + 0);
      [this.num, this.nums[rand]] = [this.nums[rand], this.num];
    }
    return this.nums;
  }
}



