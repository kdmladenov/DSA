// https://leetcode.com/problems/maximum-product-subarray/

const maxProduct = (nums) => {
  if (!nums && !nums.length) return nums;

  let max = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];  // Important

    prevMax = Math.max(...options);
    prevMin = Math.min(...options); // in case of negative * negative

    max = Math.max(max, prevMax);
  }

  return max;
};