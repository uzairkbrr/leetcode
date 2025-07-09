# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        current = dummy

        carry = 0
        while l1 or l2 or carry:
            a = l1.val if l1 else 0
            b = l2.val if l2 else 0

            newValue = a + b + carry
            carry = newValue // 10
            newValue = newValue % 10

            current.next = ListNode(newValue)
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
            current = current.next

        return dummy.next
            