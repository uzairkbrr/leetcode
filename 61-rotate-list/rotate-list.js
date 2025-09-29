/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    
    // 1. Find length;
    let length = 1;
    let tail = head;
    
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // 2. Adjust k 
    // k = 7, length = 5; so the actual rotation is 2 (7 % 5 == 2)
    k = k % length;    
    // if the rotation is the same as length e.g: (k=5; length=5), the list will not change;
    if (k === 0) return head;

    // 3. Find the Kth node;
    let newTail = head;
    for (let i = 1; i < length - k; i++) {
        newTail = newTail.next;
    }

    // 4. Connect nodes accordingly
    let newHead = newTail.next;
    tail.next = head;
    newTail.next = null;

    return newHead;
};