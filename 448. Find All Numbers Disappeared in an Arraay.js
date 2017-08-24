/**
 * Created by Yuri on 17/8/24.
 */
/**
 * 这个题的关键就在于如何不使用额外空间的情况下，进行数据index的标记
 * 答案就是*-1 在不改变原有数字的基础上，快速进行index标记
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let rs = [];
    for (let i = 0;i < nums.length;i++){
        let item = nums[i];
        if(item < 0){
            item = -item;
        }

        if(nums[item - 1] > 0){
            nums[item - 1] = -nums[item - 1]
        }
    }
    for (let i = 0;i < nums.length;i++){
        if(nums[i] > 0){
            rs.push(i + 1)
        }
    }
    return rs
};