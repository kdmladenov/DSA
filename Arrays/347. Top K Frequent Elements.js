// https://leetcode.com/problems/top-k-frequent-elements/

const topKFrequent = (nums, k) => {
  const map = {};
  const temp = [];
  const result = [];

  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }

  for (let [num, freq] of Object.entries(map)) {
    temp[freq] = (temp[freq] || new Set()).add(num); // fill the bucket of Sets() with index the frequency
  }

  // loop backwards - highest frequency first
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i]) result.push(...temp[i]); // ... In case larger frequency array
    if (result.length === k) break;
  }
  return result;
};