// https://leetcode.com/problems/palindrome-linked-list/

const isPalindrome = (head) => {
  const arr = [];
  while (head && head.val) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.every((item, index) => item === arr[arr.length - 1 - index]); // isPalindrome
};
