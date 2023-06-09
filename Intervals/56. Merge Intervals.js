// https://leetcode.com/problems/merge-intervals // O(nlogn) time | O(n) space

const merge = (intervals) => {
  if (intervals.length === 0) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const res = [intervals[0]];

  for (let current of intervals) {
    let previous = res[res.length - 1];

    current[0] <= previous[1]
      ? (previous[1] = Math.max(current[1], previous[1]))
      : res.push(current);
  }

  return res;
};
