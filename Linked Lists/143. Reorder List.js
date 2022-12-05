// https://leetcode.com/problems/reorder-list/

const reorderList =  (head) => {
  if (head === null || head.next === null) {
    return;
  }
  let top = head;
  let mid = getMid(head);
  let reversedlist = reverseList(mid);
  mergeList(top, reversedlist);

  // From Leetcode 206 problem 
  function reverseList(head) {
    let previous = null;

    let current = head;

    while (current) {
      let temp = current.next;

      // Change direction
      current.next = previous;

      // Move previous and current up by 1
      previous = current;
      current = temp;
    }

    // previous(head) <- current(null) we want previous to be the new head
    return previous;
  }

  function mergeList(l1, l2) {
    // 1->2->3
    if (l1 === null) {
      // 4->5->6
      return l2;
    }
    if (l2 === null) {
      return l1;
    }
    // the merging continues till the first is in the mid, because l2 will reach null
    // look the logic!!!
    while (l1 !== null && l2 !== null) {
      tmp = l1.next;
      l1.next = l2;
      l2 = l2.next;
      l1.next.next = tmp;
      l1 = tmp;
    }
  }

  function getMid(first) {
    let fast = first.next;
    let slow = first.next;
    let prev = first;
    while (true) {
      if (fast !== null) fast = fast.next;
      else break;
      if (fast !== null) fast = fast.next;
      else break;
      prev = slow;
      slow = slow.next;
    }

    prev.next = null; // cut in half
    return slow;
  }
};
