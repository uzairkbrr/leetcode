/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;
    let n = head.next;

    while (current && n) {
        prev.next = n;
        current.next = n.next;
        n.next = current;

        prev = current;
        current = prev.next;
        n = current && current.next;
    }

    return dummy.next;
};