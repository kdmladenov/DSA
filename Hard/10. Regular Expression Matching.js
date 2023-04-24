// https://leetcode.com/problems/regular-expression-matching/description/?q=javascript&orderBy=most_votes

// Hard

const isMatch = (string, pattern) => {
  let indexes = new Set();

  const addStat = (indexes, i) => {
    if (pattern[i] === '*') {
      indexes.add(i - 1);
      addStat(indexes, i + 1);
    } else {
      indexes.add(i);
      if (pattern[i + 1] === '*') addStat(indexes, i + 2);
    }
  };

  addStat(indexes, 0);

  for (let char of string) {
    let next = new Set();
    for (let i of indexes) {
      if (char === pattern[i] || pattern[i] === '.') addStat(next, i + 1);
    }
    indexes = next;
  }
  return indexes.has(pattern.length);
};
