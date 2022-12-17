// https://leetcode.com/problems/plus-one/

// https://www.youtube.com/watch?v=P3K_hKNU2ME&t=29s

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  // edge case if 999 -> 000 we have to add 1 for 1000
  digits.unshift(1);
  return digits;
};
