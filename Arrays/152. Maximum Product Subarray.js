// https://leetcode.com/problems/maximum-product-subarray/


const maxProduct = (nums) => {
  if (!nums && !nums.length) return nums;

  let prevMax = nums[0];
  let prevMin = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // choices: 1) prevMax * nums[i], 2) nums[i], 3) prevMin * nums[i]
    let localMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
    let localMin = Math.min(prevMax * nums[i], nums[i], prevMin * nums[i]);

    // max and min could have swapped
    prevMax = Math.max(localMax, localMin);
    prevMin = Math.min(localMax, localMin);

    maxSoFar = Math.max(maxSoFar, prevMax);
  }

  return maxSoFar;
};
