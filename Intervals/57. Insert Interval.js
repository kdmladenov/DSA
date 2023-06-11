// https://leetcode.com/problems/insert-interval/

const insert = (intervals, newInterval) => {
  const result = [newInterval];
  for (let curr of intervals) {
    const prev = result.pop();

    // last before current interval
    if (prev[1] < curr[0]) {
      result.push(prev);
      result.push(curr);

      // last after current interval
    } else if (prev[0] > curr[1]) {
      result.push(prev);
      result.push(curr);

      // intersection
    } else {
      result.push([Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])]);
    }
  }
  return result;
};
