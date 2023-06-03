// https://leetcode.com/problems/merge-sorted-array/

const merge = (nums1, m, nums2, n) => {
  let end1 = m - 1;
  let end2 = n - 1;
  let endAll = m + n - 1;

  while (end2 >= 0) {
    let val1 = nums1[end1];
    let val2 = nums2[end2];

    nums1[endAll] = val1 >= val2 ? val1 : val2;

    val1 >= val2 ? end1-- : end2--;

    endAll--;
  }
};
