/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        let index = -1; 

        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        } if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else if (arr[mid] > arr[mid - 1]){
            left = mid;
        }
    }
};