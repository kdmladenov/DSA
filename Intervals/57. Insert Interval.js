// https://leetcode.com/problems/insert-interval/

const insert = (intervals, newInterval) => {
  let i = 0;
  let n = intervals.length;
  let res = [];

  // edge case
  if (n < 1) {
    res.push(newInterval);
    return res;
  }

  // case for non overlapping intervals
  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }
  
  // case if there are no intervals left after the while loop (no overlapping)
  if (i === n) {
    res.push(newInterval);
    return res;
  }
  
  // Merging intervals
  let first = intervals[i];
  let second = newInterval;
  while (i < n && first[0] <= second[1]) {
    second = [Math.min(first[0], second[0]), Math.max(first[1], second[1])];
    i++;
    // moving to the next interval
    first = intervals[i];
  }

  // pushing the result of the loop
  res.push(second);


  // case for the remaining intervals
  while (i < n) {
    res.push(intervals[i]);
    i++;
  }

  return res;
};
