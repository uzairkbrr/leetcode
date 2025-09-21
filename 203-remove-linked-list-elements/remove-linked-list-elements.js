/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // dummy node before head
    let dummy = new ListNode(0, head);
    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            // skip the node
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
};