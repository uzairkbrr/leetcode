/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let set = new Set(nums);

    while (head !== null && set.has(head.val)) {
        head = head.next;
    }

    let temp = head;
    while (temp !== null && temp.next !== null) {
        if (set.has(temp.next.val)) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }

    return head;
};
