// https://leetcode.com/problems/course-schedule/

// https://www.youtube.com/watch?v=kDvNzEgGTuQ ~~ 74%

// The problems asks if there is a cycle in the directed graph!!

const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);

  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
  }

  return adjList;
};

const hasCyclesDFS = (node, adjList, visited, arrive, depart) => {
  arrive[node]++;
  visited[node] = true;

  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;

      if (hasCyclesDFS(neighbor, adjList, visited, arrive, depart)) return true;
    } else {
      if (depart[neighbor] === 0) return true;
    }
  }

  depart[node]++;
  return false;
};

const canFinish = (numCourses, prerequisites) => {
  const adjList = buildAdjList(numCourses, prerequisites);
  const visited = {};
  const arrive = Array.from({ length: numCourses }, () => 0);
  const depart = Array.from({ length: numCourses }, () => 0);

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex] && hasCyclesDFS(vertex, adjList, visited, arrive, depart)) return false;
  }

  return true;
};
