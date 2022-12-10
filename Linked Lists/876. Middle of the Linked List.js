// https://leetcode.com/problems/middle-of-the-linked-list/

// https://www.youtube.com/watch?v=t97D5FbGnao

const middleNode = (head) => {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Another
const findMiddleOfList = (head) => {
  const nodes = [head];

  while (head.next) {
    nodes.push(head.next);
    head = head.next;
  }

  const middle = Math.floor(nodes.length / 2);
  return nodes[middle];
};