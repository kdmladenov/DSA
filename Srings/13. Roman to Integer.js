// https://leetcode.com/problems/roman-to-integer/

const romanToInt = (s) => {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;

  s.split('').forEach((char, i) => {
    // To compensate for the 4, 9 , 40, 90....
    if (map[char] < map[s[i + 1]]) result -= map[char];
    // regular conversion
    else result += map[char];
  });
  return result;
};
