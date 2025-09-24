# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: Optional[ListNode]
        :type n: int
        :rtype: Optional[ListNode]
        """

        # Two pointers approach (one pass)

        # Dummy pointer before head;
        dummy = ListNode(0)
        dummy.next = head

        # Place the first pointer n nodes ahead
        first = head
        for i in range(n):
            first = first.next

        # Start second pointer from start and first from nth node, and go ahead one by one 
        second = dummy
        while first:
            second = second.next
            first = first.next

        second.next = second.next.next

        return dummy.next 