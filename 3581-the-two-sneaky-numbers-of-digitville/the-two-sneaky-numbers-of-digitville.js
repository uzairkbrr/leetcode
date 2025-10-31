/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let map = {};

    for (let i=0; i<nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    let repeated = [];
    for (let number in map) {
        if (map[number] > 1) {
            repeated.push(Number(number));
        }
    }

    return repeated;
};