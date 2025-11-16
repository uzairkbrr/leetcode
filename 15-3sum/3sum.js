/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort the array
    nums.sort((a,b) => a-b);

    let answer = [];

    for (let i=0; i<nums.length; i++) {
        if (nums[i] != nums[i-1]) {
            twoSum(nums, i, answer);
        }
    }

    return answer;
};

var twoSum = function(numbers, x, answer) {
    let i = x+1; j = numbers.length - 1;

    while(i < j) {
        let sum = numbers[i] + numbers[j] + numbers[x]
        if (sum === 0) {
            answer.push([numbers[i], numbers[j], numbers[x]]);
            i++;
            j--;
            while (i < j && numbers[i] == numbers[i-1]) {
                i++;
            } 
        } else if (sum > 0) {
            j--;
        } else if (sum < 0) {
            i++;
        }
    }
};