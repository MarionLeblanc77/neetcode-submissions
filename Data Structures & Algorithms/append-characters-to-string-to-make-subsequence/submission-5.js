class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let index = 0;
        for (let i in s) {
            if (s[i] == t[index]) {
                index ++
            }
            if (index == t.length) return 0

        }
        return t.length - index
    }
}
