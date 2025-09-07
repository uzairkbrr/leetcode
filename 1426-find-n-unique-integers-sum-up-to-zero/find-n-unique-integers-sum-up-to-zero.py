class Solution(object):
    def sumZero(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        # # only return 0 if n is out of range
        # if not (1 <= n <= 100):
        #     return 0

        array = []
        for i in range(1, n // 2 + 1):
            array.append(i)
            array.append(-i)

        if n % 2 != 0:
            array.append(0)

        return array
