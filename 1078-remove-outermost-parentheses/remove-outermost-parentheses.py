class Solution(object):
    def removeOuterParentheses(self, s):
        """
        :type s: str
        :rtype: str
        """
        answer = ''
        level = 0
        for i in s:
            if i == "(":
                level += 1
                if level > 1:
                    answer += i
            if i == ")":
                if level > 1:
                    answer += i
                level -= 1

        return answer     