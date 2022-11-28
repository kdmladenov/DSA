// https://leetcode.com/problems/merge-intervals/
// O(nlogn) time | O(n) space
const merge = (intervals) => {
  if (intervals.length === 0) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const res = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let previousInterval = res[res.length - 1];

    if (currentInterval[0] <= previousInterval[1]) {
      previousInterval[1] = Math.max(currentInterval[1], previousInterval[1]);
    } else {
      res.push(currentInterval);
    }
  }

  return res;
};
