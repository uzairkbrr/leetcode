class Solution(object):
    def isValid(self, word):
        """
        :type word: str
        :rtype: bool
        """
        if len(word) < 3:
            return False

        vowels = 'aeiouAEIOU'
        hasVowel = False
        hasConsonant = False

        for char in word:
            if not (char.isalpha() or char.isdigit()):
                return False

            if char.isalpha():
                if char in vowels:
                    hasVowel = True
                else:
                    hasConsonant = True
        
            
        return hasVowel and hasConsonant

        