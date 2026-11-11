class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        const s = nums.join('');
        let a = s.split('0');
        let numberA = a.map((i)=> i.length)
        return Math.max(...numberA)
    }
}
