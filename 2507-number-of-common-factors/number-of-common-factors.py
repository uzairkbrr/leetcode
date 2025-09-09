class Solution(object):
    def commonFactors(self, a, b):
        """
        :type a: int
        :type b: int
        :rtype: int
        """
        common = 1

        for i in range(2, min(a, b) +1):
            if a % i == 0 and b % i == 0:
                common += 1
        
        return common
        