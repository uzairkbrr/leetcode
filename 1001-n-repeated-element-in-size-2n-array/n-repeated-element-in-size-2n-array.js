/**
 * @param {number[]} nums
 * @return {number}
 */
// var repeatedNTimes = function(nums) {
//     let map = {};

//     for (let i=0; i<nums.length; i++) {
//         if (map[nums[i]]) {
//             return nums[i];
//         } else {
//             map[nums[i]] = true;
//         }
//     }   
// };

var repeatedNTimes = function(nums) {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return num;
        seen.add(num);
    }
};