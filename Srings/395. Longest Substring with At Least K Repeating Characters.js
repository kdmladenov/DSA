// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/

const longestSubstring = (s, k) => {
  if (!s) return 0;

  const map = new Map();
  let countMap = new Map();
  let stack = [];
  let max = 0;

  for (const char of s) map.set(char, map.get(char) + 1 || 1);

  for (const char of s) {
    if (map.get(char) >= k) {
      stack.push(char);
      countMap.set(char, countMap.get(char) + 1 || 1);
    } else {
      for (const [key, val] of countMap) map.set(key, +map.get(key) - +val); // remove prvious elements we have used before moving to the next part

      countMap = new Map();
      max = Math.max(longestSubstring(stack.join(''), k), max);
      stack = [];
    }
  }
  max = Math.max(stack.length, max);

  return max >= k ? max : 0;
};
