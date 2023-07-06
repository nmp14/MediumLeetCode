/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: any | null, k: number): any | null {
  if (head === null || k === 0) {
    return head;
  }

  let tail = head;
  let len = 1;
  while (tail.next !== null) {
    tail = tail.next;
    len++;
  }
  k %= len;

  tail.next = head;

  for (let i = 0; i < len - k; i++) {
    tail = tail.next;
  }

  head = tail.next;
  tail.next = null;

  return head;
};