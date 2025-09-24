/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let temp = head;

    // Step 1: Find length
    while (temp) {
        length++;
        temp = temp.next;
    }

    // Step 2: Find the position to remove (from start)
    let prevPosition = length - n;

    // Step 3: Use a dummy node
    let dummy = new ListNode(0);
    dummy.next = head;
    let previous = dummy;

    // Step 4: Move to one previous node
    for (let i = 0; i < prevPosition; i++) {
        previous = previous.next;
    }

    // Step 5: Remove node
    previous.next = previous.next.next;

    // Step 6: Return new head
    return dummy.next;
};
