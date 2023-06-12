// https://leetcode.com/problems/merge-k-sorted-lists/

// LC 21
const mergeTwoLists = (l1, l2) => {
  const dummyHead = new ListNode(0);
  let current = dummyHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;

  return dummyHead.next;
};

const mergeKLists = (lists) => {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let a = lists.shift(); // Should use shift() - more efficient!!!
    let b = lists.shift();
    let mergedAB = mergeTwoLists(a, b);
    lists.push(mergedAB);
  }

  return lists[0];
};
