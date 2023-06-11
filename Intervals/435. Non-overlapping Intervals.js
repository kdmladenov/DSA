// https://leetcode.com/problems/non-overlapping-intervals/

const eraseOverlapIntervals = (intervals) => {
  let removed = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];

  for (let curr of intervals.slice(1)) {

    if (prev[1] > curr[0]) {
      prev[1] = Math.min(prev[1], curr[1]);
      removed++;
    } else prev = curr;

  }

  return removed;
};
