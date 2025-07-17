class Solution(object):
    def numOfSubarrays(self, arr, k, threshold):
        """
        :type arr: List[int]
        :type k: int
        :type threshold: int
        :rtype: int
        """
        count = 0 
        window = sum(arr[0:k])
        if window >= k * threshold:
            count += 1
        
        for i in range(k, len(arr)):
            window += arr[i] - arr[i-k]
            
            if window >= k * threshold:
                count+=1
        
        return count