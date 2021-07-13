//时间复杂度o(nlogn)
Array.prototype.quickSort = function() {
    //递归函数
    const rec = (arr) => {
        //如果元素长度小于2就不需要排序了
        if (arr.length < 2) {
            return arr;
        }
        const left = []; //比基准小的数组
        const right = []; //比基准大的数组
        const mid = arr[0]; //数组的第一位为基准
        //从数组的第二位开始循环与基准进行比较
        for (let i = 1; i < arr.length; i++) {
            //如果比基准小，插入left中，否则插入y中
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        //返回值为左边数组+基准元素+右边数组
        return [...rec(left), mid, ...rec(right)];
    };
    const res = rec(this);
    res.forEach((n, i) => {
        this[i] = n;
    });
    return this;
};
const arr = [2, 1, 1, 2, 3, 4, 14, 5];
console.log(arr.quickSort());