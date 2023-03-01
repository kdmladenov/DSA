// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

const kthSmallest = (root, k) => {
  let stack = [];

  const dfs = (root) => {
    if (!root) return;

    dfs(root.left); // reach the left-most node - smallest value
    stack.push(root.val);
    dfs(root.right);
  };

  dfs(root);

  return stack[k - 1];
};
