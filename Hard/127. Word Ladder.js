// https://leetcode.com/problems/word-ladder/description/
// Hard
const ladderLength = (beginWord, endWord, wordList) => {
  const words = new Set(wordList);
  let queue = [beginWord];
  let steps = 1;

  while (queue.length) {
    const next = [];

    for (let word of queue) {
      if (word === endWord) return steps;

      for (let i = 0; i < word.length; i++) {
        // and replace the char with letters from [a - z]
        for (let j = 0; j < 26; j++) {
          const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

          // if the new word exist in the word list add it to the queue
          if (words.has(newWord)) {
            next.push(newWord);
            words.delete(newWord);
          }
        }
      }
    }
    queue = next;
    steps++;
  }
  return 0;
};
