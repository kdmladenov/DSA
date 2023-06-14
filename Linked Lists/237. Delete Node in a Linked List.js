// https://leetcode.com/problems/delete-node-in-a-linked-list/

const deleteNode = (node) => {
  node.val = node.next.val; // the value of the current node is made as the value of the next (1)
  node.next = node.next.next; // move the node to point to the next.next node (temp) 5 with new val 1 to point to 9
};

// Eg. 4 -> '5' -> 1 -> 9

// Python
// def deleteNode(self, node):
//         node.val = node.next.val
//         node.next = node.next.next