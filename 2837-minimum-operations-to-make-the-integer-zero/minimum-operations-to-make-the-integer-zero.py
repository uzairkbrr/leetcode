class Solution(object):
    def makeTheIntegerZero(self, num1, num2):
        """
        :type num1: int
        :type num2: int
        :rtype: int
        """
                # We try different numbers of operations (ops)
        for ops in range(61):  # 61 is enough for 64-bit integers
            target = num1 - ops * num2   # what's left after subtracting ops * num2
            
            # Check 3 conditions
            if target >= 0:  # must not be negative
                if bin(target).count("1") <= ops <= target:  # binary trick
                    return ops   # found the answer
        
        return -1  # if no solution works
