// https://www.lintcode.com/problem/178/

// https://www.youtube.com/watch?v=hIQLVBeZe3Q

const isBFSCycle = (node, adjList, visited, parent) => {
  const queue = [node];

  while (queue.length) {
    let currNode = queue.shift();
    visited[currNode] = true;

    for (let neighbor of adjList[currNode]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        parent[neighbor] = currNode;
        queue.push(neighbor);
      } else {
        if (neighbor !== parent[currNode]) return true;
      }
    }
  }

  return false;
};

const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);

  for (let edge in edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
    adjList[dest].push(src); // Mirror because it is undirected graph
  }

  return adjList;
};

const validTree = (n, edges) => {
  const adjList = buildAdjList(n, edges);
  const visited = {};
  const parent = {};
  let regionsCount = 0;

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      regionsCount++;
      if (regionsCount > 1) return false;
      if (isBFSCycle(vertex, adjList, visited, parent)) return false;
    }
  }

  return true;
};
