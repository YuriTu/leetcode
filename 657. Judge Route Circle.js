/**
 * Created by Yuri on 17/8/25.
 */
/**
 * 当然最简单快捷的方法是for循环撸过去计数，我就是想用点不一样的
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if (moves.length === 0){
        return true;
    }
    if(moves.length % 2 === 1){
        return false;
    }
    let u = moves.match(/U/g)
    let d = moves.match(/D/g)
    let l = moves.match(/L/g)
    let r = moves.match(/R/g)

    let test = (val1,val2) => {
        let rs = true;
        if(!!val1 && !!val2){
            // 两个都有值
            if ( val1.length !== val2.length){
                rs = false;
            }
        } else if ( !!val1 !== !! val2){
            // 一个有一个没有
            rs = false
        }
        // 两个都是null
        return rs;
    }


    return test(u,d) && test(l,r);
};