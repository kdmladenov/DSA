// https://leetcode.com/problems/missing-number/

// traverse the array and add to sum/acc the difference between:
// - consecutive number - index + 1
// - the actual number

const missingNumber = (nums) => nums.reduce((acc, num, i) => (acc += i + 1 - num), 0);
