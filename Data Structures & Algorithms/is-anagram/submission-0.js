class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if ( s.length !== t.length) {
            return false
        }
        const sArray = [...s];
        const tArray = [...t];
        sArray.sort();
        tArray.sort();
        for (const i in sArray) {
            if (sArray[i] !== tArray[i]){
                return false
            }
        }
        return true
    }
}
