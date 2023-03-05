// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// Lowest Common Ancestor must sit between p and q
// p < Lowest Common Ancestor < q
const lowestCommonAncestor = (root, p, q) => {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  
  return root;
};