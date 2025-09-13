class Solution(object):
    def maxFreqSum(self, s):
        """
        :type s: str
        :rtype: int
        """
        cnt = Counter(s)
        vowels = set('aeiou')
        
        max_vowel = 0
        max_consonant = 0
        
        for c, freq in cnt.items():
            if c in vowels:
                if freq > max_vowel:
                    max_vowel = freq
            else:
                if freq > max_consonant:
                    max_consonant = freq
                    
        return max_vowel + max_consonant