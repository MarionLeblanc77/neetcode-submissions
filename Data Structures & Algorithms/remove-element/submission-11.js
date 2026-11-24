class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let endPointer = nums.length
        let k = []
        if (endPointer === 1) {
            if (nums[0] === val) return 0
            return 1
        }
        for (let i = 0; i < endPointer ; i++){
            if (nums[i] === val) {
                while ((nums[endPointer] == undefined || nums[endPointer] === val) && endPointer > i) {
                    endPointer--
                }
                if (nums[i] !== nums[endPointer]) {
                    k.push(nums[endPointer])
                    nums[i] = nums[endPointer]
                    nums[endPointer] = val
                }
            } else {
                k.push(nums[i])
            }
        }
        console.log(k)
        return k.length
    }
}
