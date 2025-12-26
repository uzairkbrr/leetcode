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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const hash = serialize(root);
    const subHash = serialize(subRoot);

    return hash.includes(subHash);
};


const serialize = function(root) {
    let hash = "";

    const traversal = (current) => {
        if (!current) {
            hash += "-#";
            return;
        }

        hash = hash + "-" + current.val;
        traversal(current.left);
        traversal(current.right);
    }
    traversal(root);
    return hash;
}

