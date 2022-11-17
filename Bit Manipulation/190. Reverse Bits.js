// https://leetcode.com/problems/reverse-bits

const reverseBits = (n) => {
  if (n === 0) return 0;

  let result = 0;

  for (var i = 0; i < 32; i++) {
    result <<= 1;

    if (n & (1 === 1)) result += 1;

    n >>= 1;
  }
  return result >>> 0;
};
