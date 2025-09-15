class Solution(object):
    def canBeTypedWords(self, text, brokenLetters):
        """
        :type text: str
        :type brokenLetters: str
        :rtype: int
        """

        broken = set(brokenLetters)
        # Split the string and store it as words of array
        words = text.split()
        count = 0
        
        # Iterate through the array of words, and check if there's any broken character in the word. 
        for word in words:
            if all(ch not in broken for ch in word):
                count += 1
        
        return count

        