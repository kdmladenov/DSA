// https://leetcode.com/problems/distinct-subsequences/description/
// Hard
const  numDistinct = (s, t, memo = new Map()) =>  {
  if (s.length === 0 || s.length < t.length) return 0;
  if (t.length === 0) return 1;

  let key = s.length + ',' + t.length;

  if (memo.has(key)) return memo.get(key);

  let res = numDistinct(s.slice(1), t, memo);

  if (s[0] === t[0]) res += numDistinct(s.slice(1), t.slice(1), memo);

  memo.set(key, res);
  
  return res;
};