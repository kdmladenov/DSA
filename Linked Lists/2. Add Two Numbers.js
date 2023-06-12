// https://leetcode.com/problems/add-two-numbers/

const addTwoNumbers = (l1, l2) => {
  let result = new ListNode(0);
  let curr = result;
  let carry = 0;

  while (l1 || l2) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    let sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10); // in 78 carry = 7
    sum = sum % 10; // in 78 sum = 8

    curr.next = new ListNode(sum);
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) curr.next = new ListNode(carry);
  
  return result.next;
};
