// https://leetcode.com/problems/generate-parentheses/description/

const generateParenthesis = (n) => {
  const res = [];

  const dfs = (str, open, close) => {
    if (open > close) return; // Close parentheses can not be more than open parentheses at any given time to stay valid.
    if (open === 0 && close === 0) res.push(str);
    if (open > 0) dfs(`${str}(`, open - 1, close); // Insert open parenthesis and search for the next valid insertion.
    if (close > 0) dfs(`${str})`, open, close - 1); // Insert close parenthesis and search for the next valid insertion.
  };

  dfs('', n, n);

  return res;
};
