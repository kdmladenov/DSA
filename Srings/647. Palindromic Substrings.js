// https://leetcode.com/problems/palindromic-substrings/

const countSubstrings = (s) => {
  let count = 0;

  const expandMiddle = (low, high) => {
    while (low >= 0 && high <= s.length && s[low] === s[high]) {
      count += 1;
      low -= 1;
      high += 1;
    }
  };

  for (let i = 0; i < s.length; i += 1) {
    expandMiddle(i, i); //uneven length Palindromic -aaa
    expandMiddle(i, i + 1); //even length Palindromic - aaaa
  }
  return count;
};
