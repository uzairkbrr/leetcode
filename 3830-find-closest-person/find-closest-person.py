class Solution(object):
    def findClosest(self, x, y, z):
        """
        :type x: int
        :type y: int
        :type z: int
        :rtype: int
        """
        
        one = abs(x-z)
        two = abs(y-z)

        if one == two:
            return 0
        elif one < two:
            return 1
        else:
            return 2
        