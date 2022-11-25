// https://leetcode.com/problems/clone-graph

// ~~ 95% No video

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
const cloneGraph = function (node) {
  if (!node) return node;

  const map = {};

  return traverse(node);

  function traverse(node) {
    if (!node) return node;

    if (!map[node.val]) {
      const newNode = new Node(node.val);
      map[node.val] = newNode;
      newNode.neighbors = node.neighbors.map(traverse);
    }

    return map[node.val];
  }
};