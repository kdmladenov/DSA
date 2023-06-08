// https://leetcode.com/problems/task-scheduler/description/

const leastInterval = (tasks, interval) => {
  if (interval === 0) return tasks.length;

  let map = {};
  for (let task of tasks) map[task] = map[task] + 1 || 1;

  let groupsCount = 0;
  let tailSize = 0;

  for (let curr of Object.keys(map)) {
    if (map[curr] > groupsCount) tailSize = 1;
    if (map[curr] === groupsCount) tailSize++;

    groupsCount = Math.max(groupsCount, map[curr]);
  }
  return Math.max((groupsCount - 1) * (interval + 1) + tailSize, tasks.length);
};
// (groupLengthMax - 1) - group count -1 (the tail)
// interval + 1 - group size interval cooldowns + 1 for the max
// tailCount - size of tail

