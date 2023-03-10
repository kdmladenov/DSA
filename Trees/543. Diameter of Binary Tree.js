// https://leetcode.com/problems/diameter-of-binary-tree/

const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  const dfs = (node, level) => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right); // update the largest number of edge so far
  };

  dfs(root);

  return diameter;
};
