// https://leetcode.com/problems/valid-anagram/

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const map = {};

  for (let charS of s) map[charS] = map[charS] + 1 || 1;

  for (let charT of t) {
    if (!map[charT]) return false;
    else map[charT] = map[charT]--;
  }

  return true;
};
