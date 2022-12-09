// https://leetcode.com/problems/delete-node-in-a-linked-list/

// Eg. 4 -> '5' -> 1 -> 9
const deleteNode = (node) => {
  // the value of the current node is made as the value of the next (1)
  node.val = node.next.val;
  // move the node to point to the next.next node (temp) 5 with new val 1 to point to 9
  node.next = node.next.next;
};
