class Solution(object):
    def canBeTypedWords(self, text, brokenLetters):
        """
        :type text: str
        :type brokenLetters: str
        :rtype: int
        """
        # # Split the string and store it as words of array ( words )
        # # Iterate through words, and check if there's any broken character/letter in the word. 

        wordCount = 0
        for word in text.split():
            found = False
            for char in brokenLetters:
                if char in word:
                    found = True
                    break
            if not found:
                wordCount += 1
            
        return wordCount




        