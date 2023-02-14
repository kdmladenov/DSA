// https://leetcode.com/problems/first-unique-character-in-a-string/

const firstUniqChar = (s) => {
  for (let char of s) {
    if (s.indexOf(char) === s.reverseIndexOf(char)) return s.indexOf(char);
  }
  return -1;
};
