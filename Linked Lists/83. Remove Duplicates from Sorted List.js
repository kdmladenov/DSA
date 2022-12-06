// https://leetcode.com/problems/remove-duplicates-from-sorted-list/


const deleteDuplicates = (head) => {
  let curr = head;

  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};