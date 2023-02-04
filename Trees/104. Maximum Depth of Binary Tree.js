// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// time - O(num of nodes)
// space - O(height of the tree)

const maxDepth = (root) => {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// add 1 to that to consider the current level i.e.  root's level into our depth.
