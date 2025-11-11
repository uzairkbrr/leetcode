/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0; j = numbers.length - 1;

    while(i <= j) {
        if (numbers[i] + numbers[j] === target) {
            // I've to work with 1 base indexing (so, adding 1 to cover that condition)
            return [i + 1, j + 1];
        } else if (numbers[i] + numbers[j] > target) {
            j--;
        } else if (numbers[i] + numbers[j] < target) {
            i++;
        }
    } 
};