// https://leetcode.com/problems/reverse-linked-list-ii/

// https://www.youtube.com/watch?v=wk8-_M-2fzI

const reverseBetween = (head, left, right) => {
  const dummy = { next: head };

  let prev = dummy;
  // D->1->2->30->40->50->60->7.  left-3, right-6
  // P

  // advance previous to the correct position (1 position behind left)
  // D->1->2->30->40->50->60->7
  //       P   C  N
  for (let i = 0; i < left - 1; i++) prev = prev.next;

  // current
  let curr = prev.next;

  // reverse right - left times
  for (let i = 0; i < right - left; i++) {
    let NEXT = curr.next;
    curr.next = NEXT.next;
    NEXT.next = prev.next;
    prev.next = NEXT;
  }

  return dummy.next;
};

//             l         r
// null-> 0 -> 1 -> 2 -> 3 -> 4 -> null
//   d    p    c    n             


// Python 

    // def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
    //     dummy = ListNode(0, head)
    //     prev = dummy 

    //     for i in range(left - 1):
    //         prev = prev.next

    //     curr = prev.next

    //     for i in range(right - left):
    //         NEXT = curr.next
    //         curr.next = NEXT.next
    //         NEXT.next = prev.next
    //         prev.next = NEXT

    //     return dummy.next