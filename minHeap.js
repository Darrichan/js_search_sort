class minHeap {
    constructor() {
        this.heap = [];
    }
    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp;
    }
    getParentIndex(index) {
        return (index - 1) >> 1
    }
    getLeftIndex(index) {
        return index * 2 + 1
    }
    getRightIndex(index) {
        return index * 2 + 2
    }
    shiftup(index) {
        if (index == 0) return
        const parenIndex = this.getParentIndex(index)
        if (this.heap[parenIndex] > this.heap[index]) {
            this.swap(parenIndex, index)
            this.shiftup(parenIndex)
        }
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }
    insert(value) {
        this.heap.push(value);
        this.shiftup(this.heap.length - 1);
    }
    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0)

    }
    peek() {
        return this.heap[0]
    }
    size() {
        return this.heap.length
    }
}
const minheap = new minHeap();
minheap.insert(3)
console.log(minheap);

minheap.insert(2)
console.log(minheap);

minheap.insert(1)
console.log(minheap);