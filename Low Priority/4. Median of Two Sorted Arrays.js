// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

const findMedianSortedArrays = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);

  let i = Math.floor((arr.length - 1) / 2);

  return arr.length % 2 === 0 ? (arr[i] + arr[i + 1]) / 2 : arr[i];
};
