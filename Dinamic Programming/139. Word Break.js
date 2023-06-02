// https://leetcode.com/problems/word-break/

const wordBreak = function (str, wordDict) {
  const isWordEnd = new Array(str.length + 1).fill(false);
  isWordEnd[0] = true;

  for (let i = 1; i < str.length + 1; i++) {
    for (let word of wordDict) {
      if (isWordEnd[i - word.length] && str.slice(i - word.length, i) === word) {
        isWordEnd[i] = true;
        // break; // optimization
      }
    }
  }

  return isWordEnd.pop();
};

// search word from dict backwards
// word.length <= i : the index should be at least the length of the word
// res[i - word.length] : the start of the word should be exactly the end of the previous
// str.slice(i - word.length, i) === word : the words should match
