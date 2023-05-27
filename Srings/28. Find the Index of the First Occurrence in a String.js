// https://leetcode.com/problems/implement-strstr/

const strStr = (haystack, needle) => {
  if (!needle || haystack === needle) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }

  return -1;
};
