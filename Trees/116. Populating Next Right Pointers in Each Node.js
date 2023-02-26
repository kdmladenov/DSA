// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

const connect = (root) => {
  if (!root || !root.left) return root;

  root.left.next = root.right; // connect left -> right
  root.right.next = root.next ? root.next.left : null; // connect right -> next's left

  connect(root.left);
  connect(root.right);

  return root;
};
