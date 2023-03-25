// https://leetcode.com/problems/wiggle-sort-ii/

const wiggleSort = (nums) => {
  nums.sort((b, a) => b - a);

  let mid = Math.floor(nums.length / 2);

  mid += nums.length % 2 ? 1 : 0;

  let even = nums.slice(0, mid);
  let odd = nums.slice(mid);

  for (let i = 0; i < nums.length; i++) {
    nums[i] = i % 2 == 0 ? even.pop() : odd.pop();
  }
};
