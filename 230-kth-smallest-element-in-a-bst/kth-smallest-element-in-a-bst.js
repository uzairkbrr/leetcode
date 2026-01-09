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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let answer = null;

    const inOrder = (current) => {
        if (answer) {
            return;
        }

        if (current.left) {
            inOrder(current.left);
        }

        if(++count === k) {
            answer = current.val;
        }

        if (current.right) {
            inOrder(current.right);
        }
    }   

    inOrder(root); 
    return answer;
};