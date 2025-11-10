/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 1. Find left (start/first) index, then find right (end/last) index.
    // 2. Return both;

    let left = 0, right = nums.length - 1;
    let answer = [-1, -1];

    while (left <= right) {
        let mid = left + Math.floor((right - left ) / 2);

        if (nums[mid] === target) {
            answer[0] = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) {
            answer[1] = mid;
            left = mid + 1;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (nums[right] === target) {
        answer[1] = right;
    }

    return answer;
}; 

