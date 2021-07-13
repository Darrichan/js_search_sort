Array.prototype.selectionSort = function() {
    for (let i = 0; i < this.length - 1; i++) {
        let indexMin = i;
        for (let j = i; j < this.length; j++) {
            if (this[j] < this[indexMin]) {
                indexMin = j;
            }
        }
        const tmp = this[i]
        this[i] = this[indexMin];
        this[indexMin] = tmp;
    }
}
const arr = [5, 4, 3, 2, 1]
arr.selectionSort();
console.log(arr)