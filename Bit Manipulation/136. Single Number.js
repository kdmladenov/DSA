// https://leetcode.com/problems/single-number/solution/

// https://www.youtube.com/watch?v=lRGoZyjkZ3U

// Not in O(1) space. Should use bit manipulations for that.
const singleNumber = (nums) => {
  const map = {};

  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }

  for (let key in map) {
    if (map[key] === 1) return key;
  }
};


// With Bit Manipulation 
// time O(n)
// space O(1)
const singleNumberBit = (nums) => {
  let num = 0;
  for (let n of nums) {
    num ^= n;
  }
  return num;
}