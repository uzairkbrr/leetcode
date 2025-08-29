class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """

        if x < 0:
            return False

        reverse = 0
        number = x

        while x > 0:
            digit = x % 10
            reverse = reverse * 10 + digit
            x = x // 10

        # handle 32-bit overflow
        if reverse < -2**31 or reverse > 2**31 - 1:
            return False

        return number == reverse