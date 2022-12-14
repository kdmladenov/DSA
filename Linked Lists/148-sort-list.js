// # 148. Sort List

// - Difficulty: Medium.
// - Related Topics: Linked List, Sort.
// - Similar Questions: Merge Two Sorted Lists, Sort Colors, Insertion Sort List.

// ## Problem

// Sort a linked list in **O**(**n** log **n**) time using constant space complexity.

// **Example 1:**

// ```
// Input: 4->2->1->3
// Output: 1->2->3->4
// ```

// **Example 2:**

// ```
// Input: -1->5->3->4->0
// Output: -1->0->3->4->5
// ```

// * Time complexity : O(nlog(n)).
// * Space complexity : O(n).

var sortList = function(head) {
  if (!head || !head.next) return head;
  var slow = head;
  var fast = head;
  var prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  return merge(sortList(head), sortList(slow));
};

var merge = function (list1, list2) {
  var p1 = list1;
  var p2 = list2;
  var newHead = new ListNode(0);
  var now = newHead;
  while (p1 || p2) {
    if (!p1 || !p2) {
      now.next = p1 || p2;
      break;
    } else if (p1.val < p2.val) {
      now.next = p1;
      p1 = p1.next;
    } else {
      now.next = p2;
      p2 = p2.next;
    }
    now = now.next;
    now.next = null;
  }
  return newHead.next;
};

