class Solution(object):
    def compareVersion(self, version1, version2):
        """
        :type version1: str
        :type version2: str
        :rtype: int
        """
         # Split by "."
        #  1.2 => [1, 2]
        #  1.10 => [1, 1, 0]
        v1_parts = version1.split(".")
        v2_parts = version2.split(".")
        
        # Find max length (to cover all revisions, filling missing ones with "0")
        max_len = max(len(v1_parts), len(v2_parts))
        
        for i in range(max_len):
            # Convert to int to ignore leading zeros
            num1 = int(v1_parts[i]) if i < len(v1_parts) else 0
            num2 = int(v2_parts[i]) if i < len(v2_parts) else 0
            
            if num1 < num2:
                return -1
            elif num1 > num2:
                return 1
        
        return 0
        