// https://leetcode.com/problems/subtree-of-another-tree/

const isSubtree = (root, subRoot) => {
  if (!root) return false;
  return (
    isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  );
};

// LC 100 
const isSameTree = (a, b) => {
  if (!a && !b) return true;
  if (!a || !b || a.val !== b.val) return false;
  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
};
