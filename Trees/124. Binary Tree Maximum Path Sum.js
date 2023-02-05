// https://leetcode.com/problems/binary-tree-maximum-path-sum/

const maxPathSum = (root) => {
  let max = -Infinity;

  const dfs = (node) => {
    if (!node) return 0;

    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));

    max = Math.max(max, node.val + left + right);

    return node.val + Math.max(left, right);
  };

  dfs(root);

  return max;
};
