class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for(let i=0; i < arr.length; i++){
            arr[i] = Math.max(...arr.slice(i+1), -1);
        }
        return arr
    }
}
