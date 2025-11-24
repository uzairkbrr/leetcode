/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let result = [];
    let num = 0;

    for (let bit of A) {
        // (num * 2 + bit) shifts the previous value left (multiply by 2) and adds the new bit.
        // I take % 5 because to only care about divisibility by 5.
        // Keeping num modulo 5, prevents the number from getting large while preserving divisibility.
        num = (num * 2 + bit) % 5;
        result.push(num === 0);
    }

    return result;
};
