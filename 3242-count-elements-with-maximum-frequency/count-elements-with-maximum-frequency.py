class Solution(object):
    def maxFrequencyElements(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        
        count = Counter(nums)
        max_freq = max(count.values())
        # sum up all frequencies that equal max_freq
        total = sum(freq for freq in count.values() if freq == max_freq)
        return total
        