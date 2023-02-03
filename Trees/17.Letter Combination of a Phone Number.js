// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
// T: O(4^n * n)  4 letters max
// S: O(4 ^ (n * n));

const letterCombinations = (digits) => {
  if (digits == null || digits === '') return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  const res = [];
  const dfs = (s) => {
    if (s.length === digits.length) {
      res.push(s);
      return; // important
    }

    for (const char of map[digits[s.length]]) dfs(s + char);
  };

  dfs('');
  return res;
};
