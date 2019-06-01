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
var isSymmetric = function(root) {
    if (root === null) return true;

    let judge = (left,right) => {
        if (left == null || right == null){
            return left == right;
        }


        if (left.val !== right.val){
            return false;
        }


        return judge(left.left,right.right) && judge(left.right,right.left);
    }


    return judge(root.left,root.right);
};
