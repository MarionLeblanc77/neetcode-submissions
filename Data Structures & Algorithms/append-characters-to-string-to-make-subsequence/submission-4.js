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

        }
        return t.length - index
    }
}
