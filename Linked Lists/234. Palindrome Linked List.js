// https://leetcode.com/problems/palindrome-linked-list/

// Solution O(n) time | O(n) space - use a stack to push all values from the 1st half and then pop

// Solution O(n) time | O(1) space - with double pointers traverse to the middle, reverse the 2nd half and compare
// see problem 206
const reverseLL = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;
    // change direction
    current.next = prev;

    // move prev and current by 1 place
    prev = current;
    current = temp;
  }

  return prev;
};

const isPalindrome = (head) => {
  let fast = head;
  let slow = head;
  let firstHalfNode = head;
  let length = 0;

  // slow will end in the beginning(head) of the second half
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    length++;
  }

  // the head(ex-tail) of the reversed
  let reversedSecondHalfNode = reverseLL(slow);

  while (length) {
    length--;
    if (reversedSecondHalfNode.val !== firstHalfNode.val) return false;
    reversedSecondHalfNode = reversedSecondHalfNode.next;
    firstHalfNode = firstHalfNode.next;
  }

  return true;
};
