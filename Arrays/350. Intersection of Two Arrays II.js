// https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (nums1, nums2) => {
  let res = [];
  let map = {};

  for (let num1 of nums1) {
    map[num1] = map[num1] + 1 || 1;
  }

  // to decrease the map count if found
  for (let num2 of nums2) {
    if (map[num2]) {
      res.push(num2);
      map[num2]--;
    }
  }

  return res;
};