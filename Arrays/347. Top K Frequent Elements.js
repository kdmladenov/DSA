// https://leetcode.com/problems/top-k-frequent-elements/

const topKFrequent = (nums, k) => {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  // fill the map
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // fill the bucket of Sets() with index the frequency
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  // loop backwards - highest frequency first 
  for (let i = bucket.length - 1; i >= 0; i--) {
    // ... In case larger frequency array
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};
