// https://leetcode.com/problems/linked-list-cycle/

const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};

// Python 

// def hasCycle(self, head: Optional[ListNode]) -> bool:

//         slow, fast = head, head

//         while fast and fast.next:
//             slow = slow.next
//             fast = fast.next.next

//             if slow == fast:
//                 return True

//         return False