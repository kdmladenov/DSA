// https://leetcode.com/problems/reverse-integer/

const reverse = (x) => {
  let reversed = 0;

  while (x !== 0) {
    reversed = reversed * 10 + (x % 10);

    x = parseInt(x / 10); // Important - parseInt
  }

  return reversed > 2 ** 31 || reversed < -(2 ** 31) ? 0 : reversed;
};
