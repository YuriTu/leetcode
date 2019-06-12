/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {

    if (root === null) return false;
    let isLeft = false;
    let isRight = false;

    let nextValue = sum - root.val;
    // not lefa
    if (root.left || root.right){
        isLeft = hasPathSum(root.left,nextValue);
        isRight = hasPathSum(root.right,nextValue);
    } else {
        // is lefa
        if (nextValue === 0){
            return true;
        } else {
            return false;
        }
    }

    return isLeft || isRight;


};
