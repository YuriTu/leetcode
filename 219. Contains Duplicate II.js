/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    let rs = false;

    for (let i = 0; i < nums.length; i++){
        let item = nums[i];
        if (map.has(item) && (i - map.get(item)) <= k){
            rs = true;
            return rs;
        } else {
            map.set(item,i);
        }
    }

    return rs;


};
