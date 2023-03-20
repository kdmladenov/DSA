// https://leetcode.com/problems/valid-parenthesis-string/

const checkValidString = (s) => {
  if (!s) return true;

  let stack = [];
  let open = 0;
  let close = 0;
  let star = 0;

  for (let char of s) {
    char === '(' ? stack.push(true) : stack.pop();

    if (char === '(') open++;
    if (char === ')') close++;
    if (char === '*') star++;

    if (char === ')' && star + open < close) return false;
  }

  return stack.length === 0 ? true : false;
};
