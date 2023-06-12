// https://leetcode.com/problems/merge-two-sorted-lists/

const mergeTwoLists = (l1, l2) => {
  const dummyHead = { next: null };
  let current = dummyHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    // move current to the new node with smaller value
    current = current.next;
  }
  //link with the remaining list
  current.next = l1 || l2;

  //return the head of the merged list
  return dummyHead.next;
};
