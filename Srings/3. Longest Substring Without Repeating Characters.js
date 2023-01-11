// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s) => {
  // map of char and last Index Seen
  const charLastIndexMap = {};
  let currentSubstringStart = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];

    // move currentSubstringStart pointer to the next
    if (charLastIndexMap[currChar] >= currentSubstringStart) {
      currentSubstringStart = charLastIndexMap[currChar] + 1;
    }

    charLastIndexMap[currChar] = i;
    // + 1 due to index
    maxLen = Math.max(maxLen, i - currentSubstringStart + 1);
  }

  return maxLen;
};