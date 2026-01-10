/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let set = new Set();
    for (let num of nums1) {
        set.add(num);
    }

    let result = [];

    for (let num of nums2) {
        if (set.has(num) && !result.includes(num)) {
            result.push(num);
        }
    }

    return result;
};