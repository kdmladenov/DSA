// https://leetcode.com/problems/add-two-numbers/
// https://www.youtube.com/watch?v=cEGx1zqD78Y&t=8s
`
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
`;

const addTwoNumbers = (l1, l2) => {
  let result = new ListNode(0);
  let currentNode = result;
  let carryOver = 0;

  while (l1 || l2) {
    let v1 = 0;
    let v2 = 0;

    if (l1) v1 = l1.val;
    if (l2) v2 = l2.val;

    let sum = v1 + v2 + carryOver;
    carryOver = Math.floor(sum / 10);
    sum = sum % 10;

    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carryOver > 0) {
    currentNode.next = new ListNode(carryOver);
  }
  return result.next;
};
