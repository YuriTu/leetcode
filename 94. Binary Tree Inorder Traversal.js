var inorderTraversal = function(root) {
    if (root === null) return [];

    let queue = [root];
    let rs = [];

    while (queue.length){
        let cur = queue.shift();
        if (cur.right){
            queue.unshift(cur.right)
        }
        if (typeof cur === 'number'){
            rs.push(cur)
        } else {
            queue.unshift(cur.val);
        }
        if (cur.left){
            queue.unshift(cur.left)
        }
    }

    return rs;
};
