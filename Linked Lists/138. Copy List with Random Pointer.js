// https://leetcode.com/problems/copy-list-with-random-pointer/description/

const copyRandomList = (head) => {
  let visited = new Map();

  let helper = (node) => {
    if (!node) return null;
    if (visited.has(node)) return visited.get(node);

    let newNode = new Node(node.val);

    visited.set(node, newNode);

    newNode.next = helper(node.next);
    newNode.random = helper(node.random);

    return newNode;
  };

  return helper(head);
};
