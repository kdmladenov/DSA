// https://leetcode.com/problems/course-schedule-ii/description/

const findOrder = (numCourses, prerequisites) => {
  let graph = new Array(numCourses).fill(0).map((_) => []);

  let len = prerequisites.length;

  for (let i = 0; i < len; i++) {
    let item = prerequisites[i];
    if (item[1] >= numCourses) return [];
    graph[item[0]].push(item[1]);
  }

  let status = new Array(numCourses);
  let result = [];

  let hasCircle = function (current) {
    if (status[current] === 1) return true;
    if (status[current] === 2) return false;

    status[current] = 1; // start visiting

    for (let next of graph[current]) if (hasCircle(next)) return true;

    status[current] = 2; // end visiting

    result.push(current);
  };

  for (let i = 0; i < numCourses; i++) if (hasCircle(i)) return [];

  return result;
};

// empty: other
// 1: visiting
// 2: visited
