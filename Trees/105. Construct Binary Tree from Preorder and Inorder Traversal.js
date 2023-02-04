// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const buildTree = (preorder, inorder) => {
  if (!inorder.length) return null;

  let root = new TreeNode(preorder.shift());
  let inorderIndex = inorder.indexOf(root.val);

  root.left = buildTree(preorder, inorder.slice(0, inorderIndex)); 
  root.right = buildTree(preorder, inorder.slice(inorderIndex + 1)); // + 1 to exclude root

  return root;
};
