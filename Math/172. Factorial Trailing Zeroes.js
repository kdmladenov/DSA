// https://leetcode.com/problems/factorial-trailing-zeroes/

const trailingZeroes = (n) => {
  if (n < 5) return 0;

  return Math.floor(n / 5) + trailingZeroes(n / 5);
};
