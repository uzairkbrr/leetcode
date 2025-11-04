/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2];
    arr.sort((a, b) => a - b);
   
    let median = Math.floor(arr.length / 2);
    let result = 0;

    if (arr.length % 2 !== 0) {
        result = arr[median];
    } else {
        result = ((arr[median] + arr[median - 1]) / 2)
    }

    return result;
};