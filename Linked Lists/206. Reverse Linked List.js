// https://leetcode.com/problems/reverse-linked-list/

const reverseList = (head) => {
  let previous = null;
  let current = head;

  // Change direction
  while (current) {
    let temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  return previous;
};

// null ->  0 -> 1 -> 2 -> 3 -> 4 -> null
// p        c    t

// null <- 0 <- 1 <- 2 <- 3 <- 4 <- null
//                             p     ct

// Python
// def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
//     prev = None
//     curr = head

//     while curr:
//         temp = curr.next
//         curr.next = prev
//         prev = curr
//         curr = temp

//     return prev
