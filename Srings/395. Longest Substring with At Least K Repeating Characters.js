// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/

const longestSubstring = (s, k) => {
  if (!s) return 0;

  const strMap = {};
  let substrMap = {};
  let substr = '';
  let max = 0;

  for (const char of s) strMap[char] = strMap[char] + 1 || 1;

  for (const char of s) {
    if (strMap[char] < k) {
      for (let char in substrMap) strMap[char] = strMap[char] - substrMap[char]; // reduce overall with curr 

      max = Math.max(longestSubstring(substr, k), max); // !important 
      substrMap = {};
      substr = '';
    } else {
      substr += char;
      substrMap[char] = substrMap[char] + 1 || 1;
    }
  }
  max = Math.max(substr.length, max);

  return max >= k ? max : 0;
};
