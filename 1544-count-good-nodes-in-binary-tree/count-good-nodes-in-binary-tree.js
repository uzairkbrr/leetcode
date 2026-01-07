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
var goodNodes = function(root) {
    let answer = 0;
    
    let traverse = (current, maxSeenSoFar) => {
        if (!current) return;

        if (maxSeenSoFar <= current.val) {
            answer++;
        } 

        let max = Math.max(current.val, maxSeenSoFar);
        current.right && traverse(current.right, max);
        current.left && traverse(current.left, max);
    }

    traverse(root, -Infinity);
    return answer;
};