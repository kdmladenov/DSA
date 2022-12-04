// https://leetcode.com/problems/reverse-linked-list-ii/

// https://www.youtube.com/watch?v=wk8-_M-2fzI

const reverseBetween = (head, left, right) => {
  const dummy = { next: head };

  let previous = dummy;
  // D->1->2->30->40->50->60->7.  left-3, right-6
  // P

  // advance previous to the correct position (1 position behind left)
  // D->1->2->30->40->50->60->7
  //       P   C  N
  for (let i = 0; i < left - 1; i++) previous = previous.next;

  // current
  let current = previous.next;

  // reverse right - left times
  for (let i = 0; i < right - left; i++) {
    let NEXT = current.next;
    current.next = NEXT.next;
    NEXT.next = previous.next;
    previous.next = NEXT;
  }

  return dummy.next;
};
