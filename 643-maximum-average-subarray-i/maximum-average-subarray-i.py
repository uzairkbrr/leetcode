class Solution(object):
    def findMaxAverage(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """
        s = sum(nums[:k])
        ms = s

        for i in range(k, len(nums)):
            s = s + nums[i] - nums[i-k]
            ms = max(ms, s)

        return ms / float(k)
        