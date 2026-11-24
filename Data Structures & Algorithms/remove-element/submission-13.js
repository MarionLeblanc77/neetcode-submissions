class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let endPointer = nums.length
        let k = []

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
        return k.length
    }
}
