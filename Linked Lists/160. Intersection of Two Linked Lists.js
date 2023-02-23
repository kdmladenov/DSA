// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;

  let curA = headA;
  let curB = headB;

  while (curA !== curB) {
    curA = curA === null ? headB : curA.next;
    curB = curB === null ? headA : curB.next;
  }

  return curA;
};
