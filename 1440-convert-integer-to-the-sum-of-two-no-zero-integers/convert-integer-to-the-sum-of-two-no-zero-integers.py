class Solution(object):
    def getNoZeroIntegers(self, n):
        """
        :type n: int
        :rtype: List[int]
        """

        array = []

        for i in range(1, n):
            a = n - i

            if '0' not in str(a) and '0' not in str(i):
                return [a, i]
            
        