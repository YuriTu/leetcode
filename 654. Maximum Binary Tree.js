/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let max = (list,start,end) => {
        let max = start;
        for (let i = start;i < end;i++){
            if(list[max] < list[i]){
                max = i
            }
        }
        return max
    }
    let create  = (list,start,end) => {
        if(start === end){
            return null
        }
        let maxIndex = max(list,start,end)
        let root = new TreeNode(list[maxIndex])
        root.left = create(list,start,maxIndex)
        root.right = create(list,maxIndex + 1,end)
        return root
    }
    return create(nums,0,nums.length);
};