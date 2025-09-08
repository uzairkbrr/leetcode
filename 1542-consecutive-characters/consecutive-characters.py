class Solution(object):
    def maxPower(self, s):
        """
        :type s: str
        :rtype: int
        """
        length = 1
        maximumLength = 1
        char = s[0]

        for i in range(1, len(s)):
            if s[i] == char:
                length += 1
            else:
                length = 1
                char = s[i]
            
            if maximumLength < length:
                maximumLength = length

        return maximumLength


                