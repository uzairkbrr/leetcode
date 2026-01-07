/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return root;

    let traverse = (current) => {

        if (current.left) {
            current.left.next = current.right;
        }
        
        if (current.right && current.next) {
            current.right.next = current.next.left;
        }

        current.left && traverse(current.left);
        current.right && traverse(current.right);
    }

    traverse(root);
    return root;
};