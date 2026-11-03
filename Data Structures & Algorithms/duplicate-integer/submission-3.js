class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let boolean = false;
        nums.forEach((v, index)=>{
            const otherNums = [...nums];
            otherNums.splice(index, 1);
            otherNums.forEach((newV)=>{
                if (v-newV === 0) {
                    boolean = true
                }
            })
        })
        return boolean
    }
}
