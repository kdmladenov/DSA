// https://leetcode.com/problems/redundant-connection/description/

const findRedundantConnection = (edges) => {
  const adjacencyList = {};

  const dfs = (node, target, prev) => {
    if (node === target) return true;

    for (let subnode of adjacencyList[node]) {
      if (subnode !== prev && dfs(subnode, target, node)) return true;
    }
    return false;
  };

  //  Build graph one edge at a time
  for (let [a, b] of edges) {
    if (!adjacencyList[a]) adjacencyList[a] = [];
    if (!adjacencyList[b]) adjacencyList[b] = [];

    adjacencyList[a].push(b);
    adjacencyList[b].push(a);

    if (dfs(b, a, a)) return [a, b]; //  Traverse the graph and check for a cycle for each new edge
  }
};
