// https://leetcode.com/problems/intersection-of-two-arrays-ii/


const intersect = (nums1, nums2) => {
  let res = [];
  let map = {};

  // to make the map
  for (let i = 0; i < nums1.length; i++) {
    let curr = nums1[i];

    map[curr] = map[curr] + 1 || 1;
  }

  // to decrease the map count if found
  for (let i = 0; i < nums2.length; i++) {
    let curr = nums2[i];

    if (map[curr]) {
      res.push(curr);
      map[curr] -= 1;
    }
  }

  return res;
};
