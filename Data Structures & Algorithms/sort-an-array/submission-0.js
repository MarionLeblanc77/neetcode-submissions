class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length -1)
        return nums        
    }

    mergeSort(arr, l, r) {
        if (l >= r) return
        let m = Math.floor(( l + r ) / 2)
        this.mergeSort(arr, l, m)
        this.mergeSort(arr, m + 1, r)
        this.merge(arr, l, m, r)
    }

    merge(arr, l, m, r){
        let tempLeft = []
        let tempRight = []

        for (let i = l ; i < m + 1 ; i++){
            tempLeft.push(arr[i])
        }
        for (let i = m + 1 ; i < r +1 ; i++){
            tempRight.push(arr[i])
        }

        let leftPointer = 0
        let rightPointer = 0
        let arrPointer = l

        while (leftPointer < tempLeft.length && rightPointer < tempRight.length){
            if (tempLeft[leftPointer] <= tempRight[rightPointer]) {
                arr[arrPointer] = tempLeft[leftPointer]
                leftPointer ++
            } else {
                arr[arrPointer] = tempRight[rightPointer]
                rightPointer ++
            }
            arrPointer ++
        }
        while (leftPointer < tempLeft.length) {
            arr[arrPointer] = (tempLeft[leftPointer])
            leftPointer ++
            arrPointer ++
        }
        while (rightPointer < tempRight.length) {
           arr[arrPointer] = (tempRight[rightPointer])
            rightPointer ++
            arrPointer ++
        }

    }
}