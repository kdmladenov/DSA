// https://leetcode.com/problems/task-scheduler/description/

const leastInterval = (tasks, n) => {
  if (n === 0) return tasks.length;

  let map = {};
  for (let task of tasks) map[task] = map[task] + 1 || 1;

  let max = 0;
  let tailSize = 0;

  for (let curr of Object.keys(map)) {
    if (map[curr] > max) tailSize = 1;
    if (map[curr] === max) tailSize++;

    max = Math.max(max, map[curr]);
  }
  return Math.max((max - 1) * (n + 1) + tailSize, tasks.length);
};
//(max - 1) - max count of groups less the tail
// n + 1 - group size n cooldowns + 1 for the max
// tailCount - size of tail

