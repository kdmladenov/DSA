// https://leetcode.com/problems/fraction-to-recurring-decimal/

const fractionToDecimal = (numerator, denominator) => {
  if (!numerator) return '0';

  let str = '';

  if (Math.sign(numerator) !== Math.sign(denominator)) str += '-';

  const number = Math.abs(numerator);
  const denom = Math.abs(denominator);

  str += Math.floor(number / denom);
  let rem = number % denom;
  if (!rem) return str;
  str += '.';

  const map = new Map();

  while (rem !== 0) {
    map.set(rem, str.length);

    rem *= 10;
    str += Math.floor(rem / denom);
    rem %= denom;

    if (map.has(rem)) {
      const idx = map.get(rem);
      return str.slice(0, idx) + `(${str.slice(idx)})`;
    }
  }
  return str;
};
