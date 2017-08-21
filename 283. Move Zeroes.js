/**
 * 这个题不适合js，我觉得应该是有一次性添加0的方式的，应该考的是这一点
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    for (let i = 0, len = nums.length;i < len;i++){
        if (nums[i] === 0){
            nums.splice(i, 1)
            count++;
            i--;
        }
    }
    for (let i = 0;i < count;i++){
        nums.push(0);
    }
};

2147483647