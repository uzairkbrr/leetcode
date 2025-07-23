class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        indexes = {}
        for i, num in enumerate(nums):
            if num in indexes and i - indexes[num] <= k:
                return True
            indexes[num] = i
        
        return False