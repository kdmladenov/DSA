// https://leetcode.com/problems/missing-number/

// traverse the array and add to sum/acc the difference between:
// - consecutive number - index + 1
// - the actual number

const missingNumber = (nums) => [...nums, 0].reduce((acc, num, i) => (acc += i - num), 0);
