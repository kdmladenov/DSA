// https://leetcode.com/problems/increasing-triplet-subsequence/

const increasingTriplet = (nums) => {
  let first = nums[0];
  let second = Infinity;

  for (let third of nums) {
    if (third > second) return true;

    first >= third ? (first = third) : (second = third);
  }
  return false;
};
