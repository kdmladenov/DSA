// https://leetcode.com/problems/power-of-two/

// O(logN) - time
// O(1) - space

const isPowerOfTwo = (n) => {
  if (n <= 0) return false;
  while (n % 2 === 0) n /= 2;
  return n === 1;
};
