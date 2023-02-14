// https://leetcode.com/problems/longest-repeating-character-replacement/

const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  for (let char of s) {
    visited[char] = visited[char] + 1 || 1;

    maxCharCount = Math.max(maxCharCount, visited[char]);

    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};
