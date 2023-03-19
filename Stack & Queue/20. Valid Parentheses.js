// https://leetcode.com/problems/valid-parentheses/

const isValid = (string) => {
  const stack = [];
  const map = { '(': ')', '{': '}', '[': ']' };

  for (let char of string) {
    if (map[char]) stack.push(char); // push start bracket
    else if (map[stack.pop()] !== char) return false; // pop start bracket and compare with end bracket
  }
  return stack.length === 0;
};