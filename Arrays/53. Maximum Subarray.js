// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = (nums) => {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let num of nums.slice(1)) {
    currentSum = num + Math.max(0, currentSum);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// Python

// class Solution:
//     def maxSubArray(self, nums: List[int]) -> int:
//         current_sum = nums[0]
//         max_sum = nums[0]

//         for num in nums[1:]:
//             current_sum = num + max(0, current_sum)
//             max_sum = max(max_sum, current_sum)

//         return max_sum