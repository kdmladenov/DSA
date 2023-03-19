// https://leetcode.com/problems/basic-calculator-ii

const calculate = (s) => {
  if (s.length === 0) return 0;

  let op = '+';
  let stack = [];
  let n = 0;

  //  <= s.length to push the last digit to the stack
  for (let i = 0; i <= s.length; i++) {
    let char = s[i];
    if (char === ' ') continue;

    if (char >= '0' && char <= '9') {
      n = n * 10 + parseInt(char);
      continue;
    }

    stack.push(
      op === '+'
        ? n
        : op === '-'
        ? -n
        : op === '*'
        ? stack.pop() * n
        : op === '/'
        ? Math.trunc(stack.pop() / n)
        : 0
    );
    // c must be and operator, so store it for the next number.
    op = char;
    n = 0;
  }

  return stack.reduce((acc, n) => acc + n, 0);
};
