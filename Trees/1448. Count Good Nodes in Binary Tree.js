// https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/?q=javascript&orderBy=most_votes

const goodNodes = (root) => {
  let good = 0;
  const dfs = (node, max) => {
    if (!node) return;
    if (node.val >= max) good += 1;

    max = Math.max(max, node.val);

    dfs(node.left, max);
    dfs(node.right, max);
  };

  dfs(root, root.val);

  return good;
};
