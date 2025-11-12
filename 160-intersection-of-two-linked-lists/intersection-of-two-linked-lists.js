/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // Create set from headB 
    // let store = new Set();

    // while (headB) {
    //     store.add(headB);
    //     headB = headB.next;
    // }

    // // Check each element of headA in the set
    // while (headA) {
    //     if (store.has(headA)) {
    //         return headA;
    //     }
    //     headA  = headA.next;
    // }

    // return null;



    //  Two pointer approach
    let A = headA;
    let B = headB;
    let n = m = 0;

    while(A) {
        n++;
        A = A.next;
    }

    while(B) {
        m++;
        B = B.next;
    }

    console.log("N: ", n, " M: ", m);

    if (n > m) {
        let difference = n - m;
        let i = 0;
        while(i < difference) {
            headA = headA.next;
            i++;
        }
    } else  if (n < m){
        let difference = m - n;
        let i=0;
        while(i < difference) {
            i++;
            headB = headB.next;
        }
    }

    while(headA || headB) {
        if (headA == headB) return headA;

        headA = headA.next;
        headB = headB.next;
    }

    return null;
};