// https://leetcode.com/problems/permutation-in-string/

const checkInclusion = (s1, s2) => {
  const map = {};
  for (let char of s1) map[char] = map[char] + 1 || 1;

  const matchCount = {};
  let left = 0;
  let right = 0;

  while (right < s2.length) {
    let char = s2[right];

    matchCount[char] = matchCount[char] + 1 || 1;

    // Remove all letters that exceed our letter count by bumping up the left pointer
    while (matchCount[char] > (map[char] || 0)) {
      matchCount[s2[left]] -= 1;
      left++;
    }

    if (right - left + 1 === s1.length) return true;

    right++;
  }

  return false;
};
