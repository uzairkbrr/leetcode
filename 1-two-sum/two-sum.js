/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // Brute force approach (Time: O(n^2), Space: O(1))
    // for (let i=0; i<nums.length; i++) {
    //     for (let j=i+1; j<nums.length; j++) {
    //         if (nums[i] + nums[j] === target) return [i,j];
    //     }
    // }

    // Two Sum approach 
    let map = {};

    for (let i=0; i<nums.length; i++) {
        map[nums[i]] = i;
    }

    for (let i=0; i<nums.length; i++) {
        let pair = target - nums[i];
        if (map[pair] && map[pair] !== i) {
            return [i, map[pair]];
        }
    }

};