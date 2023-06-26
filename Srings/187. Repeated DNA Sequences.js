// https://leetcode.com/problems/repeated-dna-sequences/

const findRepeatedDnaSequences = (s) => {
  let seen = new Set();
  let result = new Set();

  for (let i = 0; i < s.length - 9; i++) {
    const str = s.slice(i, i + 10);

    seen.has(str) ? result.add(str) : seen.add(str);
  }

  return [...result];
};

// optimize for (let i = 0; i < s.length - 9; i++)
