class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = ""
        let i = 0
        const firstString = strs[0]
        const max = firstString.length
        while (i < max) {
            let letter = firstString[i]
            for (let y = 1; y < strs.length ; y++) {
                if(strs[y][i] != letter) {
                    return prefix
                }                
            }
            prefix = prefix + letter
            i++
        }
        return prefix
    }
}
