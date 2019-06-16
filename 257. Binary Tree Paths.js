/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let rs = [];

    let dfs = (tree,prev) => {
        if (tree === null) return false;

        if (! (tree.left || tree.right)){
            rs.push(prev + tree.val);
        }

        dfs(tree.left,`${prev}${tree.val}->`);
        dfs(tree.right,`${prev}${tree.val}->`);
    }
    dfs(root,'');

    return rs;

};
