// https://leetcode.com/problems/same-tree/

const isSameTree = (a, b) => {
  if (!a && !b) return true;
  if (!a || !b || a.val !== b.val) return false;

  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
};
