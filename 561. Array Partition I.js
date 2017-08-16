/**
 *Given an array of 2n integers,
 * your task is to group these integers into n pairs of integer,
 * say (a1, b1), (a2, b2), ..., (an, bn)
 * which makes sum of min(ai, bi) for all i from 1 to
 * n as large as possible.
 * /

 /**
 * @param {number[]} nums
 * @return {number}
 * 这个题本身一点都不难，就是个排序的事情，
 * 只是猛一看没反应上来用最小值的最大和的分组方式是啥，理解了一下就出来了
 */



var arrayPairSum = function(nums) {
    let arr = qs(nums);
    let rs = 0;
    for (let i = 0;i < arr.length;i += 2){
        rs += arr[i]
    }
    return rs;
};

let qs = (arr = []) => {

    if(arr.length <= 1){
        return arr;
    }
    let pIndex = Math.floor( arr.length /2 );
    let p = arr.splice(pIndex,1)[0];
    let left = [];
    let right =[];
    for (let i = 0,len = arr.length;i < len;i++){
        if(arr[i] < p){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qs(left).concat(p,qs(right))
}