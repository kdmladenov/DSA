// https://leetcode.com/problems/longest-palindromic-substring/

// Input: s = "babad"
// Output: "bab"

const longestPalindrome = (s) => {
  let palStartIndex = 0;
  let palLength = 1;

  const expandMiddle = (left, right) => {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      const lenTemp = right - left + 1;
      if (lenTemp > palLength) {
        palLength = lenTemp;
        palStartIndex = left;
      }
      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandMiddle(i, i + 1);
    expandMiddle(i - 1, i + 1);
  }

  return s.slice(palStartIndex, palStartIndex + palLength);
};
