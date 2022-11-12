// https://leetcode.com/problems/intersection-of-two-arrays/

// Time: O(N + M);
// Space: O(N + M);

const intersection = (nums1, nums2) => {
  let res = [];
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  for (let num of set1) {
    if (set2.has(num)) res.push(num);
  }

  return res;
};
