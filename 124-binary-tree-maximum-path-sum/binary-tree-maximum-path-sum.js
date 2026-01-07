/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    let traverse = (current) => {
        if (!current) return 0;

        let left = Math.max(0, traverse(current.left));
        let right = Math.max(0, traverse(current.right));

        let currentMax = current.val + left + right;
        maxSum = Math.max(currentMax, maxSum);

        return current.val + Math.max(left, right);
    }

    traverse(root);
    return maxSum;
};