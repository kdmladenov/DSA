// https://leetcode.com/problems/divide-two-integers/description/

const divide = (dividend, divisor) => {
  if (dividend <= -(2 ** 31 - 1) && divisor == -1) return 2 ** 31 - 1;

  let sign = Math.sign(dividend) == Math.sign(divisor) ? 1 : -1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let ret = 0;

  while (divisor <= dividend) {
    let div = divisor;
    let multiple = 1;

    while (div + div <= dividend) {
      div += div;
      multiple += multiple;
    }
    
    dividend = dividend - div;
    ret += multiple;
  }

  return sign * ret;
};
