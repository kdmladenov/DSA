// https://leetcode.com/problems/balanced-binary-tree/

const isBalanced = (tree) => {
  let isBalanced = true;

  const dfs = (t) => {
    if (!t) return 0;

    const left = dfs(t.left);
    const right = dfs(t.right);

    if (Math.abs(left - right) > 1) isBalanced = false;

    return 1 + Math.max(left, right);
  };

  dfs(tree);

  return isBalanced;
};
