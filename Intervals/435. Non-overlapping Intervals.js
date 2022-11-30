// https://leetcode.com/problems/non-overlapping-intervals/

const eraseOverlapIntervals = (intervals) => {
  let removalCount = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let end = intervals[0][1];

  // start from the second interval
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    const intervalStart = interval[0];
    const intervalEnd = interval[1];

    if (end > intervalStart) {
      end = Math.min(end, intervalEnd);
      removalCount++;
    } else {
      end = intervalEnd;
    }
  }

  return removalCount;
};
