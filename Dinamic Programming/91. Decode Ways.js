// https://leetcode.com/problems/decode-ways/

const numDecodings = (s) => {
  if (!s || s[0] === '0') return 0;

  const table = new Array(s.length + 1).fill(0);

  table[0] = table[1] = 1;

  for (let i = 2; i < s.length + 1; i++) {
    const a = +s.slice(i - 1, i); // previous one digit
    if (a >= 1 && a <= 9) table[i] += table[i - 1];

    const b = +s.slice(i - 2, i); // previous two digits
    if (b >= 10 && b <= 26) table[i] += table[i - 2];
  }

  return table.pop();
};
