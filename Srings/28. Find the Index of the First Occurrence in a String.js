// https://leetcode.com/problems/implement-strstr/

// https://www.youtube.com/watch?v=WOfehW_sQ00

const strStr = (haystack, needle) => {
  if (!needle) return 0;

  let i = 0;

  while (
    // sliding window
    haystack.substring(i, needle.length + i) !== needle && i <= haystack.length
  ) {
    i++;
  }
  // note the > sign used
  return i > haystack.length ? -1 : i;
};
