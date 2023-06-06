// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  // still sorted arr or one item arr
  if (nums.length === 1 || nums[left] < nums[right]) return nums[0];

  while (right > left) {
    let mid = Math.floor((left + right) / 2);

    //inflection point eg [3,4, 5,1 ,2]
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid - 1] > nums[mid]) return nums[mid];

    nums[left] < nums[mid] ? (left = mid + 1) : (right = mid - 1);
  }

  return 0;
};

// [4,5,6,7,0,1,2]
