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

        if (!(maxSeenSoFar > current.val)) {
            answer++;
            maxSeenSoFar = current.val;
        } 

        current.right && traverse(current.right, maxSeenSoFar);
        current.left && traverse(current.left, maxSeenSoFar);
    }

    traverse(root, -Infinity);
    return answer;
};