/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    if (root === null) return true;
    let flag = false;

    let getDepth = (t) => {
        if (t === null )return 0;

        let left = getDepth(t.left);
        let right = getDepth(t.right);
        if (Math.abs(left - right) > 1){
            flag = true;
        }
        return left >= right ? left + 1 : right +1;
    }

    getDepth(root)

    return !flag;
};
