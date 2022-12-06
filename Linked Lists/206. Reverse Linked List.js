// https://leetcode.com/problems/reverse-linked-list/

// use previous, current, next and reverse the link between current and previous while current is not null
const reverseList = head => {
  let previous = null;

  let current = head;

  while(current){
    let temp = current.next;

    // Change direction
    current.next = previous;

    // Move previous and current up by 1
    previous = current;
    current = temp;
  }

  // previous(head) <- current(null) we want previous to be the new head
  return previous;
};
