https://leetcode.com/problems/remove-nth-node-from-end-of-list/

const removeNthFromEnd = (head, n) => {
    
  
  const dummy = {next: head};// For exception cases include temp placeholder - empty LL
  let fast = dummy;
  let slow = dummy;

  // To move fast n nodes ahead of slow
  for(let i = 0; i < n; i++){
    fast = fast.next;
  }

  // Move fast and slow 1 node at a time until fast reaches the end
  while(fast.next){
    fast = fast.next;
    slow = slow.next;
  }
  //deletes the Nth node before end (the node before slow which is N nodes before fast which is in the end)
  slow.next = slow.next.next;

  //return head
  return dummy.next; 
};
