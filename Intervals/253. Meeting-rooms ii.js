// https://www.lintcode.com/problem/919/

const minMeetingRooms = (intervals) => {
  let start = intervals.sort((a, b) => a[0] - b[0]);
  let end = [...intervals].sort((a, b) => a[1] - b[1]);
  let roomCount = 0;

  let pointer = 0;

  for (let i = 0; i < intervals.length; i++) {
    start[i][0] < end[pointer][1] ? roomCount++ : pointer++;
  }

  return roomCount;
};
