// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

const serialize = (root) => {
  let data = [];

  const go = (node) => {
    if (!node) {
      data.push(null);
      return;
    }
    data.push(node.val);
    go(node.left);
    go(node.right);
  };

  go(root);
  return data;
};

const deserialize = (data) => {
  const go = () => {
    if (!data.length) return;

    const val = data.shift();
    if (!val) return null;

    const node = new TreeNode(val);
    node.left = go();
    node.right = go();
    return node;
  };

  return go();
};
