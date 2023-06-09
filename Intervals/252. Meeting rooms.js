// https://www.lintcode.com/problem/920/

const canAttendMeetings = (intervals) => {
  // sort the array based on first items (start time)
  const arr = intervals.sort((a, b) => a[0] - b[0]);

  // if start of current is before (<) the end of the previous - return false
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i][0] < arr[i - 1][1]) return false;
  }

  return true;
};