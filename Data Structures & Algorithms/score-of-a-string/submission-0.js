class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let second = 1;
        let sum = 0;
        while (s[second]) {
            const charFirst = s[second - 1]
            const charSecond = s[second]
            const val1 = charFirst.charCodeAt(0);
            const val2 = charSecond.charCodeAt(0);
            sum = sum + Math.abs(val2 - val1)
            second = second + 1
        }
        return sum        
    }
}
