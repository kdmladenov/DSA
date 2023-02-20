// https://leetcode.com/problems/increasing-triplet-subsequence/

const increasingTriplet = (nums) => {
  let min1 = nums[0];
  let min2 = Infinity;
  
  for (let num of nums) {
    if (num > min2) return true;

    num > min1 ? (min2 = num) : (min1 = num);
  }
  return false;
};
