// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s) => {
  const map = {}; // {char : lastIndexSeen}
  let start = 0; // current Substring Start Index
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];

    if (map[currChar] >= start) start = map[currChar] + 1;

    map[currChar] = i;

    maxLen = Math.max(maxLen, i - start + 1); // + 1 due to index
  }

  return maxLen;
};
