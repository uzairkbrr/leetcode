class Solution(object):
    def minSubArrayLen(self, target, nums):
        """
        :type target: int
        :type nums: List[int]
        :rtype: int
        """
        minimal = float('inf')    
        window = 0
        s = 0

        for i in range(len(nums)):
            s += nums[i]

            while s >= target:
                minimal = min(minimal, i - window + 1)
                s -= nums[window]
                window += 1
        
        return 0 if minimal == float('inf') else minimal



