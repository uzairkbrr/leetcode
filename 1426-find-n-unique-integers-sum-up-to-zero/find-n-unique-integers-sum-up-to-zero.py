class Solution(object):
    def sumZero(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        array = []

        # Add pairs of positive and negative numbers
        # Example: if n=4 → we add (1, -1), (2, -2)
        for i in range(1, n // 2 + 1):
            array.append(i)  
            array.append(-i)  

        # If n is odd, add a 0 to make the count correct
        # Example: n=5 → after adding pairs (1,-1),(2,-2), add 0, so the final array will be [-1,1,-2,2,0]
        if n % 2 != 0:
            array.append(0)

        # Return the final list of numbers
        return array
