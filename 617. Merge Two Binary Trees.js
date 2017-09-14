/**
 * Created by Yuri on 17/9/14.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 当时null的时候直接可以返回另外一个一个就好，这就是慢的原因
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    let merge = (node1,node2) => {
        let root = null
        if(node1 && node2){
            root = new TreeNode( (+node1.val) +  (+node2.val))
            root.left = merge(node1.left,node2.left)
            root.right = merge(node1.right,node2.right)
        } else if(node1 || node2) {
            let node = node1 || node2
            root = new TreeNode(node.val)
            root.left = merge(node.left,null)
            root.right = merge(node.right,null)
        }
        return root
    }
    return merge(t1,t2)

};