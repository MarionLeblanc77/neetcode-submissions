class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = ""
        let stop = false
        let i = 0
        let max = Math.max(...strs.map((str) => str.length))
        while (!stop && i < max) {
            let letter = strs[0][i]
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
