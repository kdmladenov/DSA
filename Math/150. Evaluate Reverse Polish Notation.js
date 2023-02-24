// https://leetcode.com/problems/evaluate-reverse-polish-notation/

const evalRPN = (tokens) => {
  const options = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)) // by definition
  };

  const stack = [];

  for (let token of tokens) {
    if (options[token]) {
      const b = stack.pop(); // b should be first
      const a = stack.pop();
      stack.push(options[token](a, b));
    } else stack.push(+token);
  }

  return stack[0];
};
