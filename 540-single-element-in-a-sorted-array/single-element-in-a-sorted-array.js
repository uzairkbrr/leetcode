/**
 * @param {number[]} arr
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // if mid even => mid+1, if mid odd => mid-1
        let paired = mid ^ 1; 

        if (arr[mid] === arr[paired]) {
            // mid is part of a valid pair => single is to the right
            left = mid + 1;
        } else {
            // mid is not paired correctly => single is at mid or to the left
            right = mid;
        }
    }

    return arr[left];
};
