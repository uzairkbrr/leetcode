class Solution(object):
    def hasSameDigits(self, s):
        """
        :type s: str
        :rtype: bool
        """
        arr = list(map(int, s))
        while len(arr) > 2:
            arr = [(arr[i] + arr[i+1]) % 10 for i in range(len(arr)-1)]
        
        return arr[0] == arr[1]