// https://leetcode.com/problems/binary-tree-right-side-view/description/

const rightSideView = (root) => {
  if (!root) return [];
  let result = [];

  const dfs = (node, h) => {
    if (!node) return;

    result[h] = node.val;

    dfs(node.left, h + 1);
    dfs(node.right, h + 1);
  };

  dfs(root, 0);
  return result;
};
