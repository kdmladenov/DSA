// https://leetcode.com/problems/symmetric-tree/
const isSymmetric = (root) => {
  const isMirror = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b || a.val !== b.val) return false;

    return isMirror(a.left, b.right) && isMirror(a.right, b.left);
  };
  return isMirror(root, root);
};

