// Given an array of meeting time intervals consisting of
// start and end times [[s1,e1],[s2,e2],...] (si < ei),
// find the minimum number of conference rooms required.

// Example 1:
// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2

// Example 2:
// Input: [[7,10],[2,4]]
// Output: 1

const minMeetingRooms = (intervals) => {
  let start = intervals.sort((a, b) => a[0] - b[0]);
  let end = [...intervals].sort((a, b) => a[1] - b[1]);
  let roomCount = 0;

  let j = 0; // pointer

  for (let i = 0; i < intervals.length; i++) {
    if (start[i][0] < end[j][1]) {
      roomCount++;
    } else {
      j++;
    }
  }

  return roomCount;
};
