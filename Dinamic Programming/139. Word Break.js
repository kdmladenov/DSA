// https://leetcode.com/problems/word-break/

// no video ~~ 99%

const wordBreak = function (str, wordDict) {
  const res = new Array(str.length + 1).fill(false);
  res[0] = true;

  for (let i = 1; i <= str.length; i++) {
    for (let word of wordDict) {
      // search word from dict backwards
      // word.length <= i : the index should be at lease the length of the word
      // res[i - word.length] : the start of the word should be exactly the end of the previous
      // str.slice(i - word.length, i) === word : the words should match
      if (word.length <= i && res[i - word.length] && str.slice(i - word.length, i) === word) {
        res[i] = true;
        break;
      }
    }
  }

  return res[str.length];
};

// console.log(wordBreak('applepenapple', ['apple', 'pen']));
