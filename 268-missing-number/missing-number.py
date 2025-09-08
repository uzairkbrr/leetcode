class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        for i in range(n + 1):
            if i not in nums:
                return i

        n = len(nums)
        # find sum till n;
        expected_sum = n * (n + 1) // 2   
        
        # Now find the actual sum ( all the values which is in nums )
        actual_sum = sum(nums)

        # The difference is the target/required value
        return expected_sum - actual_sum