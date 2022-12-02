// https://leetcode.com/problems/merge-k-sorted-lists/

// https://youtube.com/watch?v=O5JzsSV-lA8

// from Leetcode pr.21
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  // used predefined ListNode
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
    // move current to the new node with smaller value
    current = current.next;
  }
  //link with the remaining (longer) list
  current.next = l1 || l2;

  //return the head of the merged list
  return dummyHead.next;
};


const mergeKLists = (lists) => {
      if(lists.length === 0) return null;
    
    // merges 2 lists at a time
    while(lists.length > 1){
      // Should use shift() !!! 
      // If used pop() the time complexity jumps 5x
        let a = lists.shift();
        let b = lists.shift();
        let mergedAB = mergeTwoLists(a, b);
        lists.push(mergedAB);
    }
    
    return lists[0];
};