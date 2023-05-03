// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

// Hard

// const findMedianSortedArrays = (nums1, nums2) => {
//   const arr = [...nums1, ...nums2].sort((a, b) => a - b);

//   let i = Math.floor((arr.length - 1) / 2);

//   return arr.length % 2 === 0 ? (arr[i] + arr[i + 1]) / 2 : arr[i];
// };

// O(log(m + n));
const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  let len1 = nums1.length;
  let len2 = nums2.length;
  let l = 0;
  let r = len1;

  while (l <= r) {
    const partX = (r + l) >> 1;
    const partY = ((len1 + len2 + 1) >> 1) - partX;

    const maxX = partX == 0 ? -Infinity : nums1[partX - 1];
    const maxY = partY == 0 ? -Infinity : nums2[partY - 1];

    const minX = partX == len1 ? Infinity : nums1[partX];
    const minY = partY == len2 ? Infinity : nums2[partY];

    if (maxX <= minY && maxY <= minX) {
      const lowMax = Math.max(maxX, maxY);
      return (len1 + len2) % 2 === 0 ? (lowMax + Math.min(minX, minY)) / 2 : lowMax;
    } else if (maxX < minY) l = partX + 1;
    else r = partX - 1;
  }
};
