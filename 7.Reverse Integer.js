/**
 * Created by renren on 2017/3/30.
 */
// Reverse digits of an integer.
//
//     Example1: x = 123, return 321
// Example2: x = -123, return -321

// 我的解法还是太暴力了，效率都很低，处在整个排行的比较后的位置 第92%...，这一点需要注意
// 这个题目其实对js不友好，js中的Number为浮点数存储，根本没有int概念
// 其安全范围也是 2^53-1  ---  -(2^53-1),非要模拟出java一样的2 ^ 32 -1
// 溢出其实是没法用 其他语言的int的溢出特性来处理的，有什么好方法呢，还是需要再找
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = Math.pow(2, 31) - 1;
    const positive = x < 0;
    const sx = Math.abs(x).toString();
    const besx = new Array(sx.length);
    for (let i = 0;i < sx.length;i++){
        besx[i] = sx[sx.length - 1 - i];
    }
    const rs = (positive ? "-" : "") + besx.join("");
    if (rs > max || (-rs > max + 1)){
        return 0;
    }
    return parseInt(rs);
};