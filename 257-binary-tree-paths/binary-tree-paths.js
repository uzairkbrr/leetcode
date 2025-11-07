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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];

    function dfs(node, path) {
        if (!node) return;

        // Build current path string
        path += node.val;

        // If it's a leaf node, add path to result
        if (!node.left && !node.right) {
            result.push(path);
            return;
        }

        // Otherwise, continue DFS on left and right subtrees
        path += "->";
        dfs(node.left, path);
        dfs(node.right, path);
    }

    dfs(root, "");
    return result;
};