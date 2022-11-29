/**
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
determine if a person could attend all meetings.
For example,
Given [[0, 30],[5, 10],[15, 20]],
return false.
**/

const canAttendMeetings = (intervals) => {
  // sort the array based on first items (start time)
  const arr = intervals.sort((a, b) => a[0] - b[0]);

  // if start of current is before (<) the end of the previous - return false
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i][0] < arr[i - 1][1]) return false;
  }

  return true;
};
