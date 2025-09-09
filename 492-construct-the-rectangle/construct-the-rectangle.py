class Solution(object):
    def constructRectangle(self, area):
        """
        :type area: int
        :rtype: List[int]
        """
        import math

        # Start from the square root of area
        width = int(math.sqrt(area))

        # Move down until we find a width that divides area
        while area % width != 0:
            width -= 1
        
        # Return [length, width]
        return [area // width, width]
