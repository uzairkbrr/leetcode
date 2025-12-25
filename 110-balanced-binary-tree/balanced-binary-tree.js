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
 * @return {boolean}
 */
var isBalanced = function(root) {

    let answer = true;
    
    const calculateHeight = function(current) {
        if (!current) return 0;

        let leftHeight = calculateHeight(current.left);
        let rightHeight = calculateHeight(current.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            answer = answer && false;
        } 

        return 1 + Math.max(leftHeight, rightHeight);
    }

    calculateHeight(root);
    return answer;

};