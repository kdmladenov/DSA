// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) return nums[0];

  // still sorted arr
  if (nums[left] < nums[right]) return nums[0];

  // binary search
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let midVal = nums[mid];
    let leftMid = nums[mid - 1];
    let rightMid = nums[mid + 1];

    //inflection point eg [3,4, 5,1 ,2]
    if (midVal > rightMid) return rightMid;
    if (leftMid > midVal) return midVal;

    // eg [3,4, 5,1 ,2]
    midVal > nums[left] ? (left = mid + 1) : (right = mid - 1);
  }
};