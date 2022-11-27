// https://leetcode.com/problems/number-of-provinces/
// Similar to 207

// https://www.youtube.com/watch?v=oIzYd97dtq8

const getEdges = (idx, edge) => {
  const edges = [];

  // filters current(self) and 0s
  for (let i = 0; i < edge.length; i++) {
    if (i === idx) continue;
    if (edge[i] === 0) continue;
    edges.push(i);
  }

  return edges;
};

const buildAdjList = (edges, n = edges.length) => {
  const adjList = Array.from({ length: n }, () => []);

  for (let i = 0; i < edges.length; i++) {
    adjList[i].push(...getEdges(i, edges[i])); // filters self and 0s
  }

  return adjList;
};

const dFS = (node, adjList, visited) => {
  visited[node] = true;

  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      dFS(neighbor, adjList, visited);
    }
  }
};

const findCircleNum = (isConnected) => {
  const visited = {};
  const adjList = buildAdjList(isConnected);
  let provincesCount = 0;

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      provincesCount++;
      dFS(vertex, adjList, visited);
    }
  }

  return provincesCount;
};
