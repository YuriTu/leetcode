

/**
 *
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if (nums.length === 0){
        return nums;
    }
    const cur_r = nums.length;
    const cur_c = nums[0].length;
    if( r * c !== cur_r * cur_c ){
        return nums;
    }
    let all = []
    for (let i = 0;i < nums.length ;i++){
        all = all.concat(nums[i]);
    }
    const rs = [];
    let temp = [];
    all.forEach(item => {
        if (temp.length === c - 1){
            temp.push(item)
            rs.push(temp);
            temp = []
            return;
        }
        temp.push(item);
    })
    return rs;
};