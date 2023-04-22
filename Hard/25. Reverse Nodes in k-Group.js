//  https://leetcode.com/problems/reverse-nodes-in-k-group/description/
// Hard

// reverse from startNode to endNode
const reverse = (start, end) => {
  let prev = null;
  let curr = start;
  while (curr !== end) [curr.next, prev, curr] = [prev, curr, curr.next];
  return prev;
};

const reverseKGroup = (head, k) => {
  if (head === null) return head;

  let start = head;
  let end = head;

  // return self if linked list's length is smaller than k
  for (let i = 0; i < k; i++) {
    if (end === null) return head;
    end = end.next;
  }

  let newHead = reverse(start, end); // reverse from startNode to endNode

  start.next = reverseKGroup(end, k); // recursive the rest nodes and concat the result

  return newHead;
};
