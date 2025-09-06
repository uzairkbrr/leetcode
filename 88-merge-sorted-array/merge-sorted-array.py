class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """

        # Store nums1 values in n1Copy; To merge the arrays in nums1;
        n1Copy = nums1[0: m]
        # p1 for nums1; p2 for nums2;
        p1 = 0
        p2 = 0

        # Iterate over the entire length of nums1 (m + n slots)
        for i in range(m + n):
            # Decide whether to take from n1Copy or nums2:
            # Case 1: If nums2 is already exhausted (p2 >= n), we must take from n1Copy.
            # Case 2: If nums1 still has elements (p1 < m), AND the current element in n1Copy is <= current element in nums2, then take from n1Copy.
            if p2 >= n or (p1 < m and n1Copy[p1] <= nums2[p2]):
                nums1[i] = n1Copy[p1]
                p1 += 1
            else:
                nums1[i] = nums2[p2]
                p2 += 1 