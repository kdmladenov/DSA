// https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (nums1, nums2) => {
  let res = [];
  let map = {};

  for (let num1 of nums1) map[num1] = map[num1] + 1 || 1;

  for (let num of nums2) {
    if (map[num]) {
      res.push(num);
      map[num]--;
    }
  }

  return res;
};
