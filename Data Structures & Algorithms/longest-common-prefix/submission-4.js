class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = ""
        let stop = false
        let i = 0
        const firstString = strs[0]
        const max = firstString.length
        while (!stop && i < max) {
            let letter = firstString[i]
            for (let y = 1; y < strs.length ; y++) {
                if(strs[y][i] != letter) {
                    stop = true
                    break
                }                
            }
            if (!stop) {
                prefix = prefix + letter
                i++
            }
        }
        return prefix
    }
}
