// https://leetcode.com/problems/merge-sorted-array/

// const merge = (nums1, m, nums2, n) => {
//   let firstIndx = m - 1;
//   let secondIndx = n - 1;
//   let endIndx = m + n - 1;

//   while (secondIndx >= 0) {
//     let fVal = nums1[firstIndx];
//     let sVal = nums2[secondIndx];

//     if (fVal > sVal) {
//       nums1[endIndx] = fVal;
//       endIndx--;
//       firstIndx--;
//     } else {
//       nums1[endIndx] = sVal;
//       endIndx--;
//       secondIndx--;
//     }
//   }
// };

const merge = (nums1, m, nums2, n) => {
  let firstEnd = m - 1;
  let secondEnd = n - 1;
  let finalEnd = m + n - 1;

  while (secondEnd >= 0) {
    let firstEndVal = nums1[firstEnd];
    let secondEndVal = nums2[secondEnd];

    if(firstEndVal >= secondEndVal){
      nums1[finalEnd] = firstEndVal;
      firstEnd--;
      finalEnd--;
    } else {
      nums1[finalEnd] = secondEndVal;
      secondEnd--;
      finalEnd--;
    }
  }
};
