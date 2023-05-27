// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strArr) => {
  if (!strArr.length) return '';

  let prefix = strArr[0];

  for (let str of strArr.slice(1)) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1); // reducing the prefix from the end
    }
  }
  return prefix;
};
